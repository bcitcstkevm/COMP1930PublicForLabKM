let user_id = window.localStorage.getItem('person');
let rating_ref = firebase.database().ref('users/' + user_id + '/rating');

let list_of_movies = [];
let rating;

rating_ref.on('value', function (snapshot) {
    rating = snapshot.val();
    // console.log(rating.val())
})

// firebase.database().ref('movies').on('value', function (snapshot) {
//     snapshot.val().forEach(element => {
//         list_of_movies.push(element)
//     });
//     //Grab leader board node and append new h1s
//     for (let i = 0; i < 5; i++) {
//         let paragraph_node = document.getElementById((i + 1).toString())
//         let new_h1 = document.createElement('h3')
//         new_h1.innerHTML = list_of_movies[i + rating]
//         paragraph_node.insertBefore(new_h1, paragraph_node.childNodes[0])
//     }
// })

function watchTrailer() {
    window.location.href = "https://youtu.be/38A__WT3-o0"
}

function watchNowOld() {
    window.location.href = "https://www.amazon.com/Country-Old-Men-Tommy-Jones/dp/B006H8JJXS/ref=sr_1_1?ie=UTF8&qid=1544141211&sr=8-1&keywords=no+country+for+old+men"
}

function watchNowNew() {
    window.location.href = "https://www.cineplex.com/Showtimes/bohemian-rhapsody/nearby-theatres?Date=12/7/2018"
}

function moreInfo() {
    window.location.href = "https://www.imdb.com/title/tt0477348/?ref_=nv_sr_1"
}

function logOut() {
    window.location.href = "index.html"
}

