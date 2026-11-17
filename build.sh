#!/bin/sh
# Builds index.html (one self-contained file to open or share) from src/prototype.html:
#  - inlines the logo (src references ../assets/busbora-logo-original.png)
#  - inlines the country data files (<script src="countries/xx.js">, see COUNTRIES.md)
cd "$(dirname "$0")"
python3 - <<'PY'
import base64, re
logo = "data:image/png;base64," + base64.b64encode(open("assets/busbora-logo-original.png","rb").read()).decode()
html = open("src/prototype.html").read().replace("../assets/busbora-logo-original.png", logo)
def inline(m):
    return "<script>/* " + m.group(1) + " */\n" + open("src/" + m.group(1)).read() + "</script>"
html, n = re.subn(r'<script src="(countries/[a-z]+\.js)"></script>', inline, html)
open("index.html","w").write(html)
print("built index.html", len(html)//1024, "KB ·", n, "country files inlined")
PY
