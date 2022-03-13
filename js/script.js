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

    
    let StateSatateOffset = StateSection.offsetTop;

    if (window.scrollY > StateSatateOffset) {

        if (!Started) {
            StateElement.forEach((num)=> {
                StartCounte(num)
            })
        }

        Started = true;
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


function StartCounte(el) {
    let goal = el.dataset.goal;
    let counte = setInterval(function () {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    }, 2000 / goal)
}

// Gallery Section 
let galleryimg = document.querySelectorAll(".gallery .image img");
console.log(galleryimg[0])

galleryimg.forEach((img) => {
    img.addEventListener("click" , function() {
        let overly = document.createElement("div")
        overly.className = "popup-overly"
        document.body.appendChild(overly)
        let PopupBox = document.createElement("div")
        PopupBox.className = "popup-box"
        if (img.alt !== null) {
            let TextHead = document.createElement("h3")

            let Text = document.createTextNode(img.alt)

            TextHead.appendChild(Text)

            PopupBox.appendChild(TextHead)
        }
        let PopupImg = document.createElement("img")
        PopupImg.src = img.src;
        PopupBox.appendChild(PopupImg)
        document.body.appendChild(PopupBox)

        let CloseButton = document.createElement("span");
        let CloseButtonText = document.createTextNode("X")
        CloseButton.appendChild(CloseButtonText)
        CloseButton.className = "close-button"
        PopupBox.appendChild(CloseButton)

        // Remove Popup From Dom 
        document.addEventListener("click" , function (e) {
            if (e.target.className === "close-button") {
                e.target.parentNode.remove()
                document.querySelector(".popup-overly").remove()
            }
        })
    })
})