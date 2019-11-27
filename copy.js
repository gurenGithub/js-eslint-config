let fs=require('fs');

let files=['.editorconfig','.eslintignore','.eslintrc.js','.prettierignore','.prettierrc','vscode.settings.json']


files.map(el=>{
  fs.copyFileSync(`./../jsx-template/${el}`,`configs/${el}`)
})
