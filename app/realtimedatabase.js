var campoLink= document.getElementById('ctn_caixa')
var buttonPublicar = document.getElementById('btn_envio')
var exibirLinks = document.getElementById('exibirLinks')
//var database = firebase.database();


buttonPublicar.addEventListener('click', function(){
    create(campoLink.value);
    //salvarLink(campoLink.value) 
});

function create(link){
    var data = {
        link: link
    };

    return firebase.database().ref().child('links').push(data);
}

firebase.database().ref('links').on('value', function(snapshot){
    exibirLinks.innerHTML= '';
    snapshot.forEach(function (item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().link));
        exibirLinks.appendChild(li);
    });
});