
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getDatabase,ref,set,push,onValue,onChildAdded,remove } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  import { getStorage,ref as strRef,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD11CEwk0YFIBVE_9jd0CbgBbUIdQWFbN8",
    authDomain: "fmp-website-db301.firebaseapp.com",
    databaseURL: "https://fmp-website-db301-default-rtdb.firebaseio.com",
    projectId: "fmp-website-db301",
    storageBucket: "fmp-website-db301.appspot.com",
    messagingSenderId: "253893956153",
    appId: "1:253893956153:web:ef01ba9dc574553fc133e8",
    measurementId: "G-G48MBTRYJH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 const db = getDatabase();
 const auth = getAuth();
 //  const storage = getStorage();






var email = document.getElementById('email')
var password = document.getElementById('password')

window.loginUser = function (e) {
  e.preventDefault();
    var obj = {
        email: email.value,
        password: password.value
    }
    console.log(obj)
    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {
            console.log("Login Successfully",res)

            var id = res.user.uid

            var reference = ref(db,`users/${id}`)

            onValue(reference,function(data){
                var responseUser = data.val()
                localStorage.setItem("key",JSON.stringify(id))
                window.location.href="../userpage/index.html"
            })


        }).catch(function(err){
            console.log(err)
        })
}