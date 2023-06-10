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
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ma mission actuelle</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-if="mission.status === 1">{{mission.status}}</p>
        </div>
    </a>
    <a href="#" class="w-full flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Avis client</h5>
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
    <ul class="flex w-full mt-10 justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 mb-5" v-for="(mission, index) in missions" :key="index">
      <li class="flex flex-col justify-between p-4 md:p-8" >
        <h5 class="mb-5 text-xl font-bold tracking-tight text-gray-900">{{ mission.title }} | {{mission.company}}</h5>
        <p class="mb-3 font-normal text-gray-700">{{ mission.date_start }} | {{mission.localisation}}</p>
        <p class="mb-3 font-normal text-gray-700">{{ mission.description }}</p>
      </li>
      <div class=" items-center mt-5 pb-5 sm:pr-5" v-if="mission.like == 0">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        </svg>
      </div>
      <div class=" items-center mt-5 pb-5 sm:pr-5" v-if="mission.like == 1">
        <svg fill="#E53F49" color="#E53F49" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        </svg>
      </div>
    </ul> 
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
  import {initFlowbite} from "flowbite";
  const missions = ref(null)
  const skills = ref(null)
  const supabase = useSupabaseClient();

  onMounted( async () => {

     initFlowbite();
      const { data, error } = await supabase.from('mission').select('*');
      if (error) {
      console.error(error);
      } else {
      missions.value = data;
      }
  })

//   onMounted( async () => {

//       const { data, error } = await supabase.from('skill').select('*');
//       if (error) {
//       console.error(error);
//       } else {
//         console.log("data")
//       skills.value = data;
//       }
//   })

</script>