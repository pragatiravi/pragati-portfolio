const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const exp = s.indexOf('export default function App');
if(exp > 0) {
  s = s.slice(0, exp) + '}\n}\n}\n}\n' + s.slice(exp);
}
fs.writeFileSync(p,s);
console.log('done');
