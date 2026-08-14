/* Berlin — Aufdeck-Karten + Quiz */
(function(){
  // Aufdeck-Karten
  document.querySelectorAll('.card').forEach(function(c){
    c.addEventListener('click',function(){c.classList.toggle('open');});
  });

  // Quiz (aus window.QUIZ)
  var box=document.getElementById('quizBox');
  if(box && window.QUIZ){
    var scoreEl=document.getElementById('score');
    var answered=0, correct=0, total=window.QUIZ.length;
    window.QUIZ.forEach(function(item,i){
      var div=document.createElement('div');div.className='qq';
      div.innerHTML='<span class="qnum">Frage '+(i+1)+' / '+total+'</span><h3>'+item.q+'</h3>';
      var opts=document.createElement('div');opts.className='opts';
      item.opts.forEach(function(o,j){
        var b=document.createElement('button');b.type='button';b.textContent=o;
        b.addEventListener('click',function(){
          if(div.classList.contains('done'))return;
          div.classList.add('done');answered++;
          if(j===item.right){b.classList.add('right');correct++;}
          else{b.classList.add('wrong');opts.children[item.right].classList.add('right');}
          if(scoreEl){
            var tail = answered===total ? (correct===total?' — perfekt.':' — solide Basis.') : '';
            scoreEl.textContent='Stand: '+correct+' von '+answered+' richtig'+tail;
          }
        });
        opts.appendChild(b);
      });
      div.appendChild(opts);
      var ex=document.createElement('p');ex.className='expl';ex.textContent=item.expl;
      div.appendChild(ex);
      box.appendChild(div);
    });
  }
})();
