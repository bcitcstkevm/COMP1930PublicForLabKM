let results = document.getElementsByTagName('input');
let results_checked = {};

function update_database() {
    for (let i = 0; i < results.length; i++) {
        if (results[i].checked) {
            results_checked[results[i].name] = (results[i].value)
        }
    }

    let user_id = window.localStorage.getItem('person')

    var promise = firebase.database().ref().child('users/' + user_id).set({
        rating: get_rating()
    });

    promise.then(() => {
        window.location.href = 'ques_movie_ratings.html';
    })
    // window.location.href = 'ques_movie_ratings.html';
}

function get_rating() {
    let total = 0;
    Object.keys(results_checked).forEach(function (key) {

        total += parseInt(results_checked[key])
        // console.log(key, results_checked[key]);
    });

    return total;
}