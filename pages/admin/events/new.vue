<script setup>
// definePageMeta({
//   middleware: ["auth"],
// });

const title = ref("");
const description = ref("");
const dateEvent = ref(null);


async function saveEvent() {
//   await $fetch('/api/user/new', {
//     method: 'post',
//     body: {
//       name: name.value,
//       firstname: firstname.value,
//       status: status.value,
//       city: city.value,
//       phone: phone.value,
//       address: address.value,
//       email: email.value,
//       rib: rib.value,
//       zip: zip.value,
//     }
//   });
}
</script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Créer un évènement</h2>
      <form v-on:submit.prevent="saveEvent">
        <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input v-model="title" type="text" name="title" id="title"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nom" required="">
          </div>
          <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="description" type="text" name="description" id="description"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="description" required=""></textarea>
          </div>


          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input v-model="dateEvent" type="datetime-local" name="dateEvent" id="dateEvent"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required="">
          </div>
        
        </div>
        <button type="submit"
                class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Ajouter
        </button>
      </form>
    </div>
  </section>
</template>
