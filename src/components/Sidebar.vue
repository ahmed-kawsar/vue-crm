<script setup>
import { RouterLink, useRoute } from "vue-router";

import {
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TicketIcon,
  CalendarIcon,
  UserCircleIcon,
  MagnifyingGlassCircleIcon,
  CogIcon,
} from "@heroicons/vue/24/solid";

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
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <HomeIcon class="w-5 h-5 mr-3" />
          Overview
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/sales"
          :class="[
            isActiveLink('/sales')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <ShoppingBagIcon class="w-5 h-5 mr-3" />
          All Sales
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/leads"
          :class="[
            isActiveLink('/leads')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <MagnifyingGlassCircleIcon class="w-5 h-5 mr-3" />
          All Leads
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/customers"
          :class="[
            isActiveLink('/customers')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <UserGroupIcon class="w-5 h-5 mr-3" />
          Customers
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/tickets"
          :class="[
            isActiveLink('/tickets')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <TicketIcon class="w-5 h-5 mr-3" />
          Support Tickets
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/booking"
          :class="[
            isActiveLink('/booking')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <CalendarIcon class="w-5 h-5 mr-3" />
          Online Booking
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/profile"
          :class="[
            isActiveLink('/profile')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <UserCircleIcon class="w-5 h-5 mr-3" />
          Profile
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/settings"
          :class="[
            isActiveLink('/settings')
              ? ['bg-gray-500', 'text-gray-100', 'font-semibold']
              : 'hover:text-gray-300',
            'flex',
            'items-center',
            'px-5',
            'py-3',
            'text-md',
          ]"
        >
          <CogIcon class="w-5 h-5 mr-3" />
          Settings
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
