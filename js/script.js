// Header Section 

$(".header ul li > a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    console.log()

    $("html , body").animate({

        scrollTop: $("#" + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

})


$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").addClass("fixed")
        
    } else {


        $(".header").removeClass("fixed")

    }

})

// landing Section 

$(".landing .down-section a").click(function () {

    console.log()

    $("html , body").animate({

        scrollTop: $("#" + $(this).data("start")).offset().top - $(".header").innerHeight() - 60

    }) 

})

// Gallery Section 

let GallerySection = document.querySelector(".gallery")

let GalleryImg = document.querySelectorAll(".gallery img")

GalleryImg.forEach((img)=> {

    img.addEventListener("click" , function () {

        let Overly = document.createElement("div")

        Overly.className = "overly-box"

        document.body.appendChild(Overly)

        let BoxImg = document.createElement("div")

        BoxImg.className = "box-img"

        Overly.appendChild(BoxImg)

        let ImgBox = document.createElement("img")

        ImgBox.src = img.src

        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        BoxImg.appendChild(CloseButton)

        CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {

                BoxImg.remove()

                Overly.remove()

            }

        })

    })

})

let SkillsSection = document.querySelector(".our-skill")

let Header = document.querySelector(".header")

let ButtonToTop = document.querySelector("span.up")

// Date Section 

// let CounteDate = new Date().getTime()

// console.log(CounteDate)

// State Section 

let StateSection = document.querySelector(".state")

let StateOffsetTop = StateSection.offsetTop

let StateNum = document.querySelectorAll(".state p")

let Started = false;

function StartCounter(el) {

    let goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === goal) {

            clearInterval(Counte)

        }
    } , 2000 / goal )

}

window.onscroll = function () {

    // Skills Section 

    let SkillsSectionOffset = SkillsSection.offsetTop;

    let SkillsSectionHeight = SkillsSection.offsetHeight;

    let PageHeight = this.innerHeight;


    if (window.scrollY > (SkillsSectionOffset + SkillsSectionHeight - PageHeight)) {

        let SkillsDiv = document.querySelectorAll(".our-skill .prog span")

        SkillsDiv.forEach((skills) => {

            skills.style.width = skills.dataset.progres
        })
        
    }

    // testmonlies Section 

    let far = document.querySelectorAll(".testimonials .rate .far")

    far.forEach((i)=> {

        i.addEventListener("click" , function () {

            i.classList.add("active")

        })

    })

    // Video Section 

    $(".video .container .video-content .info li").click(function () {

        $(this).addClass("active").siblings().removeClass("active")

        // var ImgHide = $(this).data("hide")

        // $(".video .container .video-content .images .img").fadeOut()
        // $(".video .container .video-content .images ." + ImgHide ).fadeIn()

    })



    // State Section 

    if (window.scrollY >= StateOffsetTop) {

        if (!Started) {

            StateNum.forEach((num)=> {

                StartCounter(num)

            })

        }
        
        Started = true

    }
}

// Button To Top 

$("span.up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $("span.up").addClass("active")
        
    } else {


        $("span.up").removeClass("active")

    }

})
