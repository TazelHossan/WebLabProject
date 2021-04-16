// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPxzRphQsg1OGwCmkfBSAvTSUMo5ulptA",
    authDomain: "myproject1-8ea79.firebaseapp.com",
    projectId: "myproject1-8ea79",
    storageBucket: "myproject1-8ea79.appspot.com",
    messagingSenderId: "434184118827",
    appId: "1:434184118827:web:9c751a5ba5c7fead2a406e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var message = getInputVal('message');

  // Save message
  saveMessage(message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    message:message
  });
}