const {dialog} = require('electron').remote;
const fs = require('fs');
const marked = require('marked');

var content;
let body = document.getElementById('main');

dialog.showOpenDialog(function (fileNames) {
  if(fileNames === undefined) {
    console.log("No file selected");
  }else{
    fs.readFile(fileNames[0], 'utf-8', function(err, data) {
      if(err) {
        console.log("Error: " + err);
      }
      content = data;
      body.innerHTML = content;
    })
  }
});

document.getElementById('tbtn').addEventListener('click', function() {
  if(document.getElementById('theme').getAttribute('data-theme')==="dark") {
    document.getElementById('theme').setAttribute('href', 'index.css');
    document.getElementById('toggle').setAttribute('class', 'fa fa-toggle-off');
    document.getElementById('theme').setAttribute('data-theme', 'light');
  } else {
    document.getElementById('theme').setAttribute('href', 'dark.css');
    document.getElementById('toggle').setAttribute('class', 'fa fa-toggle-on');
    document.getElementById('theme').setAttribute('data-theme', 'dark');
  }
});

document.getElementById('edit').addEventListener('click', function() {
  if(document.getElementById('editID').getAttribute('data-state')==="edit") {
    body.innerHTML = marked(content);
    document.getElementById('editID').setAttribute('data-state', "view");
  } else {
    body.innerHTML = content;
    document.getElementById('editID').setAttribute('data-state', "edit");
  }
})
