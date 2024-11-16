<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <aside class="bg-gray-800 w-64 min-h-screen hidden md:block">
    <ul class="text-white">
      <li>
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >Overview</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/sales"
          :class="[
            isActiveLink('/sales')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >All Sales</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/leads"
          :class="[
            isActiveLink('/leads')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >All Leads</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/customers"
          :class="[
            isActiveLink('/customers')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >Customers</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/tickets"
          :class="[
            isActiveLink('/tickets')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >Support Tickets</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/booking"
          :class="[
            isActiveLink('/booking')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >Online Booking</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/settings"
          :class="[
            isActiveLink('/settings')
              ? ['bg-gray-300', 'text-gray-900', 'font-semibold']
              : 'hover:text-gray-300',
            'w-full',
            'inline-block',
            'px-5',
            'py-3',
            'text-md',
          ]"
          >Settings</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>
