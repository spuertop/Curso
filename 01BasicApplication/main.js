const { app, BrowserWindow } = require('electron') //import modules for lifecycles and control browser windows

function createWindow () { //new browser with node Integration enabled, up index.html
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {  //listener for quit app if no windows is open
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => { //listener creates windows if no window if visible after activation or reloading
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
