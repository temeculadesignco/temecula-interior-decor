function toggleMenu(){document.getElementById('navlinks').classList.toggle('open');}

function filt(btn,cat){
  document.querySelectorAll('.filter button').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.scroller .pcard').forEach(function(c){
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none';
  });
}

// Product carousel: manual arrows + gentle auto-advance
(function(){
  var s=document.getElementById('scroller');
  if(!s) return;
  function step(){var card=s.querySelector('.pcard');return card?card.getBoundingClientRect().width+26:340;}
  window.carScroll=function(dir){s.scrollBy({left:dir*step(),behavior:'smooth'});};
  var paused=false, t;
  ['mouseenter','touchstart','focusin'].forEach(function(e){s.addEventListener(e,function(){paused=true;});});
  ['mouseleave','touchend'].forEach(function(e){s.addEventListener(e,function(){paused=false;});});
  function tick(){
    if(!paused){
      if(s.scrollLeft+s.clientWidth>=s.scrollWidth-4){s.scrollTo({left:0,behavior:'smooth'});}
      else{s.scrollBy({left:step(),behavior:'smooth'});}
    }
  }
  t=setInterval(tick,3200);
})();
