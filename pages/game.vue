<template>
    <section>
        <ol class="flex items-center w-full mb-4 sm:mb-5 bg-custom-white p-4 rounded shadow">
           <li :class="{'flex w-full items-center relative after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block group' : points >=0}">
                <span :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0': points >= 0}">
                    <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
                </span>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700': points >= 500, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 500}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 shrink-0' : points >= 500, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0' : points < 500}">
                      <img class="mx-auto" src="@/assets/icons/creature-step2.svg">
                </div>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-gray-100 after:border-4 after:inline-block': points >= 1000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 1000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0':points >= 1000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<1000}">
                     <img class="mx-auto" src="@/assets/icons/creature-step3.svg">
                </div>
            </li>

             <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-gray-100 after:border-4 after:inline-block':points >= 5000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 5000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0': points >= 5000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<5000}">
                     <img class="mx-auto" src="@/assets/icons/creature-step4.svg">
                </div>
            </li>
            <li :class="{'flex w-full items-center after:w-full after:h-1 after:border-b after:border-custom-green after:border-gray-100 after:border-4 after:inline-block':points >= 10000, 'flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700' : points < 10000}">
                <div :class="{'flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0': points >= 10000, 'flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0': points<10000}">
                    <img class="mx-auto" src="@/assets/icons/creature-step5.svg">
                </div>
            </li>

            <li class="mx-2 w-full">
                <i class="font-bold">Mes points : {{points}}</i>
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

    <div class="mt-10 md:w-1/2 p-4 bg-white"> 
    
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

const points = ref(0);
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

onMounted(async () => {
  initFlowbite();
  const data = await $fetch('/api/middleware/get?id=' + user.value.id, {
      method: 'get',
  });

  
  points.value = data[0].points;

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