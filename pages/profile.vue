<template>
    <section>
        <ol class="flex items-center w-full mb-4 sm:mb-5 bg-custom-white p-4 rounded shadow">
           <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-custom-green after:border-4 after:inline-block dark:after:border-blue-800 group">
                <span class="flex items-center justify-center w-10 h-10 bg-custom-green rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
                </span>
            </li>
            <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                      <img class="mx-auto" src="@/assets/icons/creature-step2.svg">
                </div>
            </li>
            <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                     <img class="mx-auto" src="@/assets/icons/creature-step3.svg">
                </div>
            </li>

             <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                     <img class="mx-auto" src="@/assets/icons/creature-step4.svg">
                </div>
            </li>
            <li class="flex items-center w-full">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                    <img class="mx-auto" src="@/assets/icons/creature-step5.svg">
                </div>
            </li>

            <li class="w-full">
                <i class="font-bold">Mes points : {{points}}</i>
            </li>
        </ol>

        <div class="container mx-auto flex">

            <div class="mx-auto md:w-1/2 mb-4 mt-10">
                <ul class="flex w-full justify-between items-center border bg-custom-black text-custom-white rounded-lg shadow md:flex-row mb-5">
                    <li class="flex flex-col justify-between p-4 md:p-8" >
                       <i class="">Atteindre le level 5</i>
                    </li>
                    <div class=" items-center mt-5 pb-5 sm:pr-5">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                        </svg>
                    </div>
                </ul> 

                
            </div>
        </div>
    </section>
</template>

<script setup>

import {initFlowbite} from 'flowbite';
const supabase = useSupabaseClient();
const user = useSupabaseUser()

const points = ref(0);
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

onMounted( async () => {
    initFlowbite();
    const { data, error } = await supabase.from('user').select().eq('auth_id',user.value.id);
    points.value = data[0].points;

  const { data: tasksData, error: tasksError } = await supabase.from('user_task').select().eq('auth_id',user.value.id);


})

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
</script>