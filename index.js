// document.getElementById("inscription").addEventListener("submit", function(e){
//     e.preventDefault();

//     var erreur;
//     var firstName = document.getElementById("firstName");
//     var email = document.getElementById("email");
//     var phoneNumber = document.getElementById("phoneNumber");
//     var lastName = document.getElementById("lastName");
//     var age = document.getElementById("age");
//     var your = document.getElementById("your");
    // var genre = document.getElementById("genre");

    
    // if (!genre.value) {
    //     erreur = "veuillez renseigner votre genre";
    // }
//     if (!your.value) {
//         erreur = "veillez renseigner votre ville";
//     }
//     if (!age.value) {
//         erreur = "veillez renseigner votre age";
//     }
//     if (!lastName.value) {
//         erreur = "veillez renseigner votre prenom";
//     }
//     if (!phoneNumber.value) {
//         erreur = "veuillez renseigner votre phoneNumber";
//     }
    
//     if (!email.value) {
//         erreur = "veuillez renseigner votre email";
//     }
//     if (!firstName.value) {
//         erreur = "veuillez renseigner votre nom";
//     }
   
   

//     if (erreur) {
//         e.preventDefault();
//         document.getElementById("erreur").innerHTML = erreur;
//         return false;
//     } else {
//         alert("formulaire envoyé !");
//     }














    
// })
const inscription = document.getElementById('inscription');

const firstName = document.getElementById('firstName');

const nom = document.getElementById('nom');

const valid = document.getElementById('valid');

const email = document.getElementById('email');
const mail = document.getElementById('mail')

const phone = document.getElementById('phone');
const gen = document.getElementById('gen') ; 
const phoneNumber = document.getElementById('phoneNumber');

const prenom = document.getElementById('prenom');

const lastName = document.getElementById('lastName');

const age = document.getElementById('age');
const ag = document.getElementById('ag');

const your = document.getElementById('your');

const ville = document.getElementById('ville');



valid.addEventListener('click', function(e){
    if (!firstName.value) {
        nom.innerHTML="champ obligatoire";
        nom.style.color='red';
        firstName.style.background='red';
        e.preventDefault();
    } else {
        nom.innerHTML='';
        firstName.style.background='green';
        console.log("ffghh");
    }
});


valid.addEventListener('click', function(e){
    if (!email.value) {
        mail.innerHTML="champ obligatoire";
        mail.style.color='red';
        email.style.background='red';
        e.preventDefault();
    } else {
        mail.innerHTML='';
        email.style.background='green';
    }
});

valid.addEventListener('click', function(e){
    if (!phoneNumber.value) {
        phone.innerHTML="champ obligatoire";
        phone.style.color='red';
        phoneNumber.style.background='red';
        e.preventDefault();
    } else {
        phone.innerHTML='';
        phoneNumber.style.background='green';
    }
});
valid.addEventListener('click', function(e){
    if (!genre.value) {
        gen.innerHTML="champ obligatoire";
        gen.style.color='red';
        genre.style.background='red';
        e.preventDefault();
    } else {
        gen.innerHTML='';
        genre.style.background='green';
    }
});

// valid.addEventListener('click', function(e){
//     if (!gen.value) {
//         gen.innerHTML="champ obligatoire";
//         gn.style.color='red';
//         gen.style.background='red';
//         e.preventDefault();
//     } else {
//         gn.innerHTML='';
//         gen.style.background='green';
//     }
// });

valid.addEventListener('click', function(e){
    if (!lastName.value) {
        prenom.innerHTML="champ obligatoire";
        prenom.style.color='red';
        lastName.style.background='red';
        e.preventDefault();
    } else {
        prenom.innerHTML='';
        lastName.style.background='green';
    }
});

valid.addEventListener('click', function(e){
    if (!age.value) {
        ag.innerHTML="champ obligatoire";
        ag.style.color='red';
        age.style.background='red';
        e.preventDefault();
    } else {
        ag.innerHTML='';
        age.style.background='green';
    }
});

valid.addEventListener('click', function(e){
    if (!your.value) {
        ville.innerHTML="champ obligatoire";
        ville.style.color='red';
        your.style.background='red';
        e.preventDefault();
    } else {
        ville.innerHTML='';
        your.style.background='green';
    }
});






