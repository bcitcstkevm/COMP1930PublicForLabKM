function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        wrong_user_pass()

        // window.alert("Error : " + errorMessage + errorCode);

        // ...
    });
}

function logout() {
    firebase.auth().signOut();
}

function create_user() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/invalid-email') {
            invalid_email()
        }
        if (errorCode == 'auth/email-already-in-use') {
            taken_email()
        }
        if (errorCode == 'auth/weak-password') {
            weak_password()
        }
        // else{
        //     window.location.href = "ques.html";
        // }

        console.log(errorCode)

        // ...
    });



}

// var email = ''
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, token;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //     email = user.email
        console.log(user.email)
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
            // token = user.getToken() // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }

        // firebase.database().ref().child('users/' + uid).set({
        //     rating: 0
        // });
        // writeUserData(name)
        window.localStorage.setItem('person', uid)
        var promise = firebase.database().ref().child('users/' + uid).set({
            rating: 0
        });
        promise.then(() => {
            window.location = 'ques.html';
        })
    }
    else {
        // No user is signed in.
    }
});

function wrong_user_pass() {
    document.getElementById('invalid_pass').innerHTML = 'Your username or password is invalid. Please sign up.'
    document.getElementById('invalid_pass').style.display = "block";
}

function invalid_email() {
    document.getElementById('invalid_pass').innerHTML = 'Please enter a valid email.'
    document.getElementById('invalid_pass').style.display = "block";
}

function taken_email() {
    document.getElementById('invalid_pass').innerHTML = 'Sorry. This email has already been taken. Please try again'
    document.getElementById('invalid_pass').style.display = "block";
}
function weak_password() {
    document.getElementById('invalid_pass').innerHTML = 'Your password is too weak. It must be more than 6 characters'
    document.getElementById('invalid_pass').style.display = "block";
}


logout()