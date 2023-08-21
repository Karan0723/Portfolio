// About sections 

var typed = new Typed('#element', {
    strings: ['<i>Web Developer</i>   ', '&amp;  PHP Developer', 'and', 'Learner...'],
    typeSpeed: 60,
});



// Nav bar 

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.top = "0";


}

function closemenu() {
    sidemenu.style.top = "-400px";

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