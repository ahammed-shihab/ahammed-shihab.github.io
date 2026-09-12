import re
import os

html_path = 'updated-portfolio.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to convert HTML to JSX
def html_to_jsx(html):
    # class to className
    jsx = html.replace('class="', 'className="')
    # fix unclosed img
    jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', jsx)
    # fix unclosed input
    jsx = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', jsx)
    # fix unclosed br
    jsx = re.sub(r'<br(.*?)(?<!/)>', r'<br\1/>', jsx)
    # fix unclosed hr
    jsx = re.sub(r'<hr(.*?)(?<!/)>', r'<hr\1/>', jsx)
    # fix HTML comments to JSX comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx)
    return jsx

# Extract Navbar
header_match = re.search(r'<header[^>]*>.*?</header>', content, re.DOTALL)
if header_match:
    navbar_jsx = html_to_jsx(header_match.group(0))
    navbar_code = f"""import Link from "next/link";

export default function Navbar() {{
  return (
    {navbar_jsx}
  );
}}
"""
    with open('src/components/navbar.tsx', 'w', encoding='utf-8') as f:
        f.write(navbar_code)

# Sections definitions
sections = [
    ("Hero", "Hero", "01. HERO SECTION", "src/components/sections/hero.tsx"),
    ("About", "About", "02. ABOUT ME SECTION", "src/components/sections/about.tsx"),
    ("Skills", "Skills", "03. TECHNICAL SKILLS SECTION", "src/components/sections/skills.tsx"),
    ("Projects", "Projects", "04. FEATURED PROJECTS SECTION", "src/components/sections/projects.tsx"),
    ("Experience", "Experience", "05. EDUCATION & EXPERIENCE TIMELINE", "src/components/sections/experience.tsx"),
    ("Blog", "Blog", "06. LATEST WRITING / RESEARCH NOTES", "src/components/sections/blog.tsx"),
    ("Contact", "Contact", "07. GET IN TOUCH / CONTACT SECTION", "src/components/sections/contact.tsx"),
]

for name, comp_name, marker, filepath in sections:
    # Find the section using the marker
    marker_escaped = re.escape(marker)
    # The section starts with <section after the marker and ends with </section>
    # Wait, the marker is inside an HTML comment.
    # regex: <!-- marker --> ... <section ...> ... </section>
    
    # We will just find the <section> that immediately follows the marker.
    pattern = rf'<!--\s*{marker_escaped}.*?-->\s*(<section.*?</section>)'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        section_html = match.group(1)
        section_jsx = html_to_jsx(section_html)
        
        # Build the component
        code = f"""import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function {comp_name}() {{
  return (
    {section_jsx}
  );
}}
"""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(code)
    else:
        print(f"Could not find section for {name}")

print("Components successfully generated.")
