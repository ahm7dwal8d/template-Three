let SkillsSection = document.querySelector(".our-skill")
let Header = document.querySelector(".header")
let ButtonToTop = document.querySelector("span.up")

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