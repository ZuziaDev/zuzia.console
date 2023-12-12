const moment = require("moment");
const axios = require("axios")
const package = require("./package.json")
const exec = require('child_process').exec;
const { promisify } = require('util');
const execAsync = promisify(exec);

async function autoUpdate() {
  try {
    const currentVersion = require('./package.json').version; // Modülün şu anki versiyonunu al
    const latestVersion = await getLatestVersion(); // npm'den en son sürümü kontrol et

    if (currentVersion !== latestVersion) {
      // Eğer şu anki sürüm en son sürüm değilse güncelle
      await execAsync('npm install zuzia.console@latest');

      infoLog({ name: "Zuzia.Console - Update", text: "https://www.npmjs.com/package/zuzia.console" });
    }
  } catch (error) {
    ErrorLog({ name: "Zuzia.Console - Update Error", text: `There was an error during the update: ${error.message}` });
  }
}

async function getLatestVersion() {
  const { stdout } = await execAsync('npm show zuzia.console version');
  return stdout.trim();
}

function convertHexToRgb(hex) {
    const hexValue = hex.replace("#", "");
    const red = parseInt(hexValue.substring(0, 2), 16);
    const green = parseInt(hexValue.substring(2, 4), 16);
    const blue = parseInt(hexValue.substring(4, 6), 16);
    return { red, green, blue };
  }
  
  function hexLog({name: name, text:text, hex: hexColor, timeout: ms}) {
    const rgbColor = convertHexToRgb(hexColor);
    const white = convertHexToRgb("#ffffff");
    let beyaz = `\x1b[38;2;${white.red};${white.green};${white.blue}m`
    const coloredText = `\x1b[1m\x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${moment().format("DD-MM-YYYY HH:mm:ss")}]${beyaz} - \x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${name}]\x1b[0m${beyaz} ${text}\x1b[0m`;
    if(!ms) return console.log(coloredText);
    setTimeout(async () => {
      console.log(coloredText);
    },ms) 
  }
function version() {
    return package.version
 }
 function errorLog({name: name, text:text, timeout: ms}) {
  const rgbColor = convertHexToRgb("#ff0000");
  const white = convertHexToRgb("#ffffff");
  let beyaz = `\x1b[38;2;${white.red};${white.green};${white.blue}m`
  const coloredText = `\x1b[1m\x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${moment().format("DD-MM-YYYY HH:mm:ss")}]${beyaz} - \x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${name}]\x1b[0m${beyaz} ${text}\x1b[0m`;
  if(!ms) return console.log(coloredText);
    setTimeout(async () => {
      console.log(coloredText);
    },ms) 
 }
 function succesLog({name: name, text:text, timeout: ms}) {
  const rgbColor = convertHexToRgb("#00ff00");
  const white = convertHexToRgb("#ffffff");
  let beyaz = `\x1b[38;2;${white.red};${white.green};${white.blue}m`
  const coloredText = `\x1b[1m\x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${moment().format("DD-MM-YYYY HH:mm:ss")}]${beyaz} - \x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${name}]\x1b[0m${beyaz} ${text}\x1b[0m`;
  if(!ms) return console.log(coloredText);
    setTimeout(async () => {
      console.log(coloredText);
    },ms) 
 }
 function warnLog({name: name, text:text, timeout: ms}) {
  const rgbColor = convertHexToRgb("#ffff00");
  const white = convertHexToRgb("#ffffff");
  let beyaz = `\x1b[38;2;${white.red};${white.green};${white.blue}m`
  const coloredText = `\x1b[1m\x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${moment().format("DD-MM-YYYY HH:mm:ss")}]${beyaz} - \x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${name}]\x1b[0m${beyaz} ${text}\x1b[0m`;
  if(!ms) return console.log(coloredText);
    setTimeout(async () => {
      console.log(coloredText);
    },ms) 
 }
 function infoLog({name: name, text:text, timeout: ms}) {
  const rgbColor = convertHexToRgb("#0000ff");
  const white = convertHexToRgb("#ffffff");
  let beyaz = `\x1b[38;2;${white.red};${white.green};${white.blue}m`
  const coloredText = `\x1b[1m\x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${moment().format("DD-MM-YYYY HH:mm:ss")}]${beyaz} - \x1b[38;2;${rgbColor.red};${rgbColor.green};${rgbColor.blue}m[${name}]\x1b[0m${beyaz} ${text}\x1b[0m`;
  if(!ms) return console.log(coloredText);
  setTimeout(async () => {
    console.log(coloredText);
  },ms) 
 }

 function randomHexCode() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const hexCode = '#' + '0'.repeat(6 - randomColor.length) + randomColor;
  return hexCode.toUpperCase();
}

  module.exports = {
    hexLog,
    convertHexToRgb,
    version,
    errorLog,
    succesLog,
    warnLog,
    infoLog,
    randomHexCode,
    autoUpdate
  }