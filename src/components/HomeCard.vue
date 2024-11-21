<script setup>
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/solid";
defineProps({
  title: {
    type: String,
    default: "Sales",
    required: true,
  },
  value: {
    type: Number,
    default: 3300,
    required: true,
  },
  season: {
    type: String,
    default: "This Month",
  },
  cardBg: {
    type: String,
    default: "bg-teal-500",
    required: true,
  },
});
</script>

<template>
  <div :class="`${cardBg} p-6 rounded-lg shadow-sm`">
    <p class="text-gray-600">{{ title }}</p>
    <div class="flex items-center justify-between my-3">
      <div class="text-2xl font-bold">{{ value }}</div>
      <div class="bg-white px-3 py-1 rounded-2xl">
        <ArrowTrendingUpIcon class="w-5" />
      </div>
    </div>
    <p class="text-gray-500 text-sm">{{ season }}</p>
  </div>
</template>
