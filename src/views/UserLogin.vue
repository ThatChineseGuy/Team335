<template>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model = "email" /></p>
    <p><input type="password" placeholder="Password" v-model = "password" /></p>
    <p v-if = "errorMessage">{{errorMessage}}</p>
    <p><button @click = "userReg"> Submit </button></p>
    <p><button @click = "signInWithGoogle"> Sign in With Google</button></p>
</template>

<script setup>
import{ref} from "vue";
import { useRouter } from "vue-router";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref();

const userReg = () =>{
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data) => {
        console.log("Signed In Successfully! Welcome to ...");
        console.log(data.code)
        router.push('/signedin')
    })
    .catch((error) => {
        console.log(error.code);
        switch(error.code){
            case "auth/invalid-email":
                errorMessage.value = " Invalid Email";
                break;
            case "auth/user-not-found":
                errorMessage.value = "User is not registered";
                break;
            case "auth/wrong-password":
                errorMessage.value = "Invalid Password";
                break;
                default:
                    errorMessage.value = "Email or Password is incorrect";
                    break;
        }
        alert(error.message);
    });
};
</script>