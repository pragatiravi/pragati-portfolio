const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
// ensure we close before export if missing
if(s.match(/export default function App\{/)) {
  // count braces from start of file
  let o=0,c=0; let inS=false,inD=false;
  for(let i=0;i<s.length;i++){
    const ch=s[i];
    if(ch==='"' && s[i-1]!=='\\') inD=!inD;
    else if(ch==="'" && s[i-1]!=='\\') inS=!inS;
    else if(!inS&&!inD && ch==='{') o++;
    else if(!inS&&!inD && ch==='}') c++;
  }
  if(o>c) {
    const need = o-c;
    s = s.replace(/\nexport default function App/, '\n'+ '}'.repeat(need) + '\n\nexport default function App');
  }
}
fs.writeFileSync(p,s);
console.log('done');
