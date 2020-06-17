const { getActiveWindow } = require('./index');

const process = getActiveWindow((err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App: " + result.app);
    console.log("Title: " + result.title);
  }
}, -1, 1)


setTimeout(() => {
  console.log('should kill the process')

  console.log(process.getApplicationTime())
  console.log(process.getBrowserTabTime())
  console.log(process.getBrowserTime())

  process.end();

}, 20000)

