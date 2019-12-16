// Paste the code from Firebase 
var config = {
apiKey: "AIzaSyCcS8ZCudJ8RJojYwl_hDavPGpel0N_czk",
    authDomain: "nacu008.firebaseapp.com",
    databaseURL: "https://nacu008.firebaseio.com",
    projectId: "nacu008",
    storageBucket: "nacu008.appspot.com",
    messagingSenderId: "546519670977"
	
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});