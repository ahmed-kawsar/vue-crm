<script setup>
import HomeCard from "@/components/HomeCard.vue";
</script>

<template>
  <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
  <div class="mt-5">
    <div class="my-5">
      <h3 class="text-lg font-semibold mb-4">Overview</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="bg-blue-100 p-6 rounded-lg shadow-sm">
          <p class="text-gray-600">Revenue</p>
          <p class="text-2xl font-bold">$12,456</p>
          <p class="text-gray-500 text-sm">This month</p>
        </div>

        <div class="bg-green-100 p-6 rounded-lg shadow-sm">
          <p class="text-gray-600">Customers</p>
          <p class="text-2xl font-bold">2,345</p>
          <p class="text-gray-500 text-sm">This month</p>
        </div>

        <div class="bg-yellow-100 p-6 rounded-lg shadow-sm">
          <p class="text-gray-600">Average Order Value</p>
          <p class="text-2xl font-bold">$145</p>
          <p class="text-gray-500 text-sm">This month</p>
        </div>
      </div>
    </div>

    <div class="">
      <h3 class="text-lg font-semibold mb-4">Leads</h3>
      <div></div>
    </div>
  </div>
</template>
