const projectList = [
    {
        id: 1,
        number: "01",
        title: "FullStack Thread Clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit tempore facilis corrupti perferendis distinctio dolores error placeat ipsa! Iste",
        techStack: ["HTML", "CSS", "JavaScript", "php"],
        image: "projects.png",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        number: "02",
        title: "PHP",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit tempore facilis corrupti perferendis distinctio dolores error placeat ipsa! Iste",
        techStack: ["HTML", "CSS", "JavaScript", "php"],
        image: "projects.png",
        liveLink: "#",
        githubLink: "#",
    }
];

const projects = document.querySelector(".projects1");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
                <div class="project-info">
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>
                    <div class="tech-stack">
                        ${projectContent?.techStack?.map((tech, i) =>{
                            return`
                                <span key=${i}>${tech}</span>
                            `;
                           
                        }).join(",")}
                    </div>
                    <hr>
                    <div class="links">

                        <a href="${projectContent?.liveLink}">
                            <i class="ph ph-arrow-circle-up-right"></i>
                        </a>

                        <a href="${projectContent?.githubLink}">
                            <i class="ph ph-github-logo"></i>
                        </a>

                    </div>
                </div>

                <div class="carousel">
                    <img src="${projectContent?.image}" alt="${projectContent?.title}">

                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled?"disabled-btn":""}>
                            <i class="ph ph-arrow-fat-lines-left"></i>
                        </a>

                        <a href="#" id="next" class=${nextDisabled?"disabled-btn":""}>
                            <i class="ph ph-arrow-fat-lines-right"></i>
                        </a>

                    </div>
                </div>
    `;

    document.getElementById('previous').addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex > 0){
            currentIndex--;
            renderProject(currentIndex);
        }
    })

    document.getElementById('next').addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex < projectList.length -1){
            currentIndex++;
            renderProject(currentIndex);
        }
    })
};

renderProject(currentIndex);
