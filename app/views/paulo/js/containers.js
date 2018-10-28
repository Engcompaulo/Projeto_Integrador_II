
  $(document).ready(function(){
        
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
        
    firebase.firestore().collection('containers').add({
      titulo:'mockcontainer',
      usuario:'mockuser'
    }).then(function(docRef){
      console.log(docRef.id)
      firebase.firestore().collection('containers')
      .doc(docRef.id).collection('topicos').add({
        link:'linkMock'
      })
    })

});