const axios = require("axios");
const url = "http://127.0.0.1:8080/api/cliente";

let usuario  = {
	"nome":"Bruce",
	"nascimento":"1998-03-26 00:00:00",
	"rg":"36.542.132-7",
	"email":"bruce@wayne.com",
	"endereco_id":2 
}

axios.get(url).then(function(resposta){
  console.log(resposta.data.objects);
}).catch(function(error){
  if(error){
    console.log(error);
  }
});

axios.post(url, usuario)