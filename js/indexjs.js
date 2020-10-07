"use strict";


let name = $('#et-name');
let lastName = $('#et-lastname');
let userName = $('#et-username');
let email = $('#et-email');
let adress = $('#et-adress');
let adress2 = $('#et-adress2');
let country = $('#et-country');
let province = $('#et-province');
let postal = $('#et-postal');
let check1 = $('#check1')[0];
let check2 = $('#check2')[0];
let radio1 = $('#radio1')[0];
let radio2 = $('#radio2')[0];
let radio3 = $('#radio3')[0];
let card = $('#et-card');
let numcard = $('#et-numcard');
let expiration = $('#et-expiration');
let cvv = $('#et-cvv');
let promo = $('#et-promo');
let btPromo = $('#bt-promo');
let btFin = $('#bt-fin');

let datos = [];

let dialog = $('.dialog');
let dialogSub = $('.dialog-sub');

btFin.click(function () {

    datos.push('Nombre: '+name.val());
    datos.push('Apellidos: '+lastName.val());
    datos.push(''+userName.val());
    datos.push(''+email.val());
    datos.push(''+adress.val());
    datos.push(''+adress2.val());
    datos.push(''+country.val());
    datos.push(''+province.val());
    datos.push(''+postal.val());
    datos.push(''+check1.checked);
    datos.push(''+check2.checked);
    datos.push(''+radio1.checked);
    datos.push(''+radio2.checked);
    datos.push(''+radio3.checked);
    datos.push(''+card.val());
    datos.push(''+numcard.val());
    datos.push(''+expiration.val());
    datos.push(''+cvv.val());
    datos.push(''+promo.val());

    dialog.css('display', 'flex');
$('main').css('display', 'none');

    importar(datos);
});


function importar(datt) {

let contenido = []; 

for(let i=0;i<datt.length;i++){
   
    contenido += `<div class='dialog-sub-2'><p>${datt[i]}</p></div>`;
}

console.log(contenido);

dialogSub.append(contenido);
}








// --------------Ejemplo objeto---------------------------

// function cargar(name,age,est) {

//     let persona =  {

//         nombre: name,
//         edad:age,
//         estado:()=>{console.log(est);},
//         sangre:(can)=>{

            
//             return can*1000;
//         }

//     }
// return persona;

// }

// let antonio = cargar('Antonio',25,'muerto');

// antonio.estado();
// console.log(antonio.nombre, antonio.edad,antonio.sangre(5));