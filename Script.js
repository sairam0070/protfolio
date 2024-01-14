const sections = document.querySelectorAll('.nav-menu li a');

// Smooth Scroll 
sections.forEach((section)=>{
    section.addEventListener('click',(e)=>{
        e.preventDefault();
        let value = e.target.getAttribute('href').slice(1);
        let targetSection = document.getElementById(value);
        let scrollInterval = setInterval(()=>{
            let targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0,50);
        },30)
        
        
    })
})
// ---------------------------------------------
// Skills Bar Animation 
const skillDisplay = document.getElementsByClassName('skills-display')[0];
const skillProgress = document.getElementsByClassName('skill-progress');
const skillPercent = document.querySelectorAll('.skill-progress div');
let reach = false;

const initialWidth = ()=>{
    for(let i =0; i<skillPercent.length; i++){
        skillPercent[i].style.width = 0+"%";
    }
}
initialWidth();

function fillBars(){
    for(let bar of skillPercent){
        let targetWidth = bar.getAttribute('data-skill-level');
        let currentWidth = 0;
       let interval = setInterval(()=>{
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth+"%";
       },5)
    }
    
}

window.addEventListener('scroll',()=>{
    let initialVal =0;
    var skillDisplayCoordinates = skillDisplay.getBoundingClientRect();
    if(!reach && skillDisplayCoordinates.top<=window.innerHeight){
        console.log("Skill Display clicked");
        fillBars();
        reach = true;
    
    }else if(skillDisplayCoordinates.top>window.innerHeight){
        reach = false;
        initialWidth();
    }
});
// Add this JavaScript for the animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const resumeSection = document.getElementById("body-header");
    const offset = resumeSection.offsetTop;
    const windowHeight = window.innerHeight;

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const scrolledPercentage = (scrollPosition / (offset - windowHeight)) * 100;

        if (scrolledPercentage >= 100) {
            resumeSection.classList.add("fade-in-top");
        } else {
            resumeSection.classList.remove("fade-in-top");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("scroll", function () {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledHeight = window.scrollY;
    const percentage = (scrolledHeight / totalHeight) * 100;

    document.getElementById("percentage-indicator").innerText = Math.round(percentage) + "%";
});

// Optionally, you can add a class to the body to style the indicator based on user scroll
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("show-percentage");
});
