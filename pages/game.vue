<template>
    <section>
        <ol class="flex items-center w-full mb-4 sm:mb-5 bg-custom-white p-4 rounded shadow">
           <li :class="{'flex w-full items-center relative after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block group' : points >=0}">
                <span :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0': points >= 0}">
                    <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
                </span>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block dark:after:border-gray-700': points >= 500, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 500}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 shrink-0' : points >= 500, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0' : points < 500}">
                      <img class="mx-auto" src="@/assets/icons/creature-step2.svg">
                </div>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green  after:border-4 after:inline-block': points >= 1000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 1000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0':points >= 1000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<1000}">
                     <img class="mx-auto" src="@/assets/icons/creature-step3.svg">
                </div>
            </li>

             <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block':points >= 5000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 5000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0': points >= 5000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<5000}">
                     <img class="mx-auto" src="@/assets/icons/creature-step4.svg">
                </div>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block':points >= 10000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 10000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0': points >= 10000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<10000}">
                    <img class="mx-auto" src="@/assets/icons/creature-step5.svg">
                </div>
            </li>

            <li class="mx-5 w-full flex flex-col">
                <i class="font-bold">XP : {{points}}</i>
                <i class="font-bold">Coins : {{coins}}</i>
            </li>
        </ol>
    <div class="flex">
    <div class="mt-10 md:w-1/2 px-4 ">

      <div class="" v-for="(task, index) in tasks" :key="index">
        <ul class="flex w-full justify-between items-center border bg-custom-black text-custom-white rounded-lg shadow md:flex-row mb-5">
          <li class="flex flex-col justify-between p-4 md:p-8">
            <i class="">{{task.task.name}}</i>
          </li>
          <div class=" items-center mt-5 pb-5 sm:pr-5">
            <div class="w-10 p-7 h-10 rounded-full bg-custom-white lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg v-if="task.status" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 -translate-y-1/2 -translate-x-1/2 text-custom-green dark:text-primary-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>

            </div>
          </div>
        </ul>


      </div>
    </div>

    <div class="mt-10 md:w-1/2 p-4 bg-white shadow flex flex-wrap gap-2"> 

    
    
      <div @click="modal=true; goodies = 1" :class="{'block p-4 bg-custom-green flex flex-col rounded-lg shadow': coins >= 500, 'block p-4 bg-custom-grey flex flex-col rounded-lg shadow': coins < 500  }">
        <svg fill="none" class="w-10 self-center" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
        </svg>
        <h5 class="mb-2 font-medium text-white">Pims Carbon</h5>
        <h5 class="mb-2 text-xs text-center font-medium text-white">500 coins</h5>
      </div>

          <div @click="modal=true; goodies = 2" :class="{'block p-4 bg-custom-green flex flex-col rounded-lg shadow': coins >= 2500, 'block p-4 bg-custom-grey flex flex-col rounded-lg shadow': coins < 2500  }">
        <svg fill="none" class="w-10 self-center" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
        </svg>
        <h5 class="mb-2 font-medium text-white">Un carnet</h5>
        <h5 class="mb-2 text-xs text-center font-medium text-white">2500 coins</h5>
      </div>

  
        <div @click="modal=true; goodies = 3" :class="{'block p-4 bg-custom-green flex flex-col rounded-lg shadow': coins >= 5000, 'block p-4 bg-custom-grey flex flex-col rounded-lg shadow': coins < 5000  }">
        <svg fill="none" class="w-10 self-center" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
        </svg>
        <h5 class="mb-2 font-medium text-white">Une tasse</h5>
        <h5 class="mb-2 text-xs text-center font-medium text-white">5000 coins</h5>
      </div>

        <div @click="modal=true; goodies = 4" :class="{'block p-4 bg-custom-green flex flex-col rounded-lg shadow': coins >= 7500, 'block p-4 bg-custom-grey flex flex-col rounded-lg shadow': coins < 7500  }">
        <svg fill="none" class="w-10 self-center" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
        </svg>
        <h5 class="mb-2 font-medium text-white">Une gourde</h5>
        <h5 class="mb-2 text-xs text-center font-medium text-white">7500 coins</h5>
      </div>

        <div @click="modal=true; goodies = 5" :class="{'block p-4 bg-custom-green flex flex-col rounded-lg shadow': coins >= 10000, 'block p-4 bg-custom-grey flex flex-col rounded-lg shadow': coins < 10000  }">
        <svg fill="none" class="w-10 self-center" stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
        </svg>
        <h5 class="mb-2 font-medium text-white">Sac The North Face X Carbon</h5>
        <h5 class="mb-2 text-xs text-center font-medium text-white">10000 coins</h5>
      </div>

  
    </div>
    </div>



      <div tabindex="-1" aria-hidden="true" v-show="modal"
           class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="fixed top-0 left-0 right-0 z-40 h-full max-h-full bg-gray-400 opacity-50"></div>
        <div class="relative w-full max-h-full z-50">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-xl mt-32">
            <button @click="modal=false" type="button"
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
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Voulez-vous acheter ce produit avec vos coins ? </h3>
              <button @click="modal = false; buyGoodies()" type="button" class="text-white bg-custom-green focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Oui, je le veux !
              </button>
              <button @click="modal = false" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Non, annuler</button>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>

</style>

<script setup>

import {initFlowbite} from 'flowbite';

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const tasks = ref([]);
const modal = ref(false);
const goodies = ref(null);

const points = ref(0);
const coins = ref(0);
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});


async function buyGoodies(){


  if(coins.value > 0){


  if (goodies.value == 1){
    coins.value -= 500
  }

  if (goodies.value == 2){
    coins.value -= 2500
  }

  if (goodies.value == 3){
    coins.value -= 5000
  }

  if (goodies.value == 4){
    coins.value -= 7500
  }

  if (goodies.value == 5){
    coins.value -= 1000
  }

  }


  const data = await $fetch('/api/user/updateCoins', {
      method: 'put',
      body:{
        coins:coins.value
      }
  });


   const dataUser = await $fetch('/api/middleware/get?id=' + user.value.id, {
      method: 'get',
  });

  
  points.value = dataUser[0].points;
}



onMounted(async () => {
  initFlowbite();
  const data = await $fetch('/api/middleware/get?id=' + user.value.id, {
      method: 'get',
  });

  
  points.value = data[0].points;
  coins.value = data[0].coins;

  const tasksData = await $fetch('/api/task/getTaskByUser', {
            method: 'get',
    });
  tasks.value = tasksData;


});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
</script>