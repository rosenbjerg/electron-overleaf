// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 870,
	webPreferences: {
	  nodeIntegration: false
	},
    icon: path.join(__dirname, "icon-192x192.png")});
  mainWindow.loadURL('https://v2.overleaf.com/project');

  mainWindow.on('closed', function () {
    mainWindow = null
  });
    mainWindow.setMenu(null);
}


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
