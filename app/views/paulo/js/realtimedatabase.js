var campoLink= document.getElementById('areaLink')
var buttonPublicar = document.getElementById('enviarLink')
var exibirLinks = document.getElementById('exibirLinks')
var database = firebase.database();


buttonPublicar.addEventListener('click', function(){
    create(campoLink.value);
    salvarLink(campoLink.value) 
});

function create(link){
    var data = {
        link: link
    };

    return firebase.database().ref().child('links').set(data);
}

function salvarLink(campoLink) {
    var d = new Date();
    cont = Math.floor(((Math.random() * 100000) + 1));
    
    firebase.database().ref('Links/'+cont).set({
      links: campoLink
    });
  }


firebase.database().ref('linkss').on('value', function(snapshot){
    exibirLinks.innerHTML='';
    snapshot.forEach(function (item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().link));
        exibirLinks.appendChild(li);
    });
});