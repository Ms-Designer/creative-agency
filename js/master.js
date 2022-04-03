//Check If There's Local Storage Color Option
let mainColors =localStorage.getItem("color_option");

if (mainColors !== null){
    document.documentElement.style.setProperty('--main-color' ,mainColors);

//Remove active Class from all colors List Item

document.querySelectorAll(".color-list li").forEach(element=>{
    element.classList.remove("active");

   
});


//Add Active class on element with data-color === locala storage item
if (element.dataset.color===mainColors){

    //Add Active Class
    element.classList.add("active");
}
};


//switch random background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

randomBackEl.forEach(span=>{

    //Click on everyspan
    span.addEventListener("click", (e) => {

       
    //remove Active Class from All childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");

       
    });

     //add Active Class On Self
     e.target.classList.add("active");

    });
});








// start boxsettings

document.querySelector(".toggle-settings .fa-cog").onclick=function (){
    this.classList.add('fa-spin');

    document.querySelector('.settings-box').classList.toggle('open');
};

// switch Colors
const colorsLi= document.querySelectorAll(".color-list li");

colorsLi.forEach(li=>{
    li.addEventListener("click", (e) => {

        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);


    //remove Active Class from All childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");

       
    });

     //add Active Class On Self
     e.target.classList.add("active");

     if (e.target.dataset.background ==='yes') {

       console.log("yes");
       

     } else {

        backgroundOption =false;
        clearInterval(backgroundInterval);
     }

    });
});



// select landing page

let landingPage =document.querySelector(".landing-page");

//Get Array of Imgs 

let imgsArray =["bg1.jpg" , "bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"]


//Random Background Option
let backgroundOption =true;

// Variable To Control The Interval
let backgroundInterval;

//Function To Randomize Imgs 
function randomizeImgs(){
    if (backgroundOption === true) {
        backgroundInterval= setInterval(()=> {
            let randomNumber= Math.floor(Math.random() * imgsArray.length);
            
            landingPage.style.backgroundImage='url("images/' + imgsArray[randomNumber] +'" ) '
            },7000)
            
    }

}

randomizeImgs();



// Select Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll =function() {
    //skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
console.log(skillsOffsetTop)
    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight= this.innerHeight;

    let windowScrollTop =this.pageYOffset;


    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach( skill=> {
            skill.style.width= skill.dataset.progress;
        })
    }
}


//create popup With The Image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

     img.addEventListener('click' , (e) => {
           
        //create overlay element

      let overlay=  document.createElement("div");

      overlay.className='popup-overlay';

      //append Oberlay To The Body 
      document.body.appendChild(overlay);

      // Create popup

      let popupBox = document.createElement("div");

      //Add class to The Popup box 
      popupBox.className=("popup-box");

      if (img.alt !==null){
        //create heading
        let imgHeading = document.createElement("h3");

        //creat text 
        let imgText =document.createTextNode(img.alt);

        //append text to heading
        imgHeading.appendChild(imgText);

        //append The Heading
        popupBox.appendChild(imgHeading);
    }
    

      //Create The Image
      let popupImage =document.createElement("img");

      //Set Image Source 
      popupImage.src=img.src;

      //Add Image To Popup Box 
      popupBox.appendChild(popupImage);

      //Append The Popup Box To Body
      document.body.appendChild(popupBox);

      // create the close button
      let closeButton = document.createElement("span");

      let closeButtonText = document.createTextNode("X");

      closeButton.appendChild(closeButtonText);

     closeButton.className='close-button';

     popupBox.appendChild(closeButton);



    
     });

});

//close popup 
document.addEventListener("click" , function(e) {
    if (e.target.className =='close-button'){

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
});

//select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//select All links
const allLinks = document.querySelectorAll(".links a");


function scrollToSomewhere (elements){
    elements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
};
scrollToSomewhere(allLinks);
scrollToSomewhere(allBullets);


// Handle Active State

function handleActive(ev){
    //remove Active Class from All childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");

       
    });

     //add Active Class On Self
     ev.target.classList.add("active");
};

let bulletsSpan= document.querySelectorAll(".bulle-option span");

let bulletsContainer =document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if(bulletLocalItem!==null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if(bulletLocalItem!=='block') {
        bulletsContainer.style.display ='none';
        document.querySelector(".bull-option .yes").classList.add("active");
    } else{
        bulletsContainer.style.display = 'block';
        document.querySelector(".bull-option .no").classList.add("active");

    }

}

bulletsSpan.forEach( span =>{
    span.addEventListener("click" ,(e) => {
        if(span.dataset.display === 'show') {
            bulletsContainer.style.display ='block';
            
        } else {
            bulletsContainer.style.display= 'none';        }
            handleActive(e);
    } );

});

//toggle menu
 
 let toggleBtn =document.querySelector(".toggle-menu");
 let tLinks = document.querySelector(".links");

 toggleBtn.onclick = function(e) {

    e.stopPropagation();
    //Toggle Class "menu-active" On button 
    this.classList.toggle("menu-active")

    tLinks.classList.toggle("open");
 };


 // click anywhere outside Menu Toogle Button

 document.addEventListener("click",(e) => {
     if(e.target !==toggleBtn && e.target !==tLinks){
        //check if menu is open 

        if (tLinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active")

            tLinks.classList.toggle("open");
        }
     };
    });
    tLinks.onclick= function(e){
        e.stopPropagation();
    }

