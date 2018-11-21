var campoLink= document.getElementById('ctn_caixa');
var campoPerguntas = document.getElementById('ctn_perguntasTexto');
var buttonPublicar = document.getElementById('btn_envio');
var buttonPublicarPerguntas = document.getElementById('btn_envioPerguntas');
var exibirLinks = document.getElementById('tabelaDoslinks');
var exibirPerguntas = document.getElementById('tabelaDasPerguntas');



buttonPublicar.addEventListener('click', function(){
    create(campoLink.value);
    //location.reload();
});

buttonPublicarPerguntas.addEventListener('click', function() {
    create2(campoPerguntas.value);
   // location.reload();
});


function create(link){
    var data = {
        link: link
    };

    return firebase.database().ref().child('links').push(data);
}

function create2(pergunta){
    var data = {
        pergunta: pergunta
    };

    return firebase.database().ref().child('perguntas').push(data);
}


firebase.database().ref('links').on('value', function(snapshot){
    exibirLinks.innerHTML= '';
    snapshot.forEach(function (item){

    var myBodyId = document.getElementById('tabelaDoslinks');   
    var newBaitTag = document.createElement('a');
    var pula = document.createElement('br');
    var newBaitText = document.createTextNode(item.val().link);
    newBaitTag.setAttribute('href', item.val().link);
  
    newBaitTag.appendChild(newBaitText);
    myBodyId.appendChild(newBaitTag);
    myBodyId.appendChild(pula) 
    

    });
});


firebase.database().ref('perguntas').on('value', function(snapshot){
    exibirPerguntas.innerHTML= '';
    snapshot.forEach(function (item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().pergunta));
        exibirPerguntas.appendChild(li);
    });
});