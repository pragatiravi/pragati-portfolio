const fs = require('fs');
const s = fs.readFileSync('E:/prg-portfolio/src/App.jsx','utf8');
console.log(s.includes('useReducedMotion()') ? 'hasr' : 'nor', s.includes('whileHover') ? 'hasw' : 'now');
