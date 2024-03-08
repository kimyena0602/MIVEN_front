document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');

  video.addEventListener('play', function () {
   setTimeout(function () {
        video.classList.add('fadeOut');
    }, 5000);
    var element = document.getElementById("remove");
      setTimeout(function () {
        element.remove(); 
      },6000);
  });
  
});

  let isClick=false;
  function buttonClick(){
  isClick = !isClick;
  if(isClick){
    btn.style.display="block";
  } else {
    btn.style.display="none";
  }
}
const btn =document.getElementById("#Group");