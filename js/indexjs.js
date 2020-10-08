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
let btFin = $('#bt-fin');


let datos = [];

let dialog = $('.dialog');
let dialogSub = $('.dialog-sub');

btFin.click(function () {
    datos.push('Nombre: ' + name.val());
    datos.push('Apellidos: ' + lastName.val());
    datos.push('Nombre de usuario: ' + userName.val());
    datos.push('Correo electrónico: ' + email.val());
    datos.push('Dirección: ' + adress.val());
    datos.push('Dirección 2: ' + adress2.val());
    datos.push('Pais: ' + country.val());
    datos.push('Provincia: ' + province.val());
    datos.push('Código postal: ' + postal.val());
    datos.push('La dirección de envío es la misma que mi dirección de facturación: ' + check1.checked);
    datos.push('Guarde esta información para la próxima vez: ' + check2.checked);
    datos.push('Tarjeta de credito: ' + radio1.checked);
    datos.push('Tarjeta de debito: ' + radio2.checked);
    datos.push('Paypal: ' + radio3.checked);
    datos.push('Nombre de la tarjeta: ' + card.val());
    datos.push('Numero de tarjeta: ' + numcard.val());
    datos.push('Caducidad: ' + expiration.val());
    datos.push('CVV: ' + cvv.val());
    datos.push('Código promocional: ' + promo.val());

    dialog.css('display', 'flex');
    $('main').css('display', 'none');

    importar(datos);
    cambio();
});

let blockk = false;

function cambio() {
    if (!blockk) {
        $('.autocomplet-text').text('Recargar');
        blockk = true;
        $('.autocomplet').css('z-index', '11');

    }

}


function importar(datt) {

    let contenido = [];

    for (let i = 0; i < datt.length; i++) {

        contenido += `<div class='dialog-sub-2'><p>${datt[i]}</p></div>`;
    }


    dialogSub.append(contenido);
}



$('#bt-promo').click(function (e) {
    e.preventDefault();

    alert('Código promocional: ' + $('#et-promo').val())
});

$('.autocomplet').click(function (e) {
    e.preventDefault();

    if (blockk) {

        location.reload();
        console.log(blockk);
        blockk = false;
    } else {
        autocomplet();
    }




});





function autocomplet() {
    name = $('#et-name').val('Antonio');
    lastName = $('#et-lastname').val('Olvera');
    userName = $('#et-username').val('Toni');
    email = $('#et-email').val('ejemplo@gmail.com');
    adress = $('#et-adress').val('Calle jota nº3');
    adress2 = $('#et-adress2').val('Calle jota nº1');
    country = $('#et-country').val('España');
    province = $('#et-province').val('Almeria');
    postal = $('#et-postal').val('04740');
    $('#check1').attr('checked', 'true');
    //  $('#check2');
    //  $('#radio1');
    $('#radio2').attr('checked', 'true');
    // $('#radio3');
    card = $('#et-card').val('Mi card');
    numcard = $('#et-numcard').val('778216414');
    expiration = $('#et-expiration').val('2018-07-22');
    cvv = $('#et-cvv').val('048');
    promo = $('#et-promo').val('WefKn');
}