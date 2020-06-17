const toReadableTime = (secs) => {
  return new Date(secs * 1000).toISOString().substr(11, 8);
  // const x = parseInt(secs, 10)
  // const hours   = Math.floor(x / 3600)
  // const minutes = Math.floor(x / 60) % 60
  // const seconds = x % 60

  // return [hours,minutes,seconds]
  //     .map(v => v < 10 ? "0" + v : v)
  //     .filter((v,i) => v !== "00" || i > 0)
  //     .join(":")
}

module.exports = class Monitor {

  constructor() {
    this.items = [];
    this.BROWSERS = [
      'chrome', 'firefox', 'iexplore', // windows browsers
    ];
  }

  /**
   * add item to the tray
   * @param {Object} item 
   * {
   *    app: string,
   *    title: string
   * }
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * set items
   * @param {Array<Object>} items 
   */
  setItems(items) {
    this.items = items;
  }

  /**
   * format to readable time
   * @param {Array<Object>} items 
   */
  format(items) {
    return items.map(i => ({
      ...i,
      time: toReadableTime(i.time)
    }))
  }

  /**
   * get all application and count it's session time
   */
  getApplicationTime() {
    const items = this.items.map(i => {
      return {
        app: i.app,
        time: 1,
      };
    })

    return this.format(items.reduce((prev, cur) => {
      const foundItem = prev.find(p => p.app === cur.app);

      if (foundItem) {
        foundItem.time = foundItem.time + 1;
      } else {
        prev.push(cur);
      }

      return prev;
    }, []))
  }

  /**
   * get browser session time
   */
  getBrowserTime() {
    const browsers = this.getApplicationTime();

    return browsers.filter(b => this.BROWSERS.includes(b.app));
  }

  /**
   * get browser tab time
   */
  getBrowserTabTime() {
    const items = this.items
      .filter(b => this.BROWSERS.includes(b.app))
      .map(i => {
        return {
          ...i,
          time: 1,
        };
      });

    return this.format(items.reduce((prev, cur) => {
      const foundItem = prev.find(p => p.title === cur.title);

      if (foundItem) {
        foundItem.time = foundItem.time + 1;
      } else {
        prev.push(cur);
      }

      return prev;
    }, []))
  }
}