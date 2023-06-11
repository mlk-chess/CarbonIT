<template>
<div class="container mx-auto">
<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Toutes les formations</h2>
            <NuxtLink href="/admin/training/new" type="button"
                        class="text-white bg-custom-green hover:bg-green-900 focus:ring-4 focus:ring-green-300 mt-8 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6 focus:outline-none">
                Ajouter une formation
            </NuxtLink>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            
                <table class="w-full text-sm text-left bg-white text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Titre</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" class="px-4 py-3">Date</th>
                            <th scope="col" class="px-4 py-3">Heure</th>
                            <th scope="col" class="px-4 py-3">Statut</th>
                            <th scope="col" class="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700" v-for="training in trainings" :key="training.id">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ training.title }}</th>
                            <td class="px-4 py-3">{{ training.description }}</td>
                            <td class="px-4 py-3">{{ training.date_start }}</td>
                            <td class="px-4 py-3">{{ training.time_start }}</td>
                            <td v-if="training.status === 0" scope="row"
                                    class="px-4 py-3">
                                <span
                                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-blue-300">À venir</span>
                            </td>
                            <td v-if="training.status === 1" scope="row" class="px-4 py-3">
                                <span
                                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">En cours</span>
                            </td>
                            <td v-if="training.status === -1" scope="row" class="px-4 py-3">
                                <span
                                    class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Annulé</span>
                            </td>
                            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex">
             
             
              <button v-if="training.status !== -1" @click="showModal = true; TrainingId=training.id" class="ml-5 hover:cursor-pointer hover:text-red-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                </svg>
              </button>
            </th>
            </tr>
        </tbody>
    </table>
    </div>
    <div tabindex="-1" aria-hidden="true" v-show="showModal"
           class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="fixed top-0 left-0 right-0 z-40 h-full max-h-full bg-gray-400 opacity-50"></div>
        <div class="relative w-full max-h-full z-50">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-xl mt-32">
            <button @click="showModal=false" type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Voulez-vous vraiment annuler cette formation ?</h3>
              <button @click="deleteTraining(); showModal = false" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Oui, je suis sûr
              </button>
              <button @click="showModal = false" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Non, annuler</button>
            </div>
          </div>
        </div>
    </div>
  </div> 
</template>

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

  import {initFlowbite} from "flowbite";
  const trainings = ref(null)
  const supabase = useSupabaseClient();

  const showModal = ref(false);
  const TrainingId = ref(null);
  

  onMounted( async () => {

     initFlowbite();
     await getTrainings();
  })


  async function getTrainings(){

    const data = await $fetch('/api/training/getAll', {
        method: 'get',
    });

  if (data !== 'Error') {
      trainings.value = data; 
  }
}

  async function deleteTraining() {
  
  await $fetch(`/api/training/delete`, {
    method: 'put',
    body: {
        id: TrainingId.value,
    }
  });   

  getTrainings();
}


</script>