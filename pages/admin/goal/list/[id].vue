<script setup>

import {initFlowbite} from "flowbite";

  const goals = ref(null)
  
  const title = ref("");
  const description = ref("");
  const status = ref(0);
  const supabase = useSupabaseClient();

  const route = useRoute();
  const id = route.params.id;


  async function saveGoal() {
  await $fetch('/api/goal/new', {
    method: 'post',
    body: {
      title: title.value,
      description: description.value,
      status: status.value,
      id: id
    }
  });

  getGoals();
}

async function getGoals() {
  const { data, error } = await supabase.from('goal').select('*').eq('user_id', id);
  if (error) {
    console.error(error);
  } else {
    goals.value = data;
  }
}

const deleteObjectif = async (goalId) => {
  await $fetch('/api/goal/delete', {
    method: 'delete',
    body: {
      id: goalId
    }
  });
  getGoals();
};

  onMounted( async () => {
    initFlowbite();
    getGoals();
  })
</script>

<template>
  <section>
    <div class="container mx-auto mt-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Titre
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Statut
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(goal, index) in goals" :key="index">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ goal.title }}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ goal.description }}
            </th>
           
            <th v-if="goal.status === 1" scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span
                  class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Validé</span>
            </th>
            <th v-if="goal.status === 2" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span
                  class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Non validé</span>
            </th>

             <th v-if="goal.status === 0" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span
                  class="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">En cours</span>
            </th>



            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex">
              
              <NuxtLink :href="`/admin/goal/edit-${goal.id}/${id}`" class="ml-5 hover:cursor-pointer hover:text-blue-400">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                </svg>
              </NuxtLink>
              

              <button class="ml-5 hover:cursor-pointer hover:text-red-400" @click="deleteObjectif(goal.id)">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                </svg>
              </button>
            </th>
          </tr>
          </tbody>
        </table>
        
      </div>
  
      <button data-modal-target="goal-modal" data-modal-toggle="goal-modal" class="mt-7 text-white bg-custom-red hover:bg-custom-green hover:text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">
        Ajouter un objectif
      </button>
      
      <div id="goal-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="goal-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                  <form v-on:submit.prevent="saveGoal">
                    <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">  
                      <div class="w-full">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objectif</label>
                        <input v-model="title" type="text" name="title" id="title"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Titre de l'objectif" required="">
                      </div>
                      <div class="w-full">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea v-model="description" type="text" name="description" id="description"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Description de l'objectif" required=""></textarea>
                    </div>
                    </div>
                    <button type="submit"
                            class="mt-7 text-white bg-custom-red hover:bg-custom-green hover:text-black focus:ring-4 focus:ring-custom-red font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      Ajouter l'objectif
                    </button>
                    </form>
                </div>
              </div>
          </div>
      </div> 
    </div>
  </section>
</template>