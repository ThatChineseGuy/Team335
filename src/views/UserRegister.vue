<template>
    <h1>Register Account</h1>
    <p><input type="text" placeholder="Email" v-model = "email" /></p>
    <p><input type="password" placeholder="Password" v-model = "password" /></p>
    <p><button @click = "userReg"> Register Now</button></p>
    <p><button @click = "signInWithGoogle"> Sign in With Google</button></p>
</template>

<script setup>
import{ref} from "vue";
import { useRouter } from "vue-router";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
const router = useRouter();
const email = ref("");
const password = ref("");

const userReg = () =>{
    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data) => {
        console.log("Registered Successfully! Welcome to ...");
        console.log(data.code)
        router.push('/signedin')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};
</script>