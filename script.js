  const textBtn = document.getElementById('textToggle');
  textBtn.addEventListener('click', ()=>{
    const on = document.documentElement.classList.toggle('large-text');
    textBtn.classList.toggle('on', on);
    textBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });

  const pills = document.querySelectorAll('.navpill');
  pills.forEach(p=>{
    p.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.getElementById(p.dataset.target);
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  const sections = Array.from(pills).map(p=>document.getElementById(p.dataset.target)).filter(Boolean);

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        pills.forEach(p=> p.classList.toggle('active', p.dataset.target === id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s=> io.observe(s));

  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{
    backBtn.classList.toggle('show', window.scrollY > 500);
  });
  backBtn.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
