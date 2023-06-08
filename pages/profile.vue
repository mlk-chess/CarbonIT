<template>
  <section>
    <ol class="flex items-center w-full mb-4 sm:mb-5 bg-custom-white p-4 rounded shadow">
      <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block dark:after:border-blue-800 group">
                <span
                    class="flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
                </span>
      </li>
      <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
          <img class="mx-auto" src="@/assets/icons/creature-step2.svg">
        </div>
      </li>
      <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
          <img class="mx-auto" src="@/assets/icons/creature-step3.svg">
        </div>
      </li>

      <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
          <img class="mx-auto" src="@/assets/icons/creature-step4.svg">
        </div>
      </li>
      <li class="flex items-center w-full">
        <div
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
          <img class="mx-auto" src="@/assets/icons/creature-step5.svg">
        </div>
      </li>

      <li class="w-full">
        <i class="font-bold">Mes points : {{ points }}</i>
      </li>
    </ol>

    <div class="container mx-auto flex flex-col mt-10">

      <div class="mx-auto md:w-1/2 mt-5" v-for="(task, index) in tasks" :key="index">
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
  </section>
</template>

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
  const {data, error} = await supabase.from('user').select().eq('auth_id', user.value.id);
  points.value = data[0].points;

  const {data: tasksData, error: tasksError} = await supabase.from('user_task').select('*, task:taskId(*)').eq('userId', user.value.id);
  tasks.value = tasksData;

  console.log(tasksData);
});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
</script>