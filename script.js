function toggleMenu(){document.getElementById('navlinks').classList.toggle('open');}
function filt(btn,cat){
  document.querySelectorAll('.filter button').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('#grid .pcard').forEach(function(c){
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none';
  });
}
