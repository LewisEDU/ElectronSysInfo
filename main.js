const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 1000})
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.webContents.openDevTools()
    //mainWindow.setMenuBarVisibility(false);
    mainWindow.on('closed', function(){
        //Calls when the window is closed (Used to dereference multiple windows)
        mainWindow = null 
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    //Called when the application is completely closed
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', function(){
    if(mainWindow === null){
        createWindow()
    }
})

