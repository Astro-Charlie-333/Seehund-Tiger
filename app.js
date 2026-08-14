/* Berlin — gemeinsame Interaktionen */
(function(){
  // Reveal beim Scrollen
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('h2,.lead,.cell,.plate,.tl .t,.quote,.reads,.acc,.gloss,.index a,.intro').forEach(function(el){el.classList.add('reveal');io.observe(el);});

  // Accordion
  document.querySelectorAll('.acc .row > button').forEach(function(b){
    b.addEventListener('click',function(){b.parentElement.classList.toggle('open');});
  });

  // Lightbox
  var lb=document.createElement('div');
  lb.className='lightbox';
  lb.innerHTML='<button class="lb-close" aria-label="Schließen">Schließen ✕</button><div class="lb-inner"><div class="lb-frame"></div><div class="lb-meta"><div><h3></h3><p></p></div></div></div>';
  document.body.appendChild(lb);
  var lbFrame=lb.querySelector('.lb-frame'), lbH=lb.querySelector('h3'), lbP=lb.querySelector('p');
  function openLB(svg,title,note){lbFrame.innerHTML=svg;lbH.textContent=title||'';lbP.textContent=note||'';lb.classList.add('open');}
  function closeLB(){lb.classList.remove('open');lbFrame.innerHTML='';}
  document.querySelectorAll('.plate').forEach(function(p){
    p.addEventListener('click',function(){
      var svg=p.querySelector('.frame svg');
      openLB(svg?svg.outerHTML:'',p.dataset.title,p.dataset.note);
    });
  });
  lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('lb-close'))closeLB();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLB();});

  // Glossar (nur Startseite)
  if(window.GLOSS){
    var wbox=document.querySelector('.gloss .words'), dbox=document.querySelector('.gloss .def');
    window.GLOSS.forEach(function(g,i){
      var b=document.createElement('button');b.className='gword';b.type='button';b.textContent=g[0];
      b.addEventListener('click',function(){
        document.querySelectorAll('.gword').forEach(function(x){x.classList.remove('on');});
        b.classList.add('on');
        dbox.innerHTML='<span class="w">'+g[0]+'</span><p>'+g[1]+'</p>';
      });
      wbox.appendChild(b);
      if(i===0){b.click();}
    });
  }
})();
