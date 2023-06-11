<script setup>

definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});


const customers = ref([]);
const customerId = ref(null);
const dateStart = ref();
const dateEnd = ref();
const title = ref("");
const description = ref("");
const place = ref("");


const saveMission = async () => {

  

const data = await $fetch('/api/mission/new', {
    method: 'post',
    body:{
      title: title.value,
      description: description.value,
      place: place.value,
      dateStart: dateStart.value,
      dateEnd: dateEnd.value,
      customerId : customerId.value
    }
  });
}

onMounted( async () => {

  await getCustomers();

})

async function getCustomers() {
  const data = await $fetch('/api/sales/get?search=', {
    method: 'get',
  });

  if (data !== 'Error') {
    customers.value = data;
   
  }
}

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});



async function saveTraining() {
    
  await $fetch('/api/mission/new', {
    method: 'post',
    body: {
      title: title.value,
      description: description.value,
      date_startMission : date_startMission.value,
      time_startMission : time_startMission.value
    }
  });
}
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
                    placeholder="Besoin du client / Compétences / Softs skills..." required=""></textarea>
            </div>


             <div class="w-full mb-2 mt-2">
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lieu de la mission</label>
            <input v-model="place" type="text" name="" id=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Lieu" required="">
            </div>
          <div class="mt-2">
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clients</label>
            <select v-model="customerId" id=""
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
           
              <option v-for="customer in customers" :value="customer.id" :key="customer.id">{{ customer.name }}</option>
             
            </select>
          </div>


           <div class="w-full mt-2">
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de début</label>
            <input v-model="dateStart" type="date" name="" id=""
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required="">
          </div>

          <div class="w-full mt-2">
            <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de fin</label>
            <input v-model="dateEnd" type="date" name="" id=""
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required="">
          </div>
        
          
        
        
        </div>
        <button type="submit"
                class="text-white bg-custom-green mt-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-black hover:text-white">
          Créer une mission
        </button>
      </form>
    </div>
  </section>
</template>