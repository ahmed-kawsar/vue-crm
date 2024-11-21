<template>
  <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
  <div class="mt-5">
    <div class="my-5">
      <h3 class="text-lg font-semibold mb-4">Overview</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <HomeCard
          card-bg="bg-blue-100"
          title="Revenue"
          value="$47090.32"
          season="This Month"
        />
        <HomeCard
          card-bg="bg-green-100"
          title="Customers"
          value="2,345"
          season="This Month"
        />
        <HomeCard
          card-bg="bg-yellow-100"
          title="Average Order"
          value="$145"
          season="This Month"
        />
      </div>
    </div>

    <div class="">
      <h3 class="text-lg font-semibold my-5">Leads</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(lead, index) in leads" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ index + 1 }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ lead.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ lead.email }}</div>
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <button
                  @click="editLead(index)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <button
                  @click="deleteLead(index)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4">
        <router-link
          to="/leads"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View All Leads
        </router-link>
      </div>
    </div>

    <div v-if="isEditing" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
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
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Edit Lead
                </h3>
                <div class="mt-2">
                  <label
                    for="editName"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="editName"
                    v-model="editedLead.name"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    for="editEmail"
                    class="block text-sm font-medium text-gray-700 mt-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="editEmail"
                    v-model="editedLead.email"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="saveEdit"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              @click="cancelEdit"
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
import HomeCard from "@/components/HomeCard.vue";
import { ref } from "vue";

const leads = ref([
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Smith", email: "jane.smith@example.com" },
  { name: "Peter Jones", email: "peter.jones@example.com" },
  { name: "Alice", email: "alice.brown@example.com" },
  { name: "Bob Green", email: "bob.green@example.com" },
]);

const isEditing = ref(false);
const editedLeadIndex = ref(null);
const editedLead = ref(null);

const deleteLead = (index) => {
  leads.value.splice(index, 1);
};

const editLead = (index) => {
  editedLeadIndex.value = index;
  editedLead.value = { ...leads.value[index] };
  isEditing.value = true;
};

const saveEdit = () => {
  leads.value.splice(editedLeadIndex.value, 1, editedLead.value);
  isEditing.value = false;
};

const cancelEdit = () => {
  isEditing.value = false;
};
</script>
