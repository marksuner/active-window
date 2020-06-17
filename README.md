# Attention, this library is not maintained anymore!!!

# active-window
> Get active window title in Node.js.

Compatible with Linux, Windows 7+, and OSX;

## Usage

```javascript
var monitor = require('active-window');

callback = function(err, window){
  if (err) {
      console.log(err);
  } else {
    console.log("App: " + window.app);
    console.log("Title: " + window.title);
  }
}

//Get the current active window
const process = monitor.getActiveWindow(callback);

// end the process
process.end();

// get application time
process.getApplicationTime()

// get browser tab time
process.getBrowserTabTime()

// get browser time
process.getBrowserTime()

```
## Tested on
- Windows
 - Windows 10
 - Windows 7
- Linux 
  - Raspbian [lxdm]
  - Debian 8 [cinnamon]
- OSX
  - Yosemite 10.10.1
  
## TODO
- Fix original code to use promise, catch
- need to update Monitor.BROWSERS on other OS (tested only on windows)
- Test on more operating systems.
- Use native APIs. 

## License
MIT
