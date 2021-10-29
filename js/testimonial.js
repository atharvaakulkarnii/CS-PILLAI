
"use strict"



var testim = document.getElementById("testim"),

    testimDots = Array.prototype.slice.call(

        document.getElementById("testim-dots").children

    ),

    testimContent = Array.prototype.slice.call(

        document.getElementById("testim-content").children

    ),

    testimLeftArrow = document.getElementById("left-arrow"),

    testimRightArrow = document.getElementById("right-arrow"),

    testimSpeed = 8250,

    currentSlide = 0,

    currentActive = 0,

    testimTimer,

    touchStartPos,

    touchEndPos,

    touchPosDiff,

    ignoreTouch = 30



window.onload = function () {

    // Testim Script



    function playSlide(slide) {

        for (var k = 0; k < testimDots.length; k++) {

            testimContent[k].classList.remove("active")



            testimContent[k].classList.remove("inactive")



            testimDots[k].classList.remove("active")

        }



        if (slide < 0) {

            slide = currentSlide = testimContent.length - 1

        }



        if (slide > testimContent.length - 1) {

            slide = currentSlide = 0

        }



        if (currentActive != currentSlide) {

            testimContent[currentActive].classList.add("inactive")

        }



        testimContent[slide].classList.add("active")



        testimDots[slide].classList.add("active")



        currentActive = currentSlide



        clearTimeout(testimTimer)



        testimTimer = setTimeout(function () {

            playSlide((currentSlide += 1))

        }, testimSpeed)

    }



    testimLeftArrow.addEventListener("click", function () {

        playSlide((currentSlide -= 1))

    })



    testimRightArrow.addEventListener("click", function () {

        playSlide((currentSlide += 1))

    })



    for (var l = 0; l < testimDots.length; l++) {

        testimDots[l].addEventListener("click", function () {

            playSlide((currentSlide = testimDots.indexOf(this)))

        })

    }



    playSlide(currentSlide)



    // keyboard shortcuts



    document.addEventListener("keyup", function (e) {

        switch (e.keyCode) {

            case 37:

                testimLeftArrow.click()



                break



            case 39:

                testimRightArrow.click()



                break



            case 39:

                testimRightArrow.click()



                break



            default:

                break

        }

    })



    testim.addEventListener("touchstart", function (e) {

        touchStartPos = e.changedTouches[0].clientX

    })



    testim.addEventListener("touchend", function (e) {

        touchEndPos = e.changedTouches[0].clientX



        touchPosDiff = touchStartPos - touchEndPos



        console.log(touchPosDiff)



        console.log(touchStartPos)



        console.log(touchEndPos)



        if (touchPosDiff > 0 + ignoreTouch) {

            testimLeftArrow.click()

        } else if (touchPosDiff < 0 - ignoreTouch) {

            testimRightArrow.click()

        } else {

            return

        }

    })

}



function addToHomeScreen() {

    let a2hsBtn = document.querySelector(".ad2hs-prompt");

    a2hsBtn.style.display = 'none';

    deferredPrompt.prompt();

    deferredPrompt
        .userChoice
        .then(function (choiceResult) {

            if (choiceResult.outcome === 'accepted') {

                console.log('User accepted the A2HS prompt');

            } else {

                console.log('User dismissed the A2HS prompt');

            }

            deferredPrompt = null;

        });
}

function showAddToHomeScreen() {

    let a2hsBtn = document.querySelector(".ad2hs-prompt");

    a2hsBtn.style.display = "block";

    a2hsBtn.addEventListener("click", addToHomeScreen);

}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {

    e.preventDefault();

    deferredPrompt = e;

    showAddToHomeScreen();

});

function showIosInstall() {

    let iosPrompt = document.querySelector(".ios-prompt");

    iosPrompt.style.display = "block";

    iosPrompt.addEventListener("click", () => {

        iosPrompt.style.display = "none";

    });

}

const isIos = () => {

    const userAgent = window
        .navigator
        .userAgent
        .toLowerCase();

    return /iphone|ipad|ipod/.test(userAgent);

}

const isInStandaloneMode = () => ('standalone' in window.navigator) && (
    window.navigator.standalone
);

if (isIos() && !isInStandaloneMode()) {

    showIosInstall();

}

(function () {

    'use strict';

    var a = function (b) {

        var c;

        var d = function () {

            c && (c.prompt(), c.userChoice.then(function (i) {

                c = null,

                    b
                        .classList
                        .remove('available')

            }).catch(function () {

                c = null,

                    b
                        .classList
                        .remove('available')

            }))

        };

        window.addEventListener('beforeinstallprompt', function (h) {

            return c = h,

                b
                    .classList
                    .add('available'),

                !1

        }),

            window.addEventListener('appinstalled', function () {

                c = null,

                    b
                        .classList
                        .remove('available')

            }),

            b.addEventListener('click', d.bind(this)),

            b.addEventListener('touchend', d.bind(this))

    };

    window.addEventListener('load', function () {

        var b = document
            .body
            .querySelector('.usePWA'),
            c = new a(b)

    })

})();









