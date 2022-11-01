let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
        window.localStorage.setItem("--background", "#050505");
        window.localStorage.setItem("--backgroundtwo", "#0069f1")
        moods();
    }else{
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
        window.localStorage.setItem("--background", "#0a192f");
        window.localStorage.setItem("--backgroundtwo", " #db2777")
        moods();
    }

};
moods();

let menu = document.querySelector('.fa-bars')
let list = document.querySelector('.list')
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    list.classList.toggle('more')
};
//======================================================================================================
let controlicons = document.querySelectorAll(".control-icon .control");
let sex = document.querySelectorAll(".section");
let Allse = document.querySelector(".main-content");

function pageTransition(){
  for (let i = 0; i< controlicons.length;i++){
    controlicons[i].addEventListener('click', function(){
          let currbtn = document.querySelectorAll('.active-btn');
          currbtn[0].className = currbtn[0].className.replace('active-btn', '');
          this.className += ' active-btn';
      })
  }
  //section active
  Allse.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if(id){
      sex.forEach((section) => {
          section.classList.remove('active');
      })
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // toggle theme
  let btnlight = document.querySelector(".btns");
  btnlight.addEventListener('click', () => {
    let body = document.querySelector("body");
      body.classList.toggle("active");
  })
}

pageTransition();
//================================================================================
//================================================================================================= //
// Start Auto Function
moods();
language();
// Start Function Mood
let dark = document.getElementById('ion');
dark.onclick = () => {
  window.localStorage.setItem("--background", "#050505");
  window.localStorage.setItem("--backgroundtwo", "#0069f1")


moods();
};
let light = document.querySelector(".light");
light.onclick = () => {
  window.localStorage.setItem("--background", "#0a192f");
  window.localStorage.setItem("--backgroundtwo", " #db2777")

  moods();
};
function moods() {
  document.documentElement.style.setProperty(
    "--background",
    window.localStorage.getItem("--background")
  );
  document.documentElement.style.setProperty(
    "--backgroundtwo",
    window.localStorage.getItem("--backgroundtwo")
  );
  document.documentElement.style.setProperty(
    "--section-background",
    window.localStorage.getItem("--section-background")
  );

}
// ============================================================================================== //

