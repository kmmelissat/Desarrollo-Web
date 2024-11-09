// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBCsqNpgHPmO3GN8iaMoovu5TfRAhKTa4Q",
    authDomain: "amoramor-bde77.firebaseapp.com",
    projectId: "amoramor-bde77",
    storageBucket: "amoramor-bde77.firebasestorage.app",
    messagingSenderId: "723495894788",
    appId: "1:723495894788:web:da20a17ad6bf9555029a51"
});

const auth = getAuth(app);
const db = getFirestore(app);

export async function registerUser(email, password, firstName, lastName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            firstName: firstName,
            lastName: lastName,
            role: "user",
        });
        console.log('Usuario registrado exitosamente:', userCredential);
    } catch (err) {
        console.error('Error al registrar usuario:', err.message);
    }
}

export async function loginUser(email, password) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Inicio de sesión exitoso");
    } catch (e) {
        console.error("Error al iniciar sesión:", e.message);
    }
}
  
  
  
  
  