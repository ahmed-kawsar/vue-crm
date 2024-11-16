<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="flex-1 p-6 overflow-y-auto">
        <div class="container mx-auto">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
