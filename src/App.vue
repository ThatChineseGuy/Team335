<template>
  <ul>
    <div><RouterLink to = "/"> Main Page </RouterLink></div>
    <RouterLink to = "/login"> Login </RouterLink>
    <RouterLink to = "/register"> Register </RouterLink>
    <button @click="logout" v-if="isLogin">Sign Out</button>
  </ul>
  <RouterView />
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
const isLogin =  ref(false);
let auth = getAuth();
onMounted(() => {
  onAuthStateChanged(auth, (user)=> {
    if(user){
      isLogin.value = true;
    }else{
      isLogin.value = false;
    }

  });
});
const logout = ()=>{
  signOut(auth).then(()=> {
    router.push("/");
  }
  );
}

</script>
<script>
import { RouterView } from 'vue-router';
import router from './router';

export default {
  name: 'App',
  components: {
    RouterView
}
}
</script>

<style>
  #app{
    text-align: center;
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
