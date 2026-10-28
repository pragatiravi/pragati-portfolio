const fs = require('fs');
const s = fs.readFileSync('E:/prg-portfolio/src/App.jsx','utf8');
const open = (s.match(/\{/g)||[]).length;
const close = (s.match(/\}/g)||[]).length;
console.log('open',open,'close',close);
console.log(s.slice(s.lastIndexOf('export'), s.lastIndexOf('export')+120));
