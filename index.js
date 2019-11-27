#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
require('shelljs/global');
let currentPath=process.cwd();
let vueEslintConfigPath=process.env.PWD;
//console.log(process,vueEslintConfigPath);
console.log(currentPath)
console.log(__dirname)


let copyFiles=['.editorconfig','.eslintignore','.eslintrc.js','.prettierignore','.prettierrc','vscode.settings.json']

/*
 "eslint": "^4.13.1",
    "eslint-config-standard": "^14.1.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^10.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
 */

 let installs=['eslint','eslint-config-standard','eslint-plugin-import','eslint-plugin-node','eslint-plugin-promise','eslint-plugin-standard']
copyFiles.map(el=>{

  let sPath=path.join(__dirname+'/configs',el);
  let cPath=path.join(currentPath,el);
  
  fs.copyFileSync(sPath,cPath);
  console.log('copying file ',sPath,cPath)
  
})

console.log('copy file end')

//var version = exec('node --version', {silent:true}).output;

let cmd='npm i '+installs.join(' ')+' --save-dev';
console.log(cmd);
// Async call to exec()
exec(cmd, function(status, output) {
  console.log('Exit status:', status);
  console.log('Program output:', output);
});