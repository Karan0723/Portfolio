// About sections 

var typed = new Typed('#element', {
    strings: ['<i>Web Developer</i>   ', ' Frontend Developer', '&amp; Learner...'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});





// Nav bar 

var sidemenu = document.getElementById('sidemenu');
let closeicon = document.getElementById("closemenu");
let openicon = document.getElementById("openmenu");

    
function openmenu() {
    sidemenu.style.top = "0";
    closeicon.style.visibility = "visible";
    openicon.style.visibility = "hidden";



}

function closemenu() {
    sidemenu.style.top = "-400px";
    closeicon.style.visibility = "hidden";
    openicon.style.visibility = "visible";




}



// For Animation 

AOS.init();




// Message sent 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyIfsI7p2zRbs8xcKcYJ-cBFaMjrS2bdNiuihDKrDZZxqhfXiAV1TU2FoTPU5Vadnch2Q/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg');


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})