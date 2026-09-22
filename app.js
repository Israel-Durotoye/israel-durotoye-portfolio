const buttons=[...document.querySelectorAll('[data-filter]')];
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));let count=0;document.querySelectorAll('.project').forEach(project=>{const show=button.dataset.filter==='All'||project.dataset.category===button.dataset.filter;project.hidden=!show;if(show)count++;});document.querySelector('#filter-status').textContent='Showing '+count+' projects'+(button.dataset.filter==='All'?'.':' in '+button.dataset.filter+'.');}));
document.querySelector('#copy-email')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('durotoyeoluwaseunisreal@gmail.com');status.textContent='Email copied';}catch{status.textContent='Email: durotoyeoluwaseunisreal@gmail.com';}});

// Start motion only when the visitor has not requested reduced motion.
const motionToggle = document.querySelector('.motion-toggle');
if (motionToggle) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = false;
  const updateMotion = () => {
    const running = !reducedMotion.matches && !motionPaused && !document.hidden;
    document.body.dataset.motion = running ? 'running' : 'paused';
    motionToggle.hidden = reducedMotion.matches;
    motionToggle.textContent = motionPaused ? 'Resume background motion' : 'Pause background motion';
  };
  motionToggle.addEventListener('click', () => {
    motionPaused = !motionPaused;
    updateMotion();
  });
  reducedMotion.addEventListener('change', updateMotion);
  document.addEventListener('visibilitychange', updateMotion);
  updateMotion();
}
