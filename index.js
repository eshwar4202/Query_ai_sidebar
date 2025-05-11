require('dotenv').config();
const path = require('path');
const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: Math.floor(width * 0.2), // 20% width like a sidebar
    height: height,
    x: 0,         // Left of the screen
    y: 0,
    frame: false, // No title bar or border
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    skipTaskbar: true,
    focusable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});

