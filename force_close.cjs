const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const exp = s.indexOf('export default function App');
if(exp > 0) {
  s = s.slice(0, exp) + '}\n\n' + s.slice(exp);
  // add a few more just in case
  s = s.replace('\n\nexport default function App', '\n\n}\n\n}\n\nexport default function App');
}
fs.writeFileSync(p,s);
console.log('done');
