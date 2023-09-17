import { app, ipcMain, shell } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import path from 'path';
import {   PUBLIC_PATH,   } from './util';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();
  // pie.initialize(app);
  const mainWindow = createWindow('main', {
    width: 1300,
    height: 900,
    title: '智囊 AI',
    icon: path.join(__dirname, PUBLIC_PATH, 'logo.png'),
    backgroundColor: '#ffffff',
  });

  if (isProd) {
    await mainWindow.loadURL('https://zhinang.ai/chat?prompt=1');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`https://zhinang.ai/chat?prompt=1`);
    // mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
