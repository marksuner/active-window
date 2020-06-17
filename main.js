const { getActiveWindow } = require('./index');

getActiveWindow((err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App: " + result.app);
    console.log("Title: " + result.title);
  }
}, -1, 1)