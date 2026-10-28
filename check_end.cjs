const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const i = s.indexOf('Contact(){');
const j = s.indexOf('export default');
console.log(s.slice(i+5, j+60));
