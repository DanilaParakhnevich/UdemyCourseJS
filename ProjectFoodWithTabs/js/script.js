"use strict";

window.addEventListener("DOMContentLoaded", () => {
    let tabContents = document.querySelectorAll(".tabcontent");
    let tabContentContainer = document.querySelector(".tabcontainer");
    let tabs = document.querySelectorAll(".tabheader__item");
    tabContents.forEach(content => {
        content.style.display = "none";
    });
    displayTabContent(0);

    tabContentContainer.addEventListener("click", event => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            disableDisplayTabContents();
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    displayTabContent(i);
                }
            });
        }
    });

    function displayTabContent(i) {
        tabContents[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }

    function disableDisplayTabContents() {
        tabContents.forEach(a => a.style.display = "none");
        tabs.forEach(a => a.classList.remove("tabheader__item_active"));
    }
});