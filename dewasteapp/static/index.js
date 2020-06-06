var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.183115, lng: 72.860539 },
    zoom: 13
});
}

var firestore = firebase.firestore();
var docRef = firestore.collection("locations")

console.log("Here");

docRef.add({
    location: "elloworld",
    melo: "hakuna mamad"
}).then(function(){
    console.log("Done deal")
}).catch(function(error){
    console.log(error);
})

docRef.get().then(function(docs){
    docs.forEach(element => {
        console.log(element.data())
    });
    // console.log(doc.data())
}).catch(function(error){
    console.log(error);
})