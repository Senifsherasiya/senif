// const toggle = document.getElementById("menu-toggle");

// if (toggle && toggle.checked) {
//         document.body.classList.add("no-scroll");
// }else{
//     document.body.classList.remove("no-scroll");
// }


// if(toggle){
//     toggle.addEventListener("change",() => {
//         document.body.classList.toggle("no-scroll", toggle.checked);
//     });
// }


// ******** new navbar ***********

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

/* =========================
   MENU OPEN CLOSE
========================= */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});

/* =========================
   CLOSE MENU AFTER CLICK
========================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

/* =========================
   ACTIVE LINK ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ******** end new navbar ***********

// typing-span

const words = ["Web Designing","Web Development","Freelancer"];

const typingText = document.getElementById("auto-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentWord.substring(0,charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    if(words?.length) type();
})

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        link.classList.add('active');

        // navlinks.forEach((l) => l.classList.remove("active"));

        navlinks.forEach((l) => {
            if(l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName){
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        // if(tabName === "services") {
        //     const serviceList = [{
        //         id: 1,
        //         icon: "ph ph-code",
        //         text: "Web Design",
        //         para: " build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and",
        //     },
        //     {
        //         id: 2,
        //         icon: "ph ph-android-logo",
        //         text: "Web Development",
        //         para: "Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and",
        //     },
        //     {
        //         id: 3,
        //         icon: "ph ph-trend-up",
        //         text: "SEO Optimization",
        //         para: "I improve website visibility on search engines with optimized structure, keywords, and performance best",
        //     },
        //     {
        //         id: 4,
        //         icon: "ph ph-paint-brush",
        //         text: "UX/UI Design",
        //         para: "Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX",
        //     },            
        //     {
        //         id: 5,
        //         icon: "ph ph-palette",
        //         text: "Graphic Design",
        //         para: "Personal mentorship for beginners to advanced learners in web development, including live coding sessions and",
        //     },           
        // ];

        //     const services = document.getElementsByClassName("service-list");

        //     const innerContent = serviceList.map((l)=>{
        //         return `
        //             <div class="box" key=${l?.id}>
        //                 <div class="head-icons">
                            
        //                     <i class="fa ${l?.icon}"></i>
                        
        //                     <span><i class="ph ph-arrow-right"></i></span>
        //                 </div>

        //                 <h3>${l?.text}</h3>

        //                 <span class="spacer"></span>

        //                 <p>${l?.para}</p>
        //             </div>
        //         `;
        //     }).join("");

        //     Array.from(services).forEach((ele)=>{
        //         ele.innerHTML = innerContent;
        //     });
        // }

        toggle.checked = false;
    });
});