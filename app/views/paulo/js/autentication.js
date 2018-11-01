var botaoCriarUser = document.getElementById('botaoRegistrar');
var botaoLogarPagina = document.getElementById('botaologar');
var logarBotaoFacebook = document.getElementById('atenticaFace');
var logarBotaoGoogle = document.getElementById('atenticaGoogle');
var logarBotaoTwitter = document.getElementById('atenticaTwitter');
var logarBotaoInta = document.getElementById('atenticaInsta');

var email = document.getElementById('email');
var senha = document.getElementById('senha');


botaoCriarUser.addEventListener('click', function(){
    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, senha.value)
        .then(function(){
            alert('Bem vindo '+ email.value);
        })
        .catch(function(error){
            console.error(error.code);
            console.error(error.message);
            alert('Falha de cadastrar, verifique o erro no console.')
        });
});

