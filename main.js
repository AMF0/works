let txt_header =` Hi, my name is`,
    header_element=document.getElementById('txt_header'),
    i=0;

let write_method = setInterval(function (){
    header_element.textContent += txt_header[i];
    i++;
    if( i>txt_header.length-1 ){
        clearInterval(write_method);
    }
},100);

//onclick
let icon = document.getElementById('ion');
let home = document.getElementById('home');
icon.onclick = function(){

icon.classList.toggle("open");

home.style.display = "block";

}

// scroll up

let span = document.querySelector(".up");
window.onscroll = function(){
    console.log(this.scrollY);
this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function(){
    window.scrollTo({
top: 0,
behavior: "smooth",
    });

};


let loading = document.querySelector(".loading");
window.onload = () => {
setTimeout(() => {  

}, 1000);
};

// filter



(function filter() {
let buttons = document.querySelectorAll('.btn');
let imge = document.querySelectorAll('.imge');
buttons.forEach((buttons) =>{

buttons.addEventListener('click', (e) => {
e.preventDefault()
let filter = e.target.dataset.filter
imge.forEach((item)=> {
if(filter === 'All'){
item.style.display = 'block';

}else{

if(item.classList.contains(filter)){


    item.style.display = 'block';



}else{


    item.style.display = 'none';


}

}
})

})
})
})()

// mode sun moon
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
// =======================================================================  //

let menu = document.querySelector('.fa-bars')
let list = document.querySelector('.list')
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    list.classList.toggle('more')
};
//
let controlicon = document.querySelectorAll(".control-icon .control");
let sec = document.querySelectorAll(".section");
let Allsec = document.querySelector(".main-content");

function pageTransition(){
  for (let i = 0; i< controlicon.length;i++){
    controlicon[i].addEventListener('click', function(){
          let currbtn = document.querySelectorAll('.active-btn');
          currbtn[0].className = currbtn[0].className.replace('active-btn', '');
          this.className += ' active-btn';
      })
  }
  //section active
  Allsec.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if(id){
      sec.forEach((section) => {
          section.classList.remove('active');
      })
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // toggle theme
  let btnlight = document.querySelector(".light-icon");
  btnlight.addEventListener('click', () => {
    let body = document.querySelector("body");
      body.classList.toggle("light-mode");
  })
}

pageTransition();

//////////////////// Start ABOUT ME
let projects = document.querySelectorAll(".portfolio .box");
let h1 = document.querySelectorAll(".about .info .right-about .box .text h1");

h1[0].innerHTML = `
<h1>${projects.length}+</h1>
`

let countDownDate = new Date("Jan 1, 2022 0:0:0").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = (dateNow - countDownDate);


  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));

  h1[1].innerHTML = `
  <h1>${days}+</h1>
  `

}, 1000);


//////////////////// End ABOUT ME


function download() {
  const blob = new Blob(['../Cream Minimalist Professional CV Resume.pdf'], {type:'application/pdf'});
  
  downloadfile(blob, "Mohamed-Elkady.pdf");
}

function downloadfile(blob, fileName) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  a.remove();
  document.addEventListener("focus", w=>{window.URL.revokeObjectURL(blob)});
}
// ==============================================================================================
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

