const axios = require("axios");
const url = "http://127.0.0.1:8080/api/cliente";
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector('#email');
const cadastraBTN = document.querySelector("#BTNcad");



axios.get(url).then(function(resposta){
  console.log(resposta.data.objects);
}).catch(function(error){
  if(error){
    console.log(error);
  }
});



function inserePessoa(){
  let usuario  = {
    "nome":inputNome.value,
    "nascimento":" ",
    "email":inputEmail.value,
    "rg":" ",
    "endereco_id":2 
  }
  prompt("cadastrado com sucesso");

  axios.post(url, usuario)
}

cadastraBTN.onclick = inserePessoa;