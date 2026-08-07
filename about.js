const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded",() => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }  
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        // document.getElementById(tab.dataset.section).classList.add("active");
        
        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "2024 - 2025",
                    position: "Frontend Developer",
                    company: "Frogmee Tech",
                    details: "Worked as a Frontend Developer at Frogmee Tech for one year, building responsive, user-friendly, and visually appealing websites using HTML, CSS, JavaScript, Bootstrap, and jQuery while ensuring clean code, cross-browser compatibility, and optimized performance.",
                },
                // {
                //     id: 2,
                //     date: "2024 - 2025",
                //     position: "Frontend Developer",
                //     company: "4allBiz",
                //     details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aperiam! Reprehenderit excepturi sequi ratione voluptatum reiciendis quaerat eius eligendi laudantium inventore nesciunt quod, incidunt voluptatem!",
                // },
                // {
                //     id: 3,
                //     date: "2024 - 2025",
                //     position: "Frontend Developer",
                //     company: "Frogmee Tech",
                //     details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aperiam! Reprehenderit excepturi sequi ratione voluptatum reiciendis quaerat eius eligendi laudantium inventore nesciunt quod, incidunt voluptatem!",  
                // }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                    <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if(activeTab === "education"){
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2022 - 2025",
                    degree: "Bachelor of Computer Applications (BCA)",
                    institution: "Geetanjali Group Of College",
                    details: "Completed my Bachelor of Computer Applications (BCA) from Geetanjali Group of College, where I built a strong foundation in programming, web development, database management, and software development while enhancing my technical, analytical, and problem-solving skills through practical learning and academic projects.",
                },
                {
                    id: 2,
                    date: "2021 - 2022",
                    degree: "12th",
                    institution: "SMP High School",
                    details: "Completed my Higher Secondary (12th) education from SMP High School, Sindhavadar, where I strengthened my academic foundation, developed analytical thinking, problem-solving abilities, and communication skills, preparing me for higher education and a career in technology.",
                },
                {
                    id: 2,
                    date: "2020 - 2021",
                    degree: "10",
                    institution: "Hakkaniya Primary & Secondary School",
                    details: "Completed my Secondary School (10th) education from Hakkaniya Primary & Secondary School, Khijadiya Raj, where I developed a strong academic foundation, critical thinking, discipline, and problem-solving skills that prepared me for higher education and future learning in computer applications.",
                }
            ];

            const educationContent = educationList.map((ele) => {
                return`
                    <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
            }).join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if(activeTab === "skills") {
            const skills = document.querySelector(".skill-list")

            const skillList = [
                {
                    id: 1,
                    name: "HTML",
                    icon: "img/html.png"
                },
                {
                    id: 2,
                    name: "CSS",
                    icon: "img/css.png"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "img/javascript.png"
                },
                {
                    id: 4,
                    name: "Jquery",
                    icon: "img/jquery.png"
                },
                {
                    id: 5,
                    name: "Bootstrap",
                    icon: "img/bootstrap.png"
                },
                {
                    id: 6,
                    name: "PHP",
                    icon: "img/php.png"
                },
                {
                    id: 7,
                    name: "MySql",
                    icon: "img/mysql.png"
                }
            ];

            const skillContent = skillList.map((ele) => {
                return`
                    <div class="skill-box" key=${ele?.id}>
                        <img src=${ele?.icon} alt="${ele?.name}" title="${ele?.name}" loading="lazy">
                    </div>
                `
            }).join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if(activeTab === "about-me") {
            const myinfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Senif",
                },
                {
                    id: 2,
                    key: "Country : ",
                    value: "India",
                },
                {
                    id: 3,
                    key: "Industry : ",
                    value: "IT",
                },
                {
                    id: 4,
                    key: "Experice : ",
                    value: "Fresher",
                },
                {
                    id: 5,
                    key: "Address : ",
                    value: "Wankaner, Morbi",
                }
            ];

            const infoContent = infoList.map((ele)=>{
                return`
                    <div class="info-box" key=${ele?.id}>
                        <span>${ele?.key}</span>
                        <span>${ele?.value}</span>
                    </div>
                `
            }).join("");

            if(myinfo){
                myinfo.innerHTML = infoContent;
            }
        }
    });
});