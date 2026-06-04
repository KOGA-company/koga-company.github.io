const idss=[
'#home',
'#certificates',
'#gallery'];
const i3d=[
'degree.jpg',
'concentration.jpg',
'certificateDL.jpg',
'certificatePBI.png',
'certificateLESP.jpg',
'recognition1.jpg',
'recognition2.jpg',
'certificateEng.jpg'
];
const ih = "<a class='fb' href='https://www.linkedin.com/in/koga-company/'><img src='li.svg' height='75px'></a> <a class='fb' href='https://github.com/KOGA-company'><img src='gh.svg' height='75px'></a> <a class='fb' href='https://www.youtube.com/@Kogathecompany'><img src='yt.svg' height='75px'></a>";
const tx='kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis kiki du llu lob mi ar llu raidin sei llul neber eber lib from bisaid mi coz ay guant llu en ai nid llu en aim daun for llu olweis';
const dt = setInterval(T, 60);
var txi = 0;
var index = -1;
function S(n){
  const x = document.getElementsByClassName('S1');
  index += n;
  if (index < 0){
    index = x.length - 1
  }
  if (index >= x.length){
    index = 0
  }
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';  
  }
  x[index].style.display = 'block';
}
function F(){
  const x = document.getElementsByClassName('ft')
  for (var n = 0; n<x.length; n++){
    x[n].innerHTML = ih;
  }
}
function T() {
  document.getElementById('in').innerHTML += tx[txi];
  if (txi==tx.length-1){
    clearInterval(dt);
  }
  txi+=1;
}
function G(m,l){
  if (document.getElementById('t').src!=i3d[m]){
    document.getElementById('t').src=i3d[m];
  }
  document.getElementById('zb').href=idss[l];
  document.getElementById('home').style.display='none';
  document.getElementById('certificates').style.display='none';
  document.getElementById('gallery').style.display='none';
  document.getElementById('c1a').style.display='none';
  document.getElementById('c1b').style.display='none';
  document.getElementById('c1c').style.display='none';
  document.getElementById('m').style.display='none';
  document.getElementById('d').style.display='block';
  document.getElementById('z').style.display='block';
  document.body.style.overflowX='auto';
  document.body.style.overflowY='auto';
}
function H(){
  document.getElementById('home').style.display=null;
  document.getElementById('certificates').style.display=null;
  document.getElementById('gallery').style.display=null;
  document.getElementById('c1a').style.display=null;
  document.getElementById('c1b').style.display=null;
  document.getElementById('c1c').style.display=null;
  document.getElementById('m').style.display=null;
  document.getElementById('d').style.display='none';
  document.getElementById('z').style.display='none';
  document.body.style.overflowX='hidden';
  document.body.style.overflowY='hidden';
}
window.onload = function () {
  S(1);
  F();
};
