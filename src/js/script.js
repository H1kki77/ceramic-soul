import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";



const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});



try {

    new Swiper('.works__slider', {
        slidesPerView: 1,
        spaceBetween: 5,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is >= 1920px
            1920: {
                spaceBetween: 35,
                slidesPerView: 3,
            },
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }


try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "grid";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "grid" : "none"));
} catch (e) { }


try {
    const validatorTouch = new JustValidate(".touch__form");

    validatorTouch
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "Please, fill the name",
            },
            {
                rule: "minLength",
                value: 2,
                errorMessage: "Minimum amount of chars is 2",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#question", [
            {
                rule: "required",
                errorMessage: "Please, leave your question",

            },
            {
                rule: "minLength",
                value: 5,
                errorMessage: "Minimum amount of chars is 5",

            },
        ],
            {
                errorsContainer: document
                    .querySelector('#question')
                    .parentElement.querySelector(".error-message"),
            }
        )
        .addField("#checkbox", [
            {
                rule: "required",
            }
        ], {
            errorsContainer: document
                .querySelector('#checkbox')
                .parentElement.parentElement.querySelector(".checkbox-error-message"),
        });

} catch (e) { }


try {
    const validatorFooter = new JustValidate(".footer__form");
    validatorFooter
        .addField("#footer-email", [
            {
                rule: "required"
            },
            {
                rule: "email"
            },
        ])
        .addField("#footer-checkbox", [
            {
                rule: "required",
            },
        ])
} catch (e) { }