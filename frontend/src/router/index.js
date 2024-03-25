import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },

    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/contacts",
        name: "contactadd",
        component: () => import("@/views/ContactAdd.vue"),
        props: true 
    },

    {
        path: "/theodoimuonsach",
        name: "theodoimuonsach.home",
        component: () => import("@/views/MuonSachHome.vue"),
    },

    {
        path: "/theodoimuonsach/taophieu/:id",
        name: "theodoimuonsach.add",
        component: () => import("@/views/MuonSachAdd.vue"),
        props: true 
    },

    {
        path: "/theodoimuonsach/taophieu",
        name: "theodoimuonsach.add.notsach",
        component: () => import("@/views/MuonSachAdd.vue"),
        props: true 
    },

    {
        path: "/theodoimuonsach/chinhsua/:id",
        name: "theodoimuonsach.edit",
        component: () => import("@/views/MuonSachEdit.vue"),
        props: true 
    },
    
    {
        path: "/theodoimuonsach/chitiet/:id",
        name: "theodoimuonsach.detail",
        component: () => import("@/views/MuonSachDetail.vue"),
        props: true 
    },
    

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
