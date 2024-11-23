<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Support Tickets</h2>

    <div class="mb-4">
      <button
        @click="isCreating = true"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Ticket
      </button>
    </div>

    <div v-if="tickets.length > 0">
      <ul class="divide-y divide-gray-200">
        <li v-for="ticket in tickets" :key="ticket.id" class="py-4">
          <div class="flex justify-between items-center">
            <div>
              <span class="font-medium text-gray-800">{{
                ticket.subject
              }}</span>
              <span
                class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-{{ statusColor(ticket.status) }}-100 text-{{ statusColor(ticket.status) }}-800"
              >
                {{ ticket.status }}
              </span>
            </div>
            <div class="text-sm text-gray-500">{{ ticket.updatedAt }}</div>
          </div>
          <p class="mt-1 text-sm text-gray-600">{{ ticket.description }}</p>
        </li>
      </ul>
    </div>
    <div v-else class="text-center text-gray-500">No tickets yet.</div>

    <div v-if="isCreating" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-500 opacity-75"
            @click="isCreating = false"
          ></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Create New Ticket
              </h3>
              <div class="mt-2">
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  v-model="newTicket.subject"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <label
                  for="description"
                  class="block text-sm font-medium text-gray-700 mt-2"
                  >Description</label
                >
                <textarea
                  id="description"
                  v-model="newTicket.description"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="createTicket"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Create
            </button>
            <button
              @click="isCreating = false"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tickets = ref([
  {
    id: 1,
    subject: "Issue with order #123",
    description: "The items in my order were damaged during shipping.",
    status: "Open",
    updatedAt: "2024-11-20",
  },
  {
    id: 2,
    subject: "Question about product",
    description: "I have a question about the warranty of your product.",
    status: "Closed",
    updatedAt: "2024-11-18",
  },
  // ... more tickets
]);

const isCreating = ref(false);
const newTicket = ref({
  subject: "",
  description: "",
});

const statusColor = (status) => {
  switch (status) {
    case "Open":
      return "green";
    case "Pending":
      return "yellow";
    case "Closed":
      return "red";
    default:
      return "gray";
  }
};

const createTicket = () => {
  const newId =
    tickets.value.length > 0
      ? Math.max(...tickets.value.map((ticket) => ticket.id)) + 1
      : 1;
  tickets.value.unshift({
    id: newId,
    subject: newTicket.value.subject,
    description: newTicket.value.description,
    status: "Open",
    updatedAt: new Date().toLocaleDateString(),
  });

  newTicket.value = { subject: "", description: "" };
  isCreating.value = false;
};
</script>
