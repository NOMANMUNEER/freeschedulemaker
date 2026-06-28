const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Skip builder/page.tsx as it already has main
      if (fullPath.includes('\\builder\\') || fullPath.includes('/builder/')) continue;
      
      let changed = false;
      
      // Fix sequential heading issue (h2 -> h4 to h2 -> h3)
      if (content.includes('<h4 className="text-xl')) {
        content = content.replace(/<h4 className="text-xl/g, '<h3 className="text-xl');
        content = content.replace(/<\/h4>/g, '</h3>');
        changed = true;
      }
      
      // Fix missing landmark (main) issue
      if (content.includes('<div className="min-h-screen bg-slate-50')) {
        content = content.replace('<div className="min-h-screen bg-slate-50', '<main className="min-h-screen bg-slate-50');
        content = content.replace(/<\/div>\s*\);\s*}/, '</main>\n  );\n}');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
