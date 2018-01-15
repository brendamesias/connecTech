// Inicializamos el documento
$(document).ready(function() {

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
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	// Evento que por medio  de un pop-up te permite acceder con tu cuenta de  google
	$('#btn-signup').click(
		function signUp() {
			firebase.auth()
				.signInWithPopup(provider)
				.then(function(result) {
					var user = firebase.auth().currentUser;
					saveDataUser(user);
					console.log(user.displayName);
					console.log(user.photoURL);

					// Extraemos los datos de usuario para el modal de registro exitoso
					$('#btn-modal').addClass('trying');
					$('#btn-modal').attr('data-toggle', 'modal');
					$('#btn-modal').attr('data-target', '#myModal');
					$('#btn-modal').trigger('click');
					$('#your-name').text(user.displayName);
					$('#your-email').text(user.email);
					$('#your-photo').append('<img class="img-responsive" src="' + user.photoURL + '"/>');
				})
		});
	// Redireccionamos a la vista interests
	$('#next-view').on('click', function(){
		window.location.href = 'interests.html';
	})

	// Funcion que cambia los datos default por los datos del usuario actual
	$('#min-photo-user').on('click', function () {
		var user = firebase.auth().currentUser;
		// $('#user-photo').append('<img class="img-responsive col-xs-8 col-xs-offset-2 my-photo" src="' + user.photoURL + '"/>');
		$('#my-photo').attr('src', user.photoURL);
		$('#user-name').text(user.displayName);
		$('#user-email').text(user.email);
		console.log(user.displayName)
	});
	
	// Escribiendo en la base de datos directamente 
		$('#btn-modal').click(function(){
			firebase.database().ref('trying')
			.set({
				nombre: 'Tefa',
				edad: '21'
			})
		});
	// Guardar información de los usuarios en  la base de datos
	function saveDataUser(user) {
		var myUser = {
			uid: user.uid,
			name: user.displayName,
			email: user.email,
			photo: user.photoURL
		}
		firebase.database().ref('myUsersData/' + user.uid)
		.set(myUser);
	};
	// Leer Base de datos 
	firebase.database().ref('myUsersData')
	.on('child_added', function(e) {
		var user = e.val();
		$('#container-my-friends').append('<img class="img-responsive" src="'+ user.photo +'"/>');
	});

	
	// DATA REAL TIME FIREBASE EXAMPLE
	// var trying =  $('#trying');
	// var theRef = firebase.database().ref().child('text');
	// theRef.on('value', snap => $(trying).html(snap.val()))

});
