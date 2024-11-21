<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-5">Sales</h1>

    <div class="mb-4 flex justify-between items-center">
      <button
        @click="isCreating = true"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        New Entry
      </button>
      <div>
        <span class="font-bold">Total Sales Amount:</span> ${{
          totalSalesAmount
        }}
      </div>
    </div>

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
              Type
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Customer
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
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
          <tr v-for="(sale, index) in paginatedSales" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                {{ (currentPage - 1) * perPage + index + 1 }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ sale.type }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ sale.customer }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">${{ sale.cost }}</div>
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <button
                @click="editSale(sale.id)"
                class="text-blue-600 hover:text-blue-900"
              >
                Edit
              </button>
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <button
                @click="deleteSale(sale.id)"
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
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>

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
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Create New Sale
                </h3>
                <div class="mt-2">
                  <label
                    for="createType"
                    class="block text-sm font-medium text-gray-700"
                    >Type</label
                  >
                  <select
                    id="createType"
                    v-model="newSale.type"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Restoration">Restoration</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Damage Repair">Damage Repair</option>
                  </select>

                  <label
                    for="createCustomer"
                    class="block text-sm font-medium text-gray-700 mt-2"
                    >Customer</label
                  >
                  <input
                    type="text"
                    id="createCustomer"
                    v-model="newSale.customer"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <label
                    for="createAmount"
                    class="block text-sm font-medium text-gray-700 mt-2"
                    >Amount</label
                  >
                  <input
                    type="number"
                    id="createAmount"
                    v-model="newSale.amount"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="createSale"
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

    <div v-if="isEditing" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-500 opacity-75"
            @click="isEditing = false"
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
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Edit Sale
                </h3>
                <div class="mt-2">
                  <label
                    for="editType"
                    class="block text-sm font-medium text-gray-700"
                    >Type</label
                  >
                  <select
                    id="editType"
                    v-model="editedSale.type"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Restoration">Restoration</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Damage Repair">Damage Repair</option>
                  </select>

                  <label
                    for="editCustomer"
                    class="block text-sm font-medium text-gray-700 mt-2"
                    >Customer</label
                  >
                  <input
                    type="text"
                    id="editCustomer"
                    v-model="editedSale.customer"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <label
                    for="editCost"
                    class="block text-sm font-medium text-gray-700 mt-2"
                    >Cost</label
                  >
                  <input
                    type="number"
                    id="editCost"
                    v-model="editedSale.cost"
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
              @click="isEditing = false"
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
import { ref, computed } from "vue";

const sales = ref([]);
const saleTypes = ["Restoration", "Cleaning", "Damage Repair"];
for (let i = 1; i <= 100; i++) {
  const randomType = saleTypes[Math.floor(Math.random() * saleTypes.length)];
  sales.value.push({
    id: i,
    type: randomType,
    customer: `Customer ${i}`,
    cost: (Math.random() * 1000).toFixed(2),
  });
}

const perPage = 15;
const currentPage = ref(1);
const isCreating = ref(false);
const isEditing = ref(false);
const newSale = ref({ type: "Restoration", customer: "", cost: "" });
const editedSale = ref({
  id: null,
  type: "Restoration",
  customer: "",
  cost: "",
});

const totalSalesAmount = computed(() => {
  return sales.value
    .reduce((sum, sale) => sum + parseFloat(sale.cost), 0)
    .toFixed(2);
});

const totalPages = computed(() => Math.ceil(sales.value.length / perPage));

const paginatedSales = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return sales.value.slice(start, end);
});

const deleteSale = (id) => {
  sales.value = sales.value.filter((sale) => sale.id !== id);
};

const createSale = () => {
  const newId =
    sales.value.length > 0
      ? Math.max(...sales.value.map((sale) => sale.id)) + 1
      : 1;
  sales.value.unshift({
    id: newId,
    type: newSale.value.type,
    customer: newSale.value.customer,
    cost: newSale.value.cost,
  });
  newSale.value = { type: "Restoration", customer: "", cost: "" };
  isCreating.value = false;
};

const editSale = (id) => {
  const saleToEdit = sales.value.find((sale) => sale.id === id);
  if (saleToEdit) {
    editedSale.value = { ...saleToEdit };
    isEditing.value = true;
  }
};

const saveEdit = () => {
  const saleIndex = sales.value.findIndex(
    (sale) => sale.id === editedSale.value.id
  );
  if (saleIndex !== -1) {
    sales.value.splice(saleIndex, 1, { ...editedSale.value });
    isEditing.value = false;
  }
};
</script>
