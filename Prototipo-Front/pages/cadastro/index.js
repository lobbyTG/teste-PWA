// import IMask from 'imask';

// // let element = document.getElementById('phonemask');

// // const mask = () =>{
// //     element.replaceChild('(00) 00000-0000')
// // }


// const element = document.getElementById('phonemask');
// const maskOptions = {
//   mask: '+{7}(000)000-00-00'
// };
// const mask = IMask(element, maskOptions);


$('#phonemask').mask('(00) 00000-0000')

const cadastro = () =>{
    location.href = "../menu/index.html";
    alert("Cadastro realizado")
}
