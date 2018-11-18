$(document).ready(function(){
        
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
    firebase.firestore().collection("links")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                //console.log("novo ", change.doc.data());
                $("#links ul").prepend("<li>" +
                  "<img src='" + change.doc.data().foto + "'/> "+
                  change.doc.data().mensagem
                  +
                  "</li>");
            }

        });
    });
    $("#btn_envio").click(function(){
      
      console.log("a");
      var foto;
      $.ajax({
                  url: 'https://randomuser.me/api/',
                  dataType: 'json',
                  success: function(data) {
                    foto = data.results[0].picture.thumbnail;
                    
                    firebase.firestore().collection("links").add({
                      'usuario': 'nome',
                      'link' : $("#ctn_caixa").val(),
                      'foto': foto
                    })
                  }
                });
      
      
    });
});