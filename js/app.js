// Inicializando el document 
$(document).ready(function () {

	// Inicializando Firebase
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

	// Evento que por medio  de un pop-up te permite acceder con tu cuenta de  google
	$('#btn-signup').click(
		function signUp() {
			firebase.auth()
				.signInWithPopup(provider)
				.then(function (result) {
					// window.location.href = 'register.html';
					console.log(result.user.displayName);
					console.log(result.user.photoURL);

					// Extraemos los datos de usuario para el modal 
					$('#btn-modal').addClass('trying');
					$('#btn-modal').attr('data-toggle', 'modal');
					$('#btn-modal').attr('data-target', '#myModal');
					$('#btn-modal').trigger('click');
					$('#your-name').text(result.user.displayName);
					$('#your-email').text(result.user.email);
					$('#your-photo').append('<img class="img-responsive" src="' + result.user.photoURL + '"/>');
				})
		});
	// Redirigiendo a la vista home
	$('#next-view').on('click', function(){
		window.location.href = 'interests.html';
	})
	//Guardar información del usuario en  la base de datos
	function saveUser(user) {
		var userData = {
			uid: user.uid,
			name: user.displayName,
			email: user.email,
			photo: user.photoURL
		}
		firebase.database().ref('usersData').push(userData);
	};
	
	});

	// DATA REAL TIME FIREBASE EXAMPLE
	// var trying =  $('#trying');
	// var theRef = firebase.database().ref().child('text');
	// theRef.on('value', snap => $(trying).html(snap.val()))

});