$(document).ready(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCAqTCcsvkHHN8z3Qa85cI9Sd4CKwmjHA8",
		authDomain: "connectech-1a62a.firebaseapp.com",
		databaseURL: "https://connectech-1a62a.firebaseio.com",
		projectId: "connectech-1a62a",
		storageBucket: "connectech-1a62a.appspot.com",
		messagingSenderId: "822294911375"
	  };
	firebase.initializeApp(config);

	var provider = new firebase.auth.GoogleAuthProvider();
	
	$('#btn-signup').click(
		function signUp(event){
			firebase.auth().signInWithRedirect(provider);
			firebase.auth().getRedirectResult().then(function(result) {
				if (result.credential) {
				  // This gives you a Google Access Token. You can use it to access the Google API.
				  var token = result.credential.accessToken;
				  // ...
				}
				// The signed-in user info.
				var user = result.user;
				console.log(user.displayName);
			  }).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			  });
		})
	// DATA REAL TIME FIREBASE EXAMPLE
	// var trying =  $('#trying');
	// var theRef = firebase.database().ref().child('text');
	// theRef.on('value', snap => $(trying).html(snap.val()))

});