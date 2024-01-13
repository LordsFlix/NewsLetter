var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = '*Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '*Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = '*Phone No. is Required';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = '*Please enter a valid number';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = '*Phone No. should be of 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = '*Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = '*Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail()){
        submitError.innerHTML = '*Please fill out the form correctly!';
        setTimeout(() => {
            submitError.innerHTML = '';
        }, 3000);
        return false;
    }
}

// // -----------bot-----------
// var telegram_bot_id = "6924399029:AAFzU6fvA4DxVFfXi3o8MhMolGkT6q4dzvQ";
// // chat id 
// var chat_id = "@lordsflixBackend";
// var name = document.getElementById('contact-name').value;
// var phone = document.getElementById('contact-phone').value;
// var email = document.getElementById('contact-email').value;
// var feedback = document.getElementById('contact-feedback').value;

// function ready(){
//     message = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nFeedback: " + feedback;
// }

// function sender(){
//     ready();
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessages",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache,"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message,
//         })
//     }
//     $.ajax(settings).done(function (response){
//         console.log(response);
//     });
//     document.getElementById('contact-name').value = '';
//     document.getElementById('contact-phone').value = '';
//     document.getElementById('contact-email').value = '';
//     document.getElementById('contact-feedback').value = '';
//     return false;
// }

// //--------------bot2.0--------------\\

// "use strict"

// const form = document.querySelector('#form');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     sendMessage(form);
// });

// async function sendMessage(form){
//     const formData = new FormData(form);
//     if(formData){
//         const url = 'sendMessage.php';
//         const response = await fetch(url, {
//             method: "POST",
//             body: formData,
//         });
//         if(response.ok){
//             form.reset();
//             alert("SUCCESS!!, Your Details has been sent to the admin. You will be redirected to the home page of the website soon.");
//             setInterval(() => {
//                 location.replace('https://lordsflix.super.site');
//             }, 5000);
//         }
//         else{
//             alert("An error has been occured. Please wait for some time or try again later. You will be redirected to the home page of the website soon.");
//             setInterval(() => {
//                 location.replace('https://lordsflix.super.site');
//             }, 3000);
//         }
//     }
// }

// ------------back-end------------


const scriptURL = 'https://script.google.com/macros/s/AKfycbxY6sKJc4pDlgHb9HFECRzsOn5RKVhhvSh7gNd20VuHj--iYeqoDnAxEWAyXi6hyBn_2Q/exec'
const form = document.forms['google-sheet']

function responseFunc(){
    form.reset();
    alert("SUCCESS!!, Your Details has been sent to the admin. You will be redirected to the home page of the website soon.");
    setInterval(() => {
        location.replace("https://lordsflix.super.site");
    }, 1000);
}

function errorFunc(){
    alert("An error has been occured. Please wait for some time or try again later. You will be redirected to the home page of the website soon.");
    setInterval(() => {
        location.replace("https://lordsflix.super.site");
    }, 1000);
}


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => responseFunc())
    .catch(error => errorFunc())
})