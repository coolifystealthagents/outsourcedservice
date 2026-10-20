'use client';
import {useEffect,useState} from 'react';

const fallbacks=['/aug23-heroes/philippines-service-team-backup-coverage.png','/aug23-heroes/philippines-remote-team-quality-coaching.png','/aug23-heroes/philippines-back-office-pilot-queue.png','/aug19-heroes/service-delivery-work-queue-ownership.webp','/aug19-heroes/service-delivery-quality-review-cadence.webp'];
const clean=(s:string)=>s.replace(/[—–]/g,' - ').replace(/--/g,'-');
export function ExperienceEnhancer(){
 const [items,setItems]=useState<{id:string;label:string}[]>([]); const [active,setActive]=useState(''); const [tocOpen,setTocOpen]=useState(false);
 useEffect(()=>{const media=window.matchMedia('(min-width:1101px)');const sync=()=>setTocOpen(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 useEffect(()=>{
  const sanitize=(root:Node)=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(n.parentElement?.closest('script,style,pre,code'))continue;if(n.nodeValue)n.nodeValue=clean(n.nodeValue)};document.querySelectorAll('meta[content],img[alt],a[title]').forEach(el=>{for(const a of ['content','alt','title']){const v=el.getAttribute(a);if(v)el.setAttribute(a,clean(v))}})};
  sanitize(document); const mo=new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(sanitize)));mo.observe(document.body,{childList:true,subtree:true});
  const path=location.pathname; if(!/^\/(blog|research)\//.test(path))return()=>mo.disconnect();
  const article=document.querySelector('main article'); if(!article)return()=>mo.disconnect(); article.classList.add('editorial-article');
  const hs=[...article.querySelectorAll('h2,h3')] as HTMLElement[]; const used=new Set<string>();const toc=hs.map((h,i)=>{let id=(h.textContent||`section-${i+1}`).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');while(used.has(id))id+=`-${i+1}`;used.add(id);h.id=id;return{id,label:h.textContent||`Section ${i+1}`}});setItems(toc);
  if(!article.querySelector('img')){const i=[...path].reduce((a,c)=>a+c.charCodeAt(0),0)%fallbacks.length;const img=document.createElement('img');img.src=fallbacks[i];img.alt=`Visual guide for ${document.querySelector('h1')?.textContent||'outsourced service planning'}`;img.className='editorial-fallback-hero';article.querySelector('.lead')?.insertAdjacentElement('afterend',img)}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive((e.target as HTMLElement).id)}),{rootMargin:'-110px 0px -70%'});hs.forEach(h=>io.observe(h)); return()=>{io.disconnect();mo.disconnect()};
 },[]);
 if(!items.length)return null;
 return <aside className="editorial-tools" aria-label="Article sidebar"><details open={tocOpen} onToggle={(event)=>setTocOpen(event.currentTarget.open)}><summary>On this page</summary><nav>{items.map(x=><a className={active===x.id?'active':''} href={`#${x.id}`} key={x.id}>{x.label}</a>)}</nav></details><div className="editorial-support"><strong>Publisher</strong><p>Outsourced Service, powered by StealthAgents</p><a href="/services">Explore related services</a><a href="/contact-us">Plan a service team</a></div></aside>;
}
