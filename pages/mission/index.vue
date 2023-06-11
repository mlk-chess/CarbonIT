<template>

<div class="container mx-auto py-8 bf">
  <ul class="flex mb-5">
    <li class="mr-6">
        <a class="text-bold text-2xl hover:text-custom-green" href="/mission">Mes missions</a>
    </li>
    <li class="mr-6">
        <a class="text-bold text-2xl hover:text-custom-green" href="/mission/discover">Découvrir les missions</a>
    </li>
  </ul> <hr/>
  <div class="flex flex-row w-full justify-between mt-8">
    <a href="#" class="w-full flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ma mission actuelle</h5>

             <div class="">

                  <div v-if="currentMission.length > 0">

                    <div
                        class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white">{{currentMission[0].mission.title}} | {{currentMission[0].mission.customer.name}}</h5>
                      <h5 class="mb-2 text-lg  text-xs tracking-tight text-gray-900 dark:text-white">{{currentMission[0].mission.date_start}} - {{currentMission[0].mission.date_end}}</h5>
                      <p class="font-normal text-sm text-gray-700 dark:text-gray-400">{{currentMission[0].mission.description}}</p>
                    </div>

                  </div>

                  <div v-else>
                      Aucune mission

                  </div>
                    
                </div>
        </div>
    </a>
    <a href="#" class="w-full flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Avis client</h5>
            <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 cursor-pointer text-yellow-400"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 cursor-pointer text-yellow-400"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 cursor-pointer text-yellow-400"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 cursor-pointer text-yellow-400"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 cursor-pointer text-gray-300 dark:text-gray-500"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
        </div>
        </div>
    </a>
    
  </div>
  
  </div>
  <div class="flex flex-row mt-12 gap-2 justify-between">

    

    <div class="ml-24 w-full h-96 p-5 rounded mb-5">

      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h5>
      <div>
          <div>
            <div class="grid grid-cols-4 ml-14 mt-10">
              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>
            </div>
            <div class="grid grid-cols-4 ml-14 mt-10">
              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>

              <div
                  class="w-fit px-14 py-8 shadow rounded bg-custom-white flex justify-center hover:cursor-pointer hover:bg-custom-green hover:scale-110 duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>
            </div>
          </div>
      </div>


    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});


async function getCurrentMission() {
  const data = await $fetch('/api/mission/getMissionCurrent?id=' + id, {
    method: 'get',
  });

  

  if (data !== 'Error') {
      currentMission.value = data;
  }
}


definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
  import {initFlowbite} from "flowbite";
  
  const currentMission = ref([])
  const skills = ref(null)
  const supabase = useSupabaseClient();

  onMounted( async () => {
    initFlowbite();
    getCurrentMission();
     
  })


</script>