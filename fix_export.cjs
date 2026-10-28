const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
if(s.includes('\n\n  export default')) {
  s = s.replace('\n\n  export default', '\n\n}\n\nexport default');
}
if(!s.includes('}\n\nexport default function App')) {
  // try to ensure closing brace before export
  const idx = s.indexOf('export default function App');
  if(idx > 0) {
    // find last } before export that's not inside
    s = s.slice(0, idx).replace(/\s+$/, '') + '\n\n}\n\n' + s.slice(idx);
  }
}
fs.writeFileSync(p,s);
console.log('done');
