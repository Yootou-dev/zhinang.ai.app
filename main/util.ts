import { app } from 'electron';
import path from 'path';
import fs from 'fs';

const isProd: boolean = process.env.NODE_ENV === 'production';
export const BASE_PATH = path.join(app.getPath('userData'), './data');
export const BASE_PATH_CACHE = path.join(app.getPath('userData'), './ucache');

export const PUBLIC_PATH = path.join(__dirname, isProd ? '../../public' : '../public');
if (!fs.existsSync(BASE_PATH)) {
  fs.mkdirSync(BASE_PATH);
}

if (!fs.existsSync(BASE_PATH_CACHE)) {
  fs.mkdirSync(BASE_PATH_CACHE);
}

console.log('BASE_PATH', BASE_PATH);

export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

