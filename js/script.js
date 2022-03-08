let SkillsSection = document.querySelector(".our-skill")
let Header = document.querySelector(".header")
let ButtonToTop = document.querySelector("span.up")
let Headerlink = document.querySelector(".header ul li.other")
let HeaderDropdowun = document.querySelector(".header ul li.other .link-content")
let ButtonDarkMood = document.querySelector(".header .dark-mood")

window.onscroll = function () {
    let SkillsSectionOffset = SkillsSection.offsetTop;
    let SkillsSectionHeight = SkillsSection.offsetHeight;
    let PageHeight = this.innerHeight;

    if (window.scrollY > (SkillsSectionOffset + SkillsSectionHeight - PageHeight)) {

        let SkillsDiv = document.querySelectorAll(".our-skill .prog span")

        SkillsDiv.forEach((skills) => {
            skills.style.width = skills.dataset.progres
        })
        
    }
    if (window.scrollY < (SkillsSectionOffset + SkillsSectionHeight - PageHeight)) {

        let SkillsDiv = document.querySelectorAll(".our-skill .prog span")

        SkillsDiv.forEach((skills) => {
            skills.style.width = "0"
        })
        
    }

// Fixed Header
    if (window.scrollY >= 800) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }

    // ButtonToTop Active
    if (window.scrollY >= 800) {
        ButtonToTop.classList.add("active")
    } else {
        ButtonToTop.classList.remove("active")
    }
}

// ButtonToTop Click 

ButtonToTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

Headerlink.onclick = function () {
    HeaderDropdowun.classList.toggle("active")
}

ButtonDarkMood.onclick = function () {
    document.body.classList.toggle("dark-items")
}

let StateSection = document.querySelector(".state")
let StateElement = document.querySelectorAll(".state span");
let Started = false;
console.log(StateElement[0])

window.onscroll = function () {
    let StateSatateOffset = StateSection.offsetTop;

    if (window.scrollY > StateSatateOffset) {

        if (!Started) {
            StateElement.forEach((num)=> {
                StartCounte(num)
            })
        }

        Started = true;
    }
}

function StartCounte(el) {
    let goal = el.dataset.goal;
    let counte = setInterval(function () {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    }, 2000 / goal)
}

