<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label
          for="notificationEmails"
          class="block text-sm font-medium text-gray-700"
        >
          Receive notification emails
        </label>
        <select
          id="notificationEmails"
          v-model="settings.notificationEmails"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="never">Never</option>
        </select>
      </div>
      <div>
        <label for="theme" class="block text-sm font-medium text-gray-700"
          >Theme</label
        >
        <select
          id="theme"
          v-model="settings.theme"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <div>
        <label for="language" class="block text-sm font-medium text-gray-700"
          >Language</label
        >
        <select
          id="language"
          v-model="settings.language"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <button
        @click="saveSettings"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const settings = ref({
  notificationEmails: "weekly",
  theme: "light",
  language: "en",
});

const saveSettings = () => {
  console.log("Saving settings data:", settings.value);
};
</script>
