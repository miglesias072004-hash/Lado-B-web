document.querySelector('.hamburger')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if(window.innerWidth<=760) nav.style.position='absolute';
  if(window.innerWidth<=760) nav.style.top='66px';
  if(window.innerWidth<=760) nav.style.right='5vw';
  if(window.innerWidth<=760) nav.style.left='5vw';
  if(window.innerWidth<=760) nav.style.padding='18px';
  if(window.innerWidth<=760) nav.style.background='rgba(255,253,248,.98)';
  if(window.innerWidth<=760) nav.style.flexDirection='column';
  if(window.innerWidth<=760) nav.style.border='1px solid rgba(23,26,22,.14)';
  if(window.innerWidth<=760) nav.style.borderRadius='18px';
});
const video=document.querySelector('.hero-video');
if(video){
  video.addEventListener('loadeddata',()=>document.querySelector('.video-fallback').style.opacity='0');
  video.addEventListener('error',()=>document.querySelector('.video-fallback').style.opacity='1');
}
