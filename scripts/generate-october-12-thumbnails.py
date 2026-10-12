#!/usr/bin/env python3
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import hashlib,json,sys
root=Path(__file__).resolve().parents[1]; items=json.loads(Path(sys.argv[1]).read_text())
out=root/'public/oct12';out.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf'
for item in items:
 seed=hashlib.sha256(item['slug'].encode()).digest(); bg=(13+seed[0]%32,31+seed[1]%38,53+seed[2]%45); accent=(85+seed[3]%145,105+seed[4]%135,115+seed[5]%130)
 im=Image.new('RGB',(1536,1024),bg);d=ImageDraw.Draw(im);d.polygon([(930,0),(1536,0),(1536,1024),(1110,1024),(780,520)],fill=accent);d.ellipse((1115,170,1415,470),outline='white',width=8);d.line((1050,760,1430,760),fill='white',width=8)
 f=ImageFont.truetype(bold,67);small=ImageFont.truetype(bold,26);brand=ImageFont.truetype(regular,24)
 d.rounded_rectangle((70,70,350,128),15,fill=accent);d.text((92,84),item['system'].upper(),font=small,fill='white')
 lines=[];line=''
 for word in item['title'].split():
  trial=(line+' '+word).strip()
  if d.textbbox((0,0),trial,font=f)[2]<=745:line=trial
  else:lines.append(line);line=word
 lines.append(line);y=235
 for line in lines:d.text((70,y),line,font=f,fill=(248,250,252));y+=82
 d.text((70,945),'OutsourcedService.com',font=brand,fill=(222,232,241))
 path=out/f"{item['slug']}.{'png' if item['system']=='Blog' else 'webp'}"
 if item['system']=='Blog':im.save(path,'PNG',optimize=True)
 else:im.save(path,'WEBP',quality=88,method=6)
print(f"Generated {len(items)} thumbnails")
