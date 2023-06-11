<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const router = useRouter()
const name = ref("");
const contact = ref("");
const consultant = ref("");
const sales = ref("");

async function saveCustomer() {
  await $fetch('/api/sales/new', {
    method: 'post',
    body: {
      name: name.value,
      contact: contact.value,
      consultant: consultant.value,
      sales: sales.value,
    }
  });

  await router.push('/admin/sales');
}
</script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Nouveau client</h2>
      <form v-on:submit.prevent="saveCustomer">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input v-model="name" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nom du client" required="">
          </div>
          <div class="sm:col-span-2">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
            <input v-model="contact" type="text" name="contact" id="contact"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Contact du client" required="">
          </div>
          <div class="w-full">
            <label for="consultant" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consultant</label>
            <input v-model="consultant" type="text" name="consultant" id="consultant"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nombre de consultant" required="">
          </div>
          <div class="w-full">
            <label for="sales" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chiffre d'affaires</label>
            <input v-model="sales" type="text" name="sales" id="sales"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Chiffre d'affaires en euro" required="">
          </div>
        </div>
        <button type="submit"
                class="mt-7 text-white bg-custom-green hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Ajouter
        </button>
      </form>
    </div>
  </section>
</template>