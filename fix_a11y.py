import os

app_dir = r"c:\Users\mtayy\OneDrive\Desktop\PROJECT\schedule-builder\app"

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(root, file)
            if "\\builder\\" in filepath or "/builder/" in filepath:
                continue
            
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            changed = False
            
            if '<h4' in content:
                content = content.replace('<h4', '<h3').replace('</h4>', '</h3>')
                changed = True
                
            if '<div className="min-h-screen bg-slate-50' in content:
                content = content.replace('<div className="min-h-screen bg-slate-50', '<main className="min-h-screen bg-slate-50')
                
                # Replace the last </div> before ); }
                parts = content.rsplit('</div>', 1)
                if len(parts) == 2:
                    content = '</main>'.join(parts)
                changed = True
                
            if changed:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print("Updated " + filepath)
