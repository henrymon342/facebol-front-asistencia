import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import MainAdmin from "../components/administrador/MainAdmin.vue"
import Registro from "../components/administrador/Registro/Registro.vue"
import Asistencia from "../components/administrador/Asistencia/Asistencia.vue"
import Clock from "../components/Clock.vue"


const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'mainadmin',
        component: MainAdmin
    },
    {
        path: '/registro',
        name: 'registro',
        component: Registro
    },
    {
        path: '/asistencia',
        name: 'asistencia',
        component: Asistencia
    },
    // {
    //     path: '/clock',
    //     name: 'clock',
    //     component: Clock
    // }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})