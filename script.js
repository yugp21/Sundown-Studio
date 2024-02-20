const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function Animation() {
    var elemC = document.querySelector('#elem-container');
    var fixed = document.querySelector('#fixed-image');
    elemC.addEventListener('mouseenter', function () {
        fixed.style.display = "block";
    });

    elemC.addEventListener('mouseleave', function () {
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll('.elem');
    elems.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            var Image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${Image})`;
        })
    })

}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 70,
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var ani = document.querySelector("#aniscr");
    var navimg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener('click', function () {
        if (flag == 0) {
            ani.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            ani.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector('#loader');
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 5300);
}

loaderAnimation();

Animation();
swiperAnimation();
menuAnimation();