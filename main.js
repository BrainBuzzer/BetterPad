const {dialog} = require('electron').remote;
const fs = require('fs');
const marked = require('marked');
dialog.showOpenDialog(function (fileNames) {
  if(fileNames === undefined) {
    console.log("No file selected");
  }else{
    fs.readFile(fileNames[0], 'utf-8', function(err, data) {
      if(err) {
        console.log("Error: " + err);
      }
      console.log(marked(data));
      document.getElementById('main').innerHTML = marked(data);
    })
  }
});
