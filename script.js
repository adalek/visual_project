let voice = document.getElementById('voice');
voice.volume = 0.1

let glitch = document.getElementById('glitch')
glitch.volume = 0.2;

window.onscroll = function(){
  scrollingControl(document.documentElement.scrollHeight,1600,voice);

}

let y,d,m;
function scrollingControl(y,d,m){
  let scrollY=document.documentElement.scrollTop;

  console.log(scrollY);

  let targetY= y;

  let distance= targetY-scrollY
  console.log("distance:"+distance);


  if (distance<d){
    m.volume= 1-distance/d;
  }

}
