document.getElementById('year').textContent=new Date().getFullYear();
const lb=document.getElementById('lightbox');
const lbimg=lb.querySelector('img');
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{
  lbimg.src=img.src;
  lbimg.alt=img.alt||'';
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
}));
function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbimg.src='';lbimg.alt=''}
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('close'))closeLb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});