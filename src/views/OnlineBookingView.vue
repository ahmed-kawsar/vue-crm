<script setup>
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  events: [
    {
      title: "Meeting",
      start: "2024-11-18T10:00:00",
      end: "2024-11-18T12:00:00",
    },
  ],

  eventClick: (info) => {
    console.log("Event:", info.event);
  },

  dateClick: (info) => {
    console.log("Date:", info.dateStr);
  },
});

onMounted(() => {});
</script>

<template>
  <h1 class="font-bold text-2xl mb-5">Bookings</h1>
  <FullCalendar :options="calendarOptions" />
</template>
