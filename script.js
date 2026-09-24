document.documentElement.classList.add('js');
const root=document.documentElement,toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
const backdrop=document.createElement('div');backdrop.className='nav-backdrop';backdrop.setAttribute('aria-hidden','true');document.body.append(backdrop);
function setMenu(open){nav.classList.toggle('open',open);backdrop.classList.toggle('show',open);root.classList.toggle('nav-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Navigation schließen':'Navigation öffnen')}
toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
backdrop.addEventListener('click',()=>setMenu(false));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);toggle.focus()}});
window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
const ticker=document.querySelector('.ticker');
if(ticker){const group=document.createElement('div');group.className='ticker-group';while(ticker.firstChild)group.append(ticker.firstChild);const clone=group.cloneNode(true);clone.classList.add('ticker-clone');const t=document.createElement('div');t.className='ticker-track';t.append(group,clone);ticker.append(t)}
const track=document.querySelector('#review-track');const copy=track.firstElementChild.cloneNode(true);copy.setAttribute('aria-hidden','true');track.append(copy);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
document.querySelector('#year').textContent=new Date().getFullYear();
