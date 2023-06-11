<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});


const customers = ref([]);

onMounted( async () => {


  await getCustomers();

})

async function getCustomers() {
  const data = await $fetch('/api/sales/get?search=', {
    method: 'get',
  });

  if (data !== 'Error') {
    customers.value = data;
    console.log(data)
  }
}

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

</script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Nouvelle mission</h2>
      <form v-on:submit.prevent="saveMission">
        <div class=""> 
            <div class="w-full mb-2">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre de la mission</label>
            <input v-model="title" type="text" name="title" id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Titre de la mission" required="">
            </div>
            <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="description" type="text" name="description" id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Description de l'objectif" required=""></textarea>
            </div>
          <div class="mt-2">
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clients</label>
            <select  id=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
           
              <option v-for="customer in customers" :value="customer.id" :key="customer.id">{{ customer.name }}</option>
             
            </select>
          </div>
          
        
        
        </div>
        <button type="submit"
                class="mt-7 text-white bg-custom-red hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Créer
        </button>
      </form>
    </div>
  </section>
</template>