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
        //Grab leader board node and append new h1s
        for (let i = 0; i < 5; i++) {
            let paragraph_node = document.getElementById((i + 1).toString())
            let new_h1 = document.createElement('h3')
            new_h1.innerHTML = list_of_movies[i + rating]
            paragraph_node.insertBefore(new_h1, paragraph_node.childNodes[0])
        }
    })

    function home() {
        window.location.href = "https://www.google.com"
    }

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("mydrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}