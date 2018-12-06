let user_id = window.localStorage.getItem('person');
let rating_ref = firebase.database().ref('users/' + user_id + '/rating');

let list_of_movies = [];
let rating;

rating_ref.on('value', function (snapshot) {
    rating = snapshot.val();
    // console.log(rating.val())
})

firebase.database().ref('movies').on('value', function (snapshot) {
    snapshot.val().forEach(element => {
        list_of_movies.push(element)
    });
})

// for(let i = 0; i < 5; i++){

//     document.getElementById((i+1).toString()).innerHTML = list_of_movies[i+rating]
// }

console.log(list_of_movies)
console.log([5, 3, 4, 5, 6, 5])

list_of_movies.forEach(element => {
    console.log(element + " 1")
});

            // for (let i = 0; i < 2; i++) {
            //     firebase.database().ref('movies/' + i.toString()).on('value', function (snapshot) {
            //         list_of_movies.push(snapshot.val())
            //     })
            // }

            // setInterval(() => {
            //     for (let i = 0; i < 5; i++) {
            //         document.getElementById((i + 1).toString()).innerHTML = list_of_movies[i];
            //         console.log(firebase.database().ref('movies/' + i.toString()).on('value', function (snapshot) {
            //         list_of_movies.push(snapshot.val())
            //     }))
            //     console.log(list_of_movies)

            //     }
            // }, 1000)

            // // Import Admin SDK
            // var admin = require("firebase-admin");

            // // Get a database reference to our posts
            // var db = admin.database();
            // var ref = db.ref("server/saving-data/fireblog/posts");

            // // Attach an asynchronous callback to read the data at our posts reference
            // ref.on("value", function (snapshot) {
            //     console.log(snapshot.val());
            // }, function (errorObject) {
            //     console.log("The read failed: " + errorObject.code);
            // });

