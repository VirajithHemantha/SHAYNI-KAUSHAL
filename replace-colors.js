const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./components');
files.push('./app/globals.css', './app/layout.tsx', './app/page.tsx');

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Maroon/Dark Red -> Peach
    content = content.replace(/#731e3d/gi, '#E2856E');
    content = content.replace(/#91274d/gi, '#F3B0A2');
    content = content.replace(/#5b0d1c/gi, '#D1755E');
    content = content.replace(/#8E1C3F/gi, '#E2856E');
    content = content.replace(/#AD1D45/gi, '#F3B0A2');
    content = content.replace(/#c94c6a/gi, '#F3B0A2');
    content = content.replace(/115,30,61/g, '226,133,110');
    content = content.replace(/115, 30, 61/g, '226, 133, 110');
    content = content.replace(/142,28,63/g, '226,133,110');
    content = content.replace(/142, 28, 63/g, '226, 133, 110');
    content = content.replace(/90,13,28/g, '209,117,94');
    
    // Gold -> Light yellow/peach
    content = content.replace(/#C9A227/gi, '#F8E6A6');
    
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Replaced colors in files');
