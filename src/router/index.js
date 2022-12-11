
import { createRouter, createWebHistory } from "vue-router";
import {getAuth} from "firebase/auth";
const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {path: "/", component: () => import("../views/MainPage.vue")},
            {path: "/login", component: () => import("../views/UserLogin.vue")},
            {path: "/register", component: () => import("../views/UserRegister.vue")},
            {
                path: "/signedin", component: () => import("../views/SignedIn.vue"),
                meta:{
                    requiresAuth:true,
                }
            }
        ],
    }
);
router.beforeEach((to,from,next)=>{
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(getAuth().currentUser){
            next();
        }else{
            alert("your not signed in");
            next("/");
        }
    }else{
        next();
    }
})

export default router;
