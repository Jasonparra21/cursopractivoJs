const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult = document.querySelector('#result');


form.addEventListener('submit', sumarvalores); 

function sumarvalores(event) {
    event.preventDefault();
    console.log('Escuchando');
    const sumA = input1.value + input2.value;
    presult.innerText = "Resultado " + sumA;
}






//////////////// CLASE ESCUCHAR ////////////////////////////////////777

// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btncalcular');
// const presult = document.querySelector('#result');

// function btnonclick() {
//     console.log('Escuchando');
//     const sumA = input1.value + input2.value;
//     presult.innerText = "Resultado " + sumA;
// }


/////////////////// otra clase //////////////////////////////////////77

// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');



// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML='Puta <br> Feo';
// h1.innerText='Si aprendi';
// //console.log(h1.getAttribute('pantalla'));
// //h1.setAttribute('pantalla','ROJO');
// h1.classList.add('AZUL');
// h1.classList.remove('AZUL');

// input.value=456
 
// const img =document.createElement('img');
// img.setAttribute('src','https://static.wixstatic.com/media/90b5fe_c5aad61b20ce472ea7cc77350f978e5a~mv2_d_2651_1818_s_2.jpg/v1/fill/w_465,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90b5fe_c5aad61b20ce472ea7cc77350f978e5a~mv2_d_2651_1818_s_2.jpg');
// pid.append(img);