 const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-x",
        name: "phone",
        value: "+91 6352612105",
        href: "tel:+91 6352612105",
    },
    {
        id: 2,
        icon: "ph ph-envelope-open",
        name: "E-Mail",
        value: "senifsherasiya123@gmail.com",
        href: "mailto:senifsherasiya123@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-palette",
        name: "Country",
        value: "India",
        href: "#",
    },
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media" key=${ele?.id}>
            <span><i class="${ele?.icon}"></i></span>

            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href=${ele?.href}>${ele?.value}</a>
            </div>

        </div>
    `
}).join("");

if (media) media.innerHTML = contactContent;


// send contact message

// const sendBtn = document.querySelector("#send-msg");

// const originalText = sendBtn.innerHTML;

// const originalStyle = {
//     backgroundColor: sendBtn.style.
//         backgroundColor,
//     color: sendBtn.style.color,
//     border: sendBtn.style.border,
//     boxShadow: sendBtn.style.boxShadow,
// }

// document.getElementById("contact-form").addEventListener('submit', (event) => {
//     event.preventDefault();

//     sendBtn.innerHTML = "Sending...";
//     sendBtn.style.backgroundColor = "gray";
//     sendBtn.style.color = "white";
//     sendBtn.style.border = "none";
//     sendBtn.style.boxShadow = "none";

//     sendBtn.disabled = true;

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const message = document.getElementById("message").value;

//     if (!name || !email || !phone || !message) {

//         sendBtn.innerHTML = originalText;

//         Object.assign(sendBtn.style, originalStyle);

//         sendBtn.disabled = true;

//         return Toastify({
//             text: "All Fields Are Mandatory !",
//             duration: 3000,
//             gravity: "top", 
//             position: "center",
//             close:true,
//             stopOnFocus: true, 
//             style: {
//                 background: "rgb(206,16,16)",
//             },
//         }).showToast();

//         return alert("All Fields Are Mandatory !");
//     }

//     emailjs.send("service_urr5b4s", "template_impm8cd", { name, email, phone, message, }).then(() => {
//             alert("Message Sent !")
//             Toastify({
//             text: "Message Sent !",
//             duration: 3000,
//             gravity: "top", 
//             position: "center",
//             close:true,
//             stopOnFocus: true, 
//             style: {
//                 background: "rgb(9,222,38)",
//             },
//         }).showToast();
//         setTimeout(()=>{
//             sendBtn.innerHTML = originalText;

//             Object.assign(sendBtn.style,originalStyle);

//             sendBtn.disabled = false;
//         },2000);
//     }, (error) => {
//         Toastify({
//             text: "Message Failed !",
//             duration: 3000,
//             gravity: "top", 
//             position: "center",
//             close:true,
//             stopOnFocus: true, 
//             style: {
//                 background: "rgb(206,16,16)",
//             },
//         }).showToast();
//         console.log("FAILED...",error);
//         console.log("Message Error !", error);
//     });
// });


//*********** New Code *********


const sendBtn = document.querySelector("#send-msg");
const contactForm = document.querySelector("#contact-form");

const originalText = sendBtn.innerHTML;

const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow,
};


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !phone || !message) {

        Toastify({
            text: "All Fields Are Mandatory!",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();

        return;
    }


    const phonePattern = /^[6-9][0-9]{9}$/;

    if (!phonePattern.test(phone)) {

        Toastify({
            text: "Enter a Valid 10-Digit Mobile Number!",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();

        return;
    }


    sendBtn.innerHTML = "Sending...";

    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = true;


    emailjs.send(
        "service_urr5b4s",
        "template_impm8cd",
        {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
    )


    .then(function () {

        Toastify({
            text: "Message Sent Successfully!",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(9,222,38)",
            },
        }).showToast();

        contactForm.reset();

        setTimeout(function () {

            sendBtn.innerHTML = originalText;

            Object.assign(
                sendBtn.style,
                originalStyle
            );

            sendBtn.disabled = false;

        }, 2000);

    })


    .catch(function (error) {

        console.log("FAILED...", error);

        Toastify({
            text: "Message Failed!",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();


        sendBtn.innerHTML = originalText;

        Object.assign(
            sendBtn.style,
            originalStyle
        );

        sendBtn.disabled = false;

    });

});
