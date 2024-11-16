import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SalesView from "@/views/SalesView.vue";
import LeadsView from "@/views/LeadsView.vue";
import CustomersView from "@/views/CustomersView.vue";
import SupportTicketsView from "@/views/SupportTicketsView.vue";
import OnlineBookingView from "@/views/OnlineBookingView.vue";
import SettingsView from "@/views/SettingsView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sales",
      name: "sales",
      component: SalesView,
    },
    {
      path: "/leads",
      name: "leads",
      component: LeadsView,
    },
    {
      path: "/customers",
      name: "customers",
      component: CustomersView,
    },
    {
      path: "/tickets",
      name: "tickets",
      component: SupportTicketsView,
    },
    {
      path: "/booking",
      name: "booking",
      component: OnlineBookingView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
  ],
});

export default router;
