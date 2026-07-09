function toggleMenu(){document.getElementById('navlinks').classList.toggle('open');}
function filt(btn,cat){
  document.querySelectorAll('.filter button').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.scroller .pcard').forEach(function(c){
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none';
  });
}
window.carScroll=function(dir,el){
  var s=el?el.closest('.carousel').querySelector('.scroller'):document.querySelector('.scroller');
  if(!s)return;
  var card=s.querySelector('.pcard');var step=card?card.getBoundingClientRect().width+16:170;
  s.scrollBy({left:dir*step,behavior:'smooth'});
};
(function(){
  document.querySelectorAll('.scroller').forEach(function(s){
    var paused=false;
    ['mouseenter','touchstart','focusin'].forEach(function(e){s.addEventListener(e,function(){paused=true;});});
    ['mouseleave','touchend'].forEach(function(e){s.addEventListener(e,function(){paused=false;});});
    function stepw(){var c=s.querySelector('.pcard');return c?c.getBoundingClientRect().width+16:170;}
    setInterval(function(){
      if(paused)return;
      if(s.scrollLeft+s.clientWidth>=s.scrollWidth-4){s.scrollTo({left:0,behavior:'smooth'});}
      else{s.scrollBy({left:stepw(),behavior:'smooth'});}
    },3200);
  });
})();
