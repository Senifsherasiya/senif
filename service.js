
const services = [
{
    icon:"fa-solid fa-code",
    title:"Web Design",
    desc:"I create clean, modern, and engaging website designs that reflect your brand identity and deliver an exceptional user experience. Every design is responsive, visually appealing, and optimized to convert visitors into customers."
},
{
    icon:"fa-brands fa-android",
    title:"Web Development",
    desc:"I develop fast, secure, and responsive websites using modern web technologies. Every website is built with clean code, optimized performance, SEO-friendly structure, and seamless functionality to deliver an excellent user experience across all devices."
},
{
    icon:"fa-solid fa-mobile-screen",
    title:"App Development",
    desc:"I develop modern, high-performance, and user-friendly mobile applications tailored to your business needs. My focus is on creating responsive, secure, and scalable apps with intuitive interfaces that deliver seamless user experiences across Android and iOS platforms."
},
{
    icon:"fa-solid fa-arrow-trend-up",
    title:"SEO Optimization",
    desc:"I optimize websites to improve search engine rankings, increase organic traffic, and enhance online visibility. Using on-page SEO, technical SEO, keyword optimization, and performance improvements, I help businesses reach the right audience and achieve sustainable digital growth."
},
{
    icon:"fa-solid fa-pen-ruler",
    title:"UX/UI Design",
    desc:"I create intuitive, modern, and visually engaging user interfaces that deliver seamless user experiences. Every design is crafted with a focus on usability, responsiveness, accessibility, and brand identity to ensure users enjoy every interaction across all devices."
},
{
    icon:"fa-solid fa-palette",
    title:"Graphic Design",
    desc:"I create professional and visually appealing graphic designs that strengthen brand identity and communication. From social media creatives and banners to business cards and marketing materials, every design is crafted to capture attention and leave a lasting impression."
}
];

const serviceList = document.querySelector(".service-list");

serviceList.innerHTML = services.map(service => `
<div class="service-card">

    <div class="card-top">
        <i class="${service.icon} service-icon"></i>

        <div class="arrow">
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>

    <h3>${service.title}</h3>

    <p>${service.desc}</p>

</div>
`).join("");