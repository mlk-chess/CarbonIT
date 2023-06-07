<template>

<div class="container mx-auto py-8 bf">
  <ul class="flex mb-5">
    <li class="mr-10">
        <a class="text-bold text-2xl hover:text-custom-red" href="#">Overview</a>
    </li>
    <li class="mr-10">
        <a class="text-bold text-2xl hover:text-custom-red" href="#">Créer une mission</a>
    </li>
  </ul> <hr/>
  <div class="flex flex-row mt-8">
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0.515137 29.5001C0.515137 13.6459 13.3675 0.793457 29.2218 0.793457H32.9121C48.7664 0.793457 61.6188 13.6459 61.6188 29.5001V29.5001C61.6188 45.3544 48.7664 58.2068 32.9121 58.2068H29.2218C13.3675 58.2068 0.515137 45.3544 0.515137 29.5001V29.5001Z" fill="#E53F49"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5644 20.4086C35.2057 20.4086 35.846 20.4938 36.4548 20.6861C40.2059 21.8344 41.5576 25.7098 40.4285 29.0972C39.7882 30.8282 38.7414 32.408 37.3704 33.6988C35.408 35.4882 33.2544 37.0766 30.9363 38.445L30.6822 38.5895L30.418 38.4354C28.0917 37.0766 25.926 35.4882 23.9452 33.6893C22.5834 32.3984 21.5356 30.8282 20.8851 29.0972C19.7367 25.7098 21.0884 21.8344 24.8802 20.666C25.1749 20.5703 25.4788 20.5033 25.7837 20.466H25.9056C26.1912 20.4268 26.4748 20.4086 26.7593 20.4086H26.8711C27.5114 20.4268 28.1313 20.532 28.7319 20.7244H28.7919C28.8326 20.7426 28.863 20.7626 28.8834 20.7808C29.108 20.8488 29.3204 20.9253 29.5236 21.0306L29.9098 21.1932C30.0031 21.2401 30.1079 21.3117 30.1984 21.3736C30.2558 21.4128 30.3074 21.4481 30.3468 21.4707C30.3634 21.48 30.3803 21.4892 30.3973 21.4986C30.4844 21.5465 30.5752 21.5963 30.6517 21.6516C31.7808 20.8392 33.1518 20.399 34.5644 20.4086ZM37.2676 27.2977C37.6842 27.2872 38.0399 26.9724 38.0704 26.5695V26.4557C38.1009 25.1151 37.2381 23.9008 35.926 23.4319C35.5094 23.297 35.052 23.5085 34.8996 23.9103C34.7573 24.3122 34.9809 24.7524 35.4077 24.895C36.0592 25.1246 36.4952 25.7284 36.4952 26.3973V26.427C36.4759 26.6461 36.546 26.8576 36.6883 27.0202C36.8305 27.1829 37.044 27.2776 37.2676 27.2977Z" fill="#E53F49"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">110</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions en cours.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0.515137 29.5001C0.515137 13.6459 13.3675 0.793457 29.2218 0.793457H32.9121C48.7664 0.793457 61.6188 13.6459 61.6188 29.5001V29.5001C61.6188 45.3544 48.7664 58.2068 32.9121 58.2068H29.2218C13.3675 58.2068 0.515137 45.3544 0.515137 29.5001V29.5001Z" fill="#E53F49"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5644 20.4086C35.2057 20.4086 35.846 20.4938 36.4548 20.6861C40.2059 21.8344 41.5576 25.7098 40.4285 29.0972C39.7882 30.8282 38.7414 32.408 37.3704 33.6988C35.408 35.4882 33.2544 37.0766 30.9363 38.445L30.6822 38.5895L30.418 38.4354C28.0917 37.0766 25.926 35.4882 23.9452 33.6893C22.5834 32.3984 21.5356 30.8282 20.8851 29.0972C19.7367 25.7098 21.0884 21.8344 24.8802 20.666C25.1749 20.5703 25.4788 20.5033 25.7837 20.466H25.9056C26.1912 20.4268 26.4748 20.4086 26.7593 20.4086H26.8711C27.5114 20.4268 28.1313 20.532 28.7319 20.7244H28.7919C28.8326 20.7426 28.863 20.7626 28.8834 20.7808C29.108 20.8488 29.3204 20.9253 29.5236 21.0306L29.9098 21.1932C30.0031 21.2401 30.1079 21.3117 30.1984 21.3736C30.2558 21.4128 30.3074 21.4481 30.3468 21.4707C30.3634 21.48 30.3803 21.4892 30.3973 21.4986C30.4844 21.5465 30.5752 21.5963 30.6517 21.6516C31.7808 20.8392 33.1518 20.399 34.5644 20.4086ZM37.2676 27.2977C37.6842 27.2872 38.0399 26.9724 38.0704 26.5695V26.4557C38.1009 25.1151 37.2381 23.9008 35.926 23.4319C35.5094 23.297 35.052 23.5085 34.8996 23.9103C34.7573 24.3122 34.9809 24.7524 35.4077 24.895C36.0592 25.1246 36.4952 25.7284 36.4952 26.3973V26.427C36.4759 26.6461 36.546 26.8576 36.6883 27.0202C36.8305 27.1829 37.044 27.2776 37.2676 27.2977Z" fill="#E53F49"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">40</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions prévues.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0.515137 29.5001C0.515137 13.6459 13.3675 0.793457 29.2218 0.793457H32.9121C48.7664 0.793457 61.6188 13.6459 61.6188 29.5001V29.5001C61.6188 45.3544 48.7664 58.2068 32.9121 58.2068H29.2218C13.3675 58.2068 0.515137 45.3544 0.515137 29.5001V29.5001Z" fill="#E53F49"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5644 20.4086C35.2057 20.4086 35.846 20.4938 36.4548 20.6861C40.2059 21.8344 41.5576 25.7098 40.4285 29.0972C39.7882 30.8282 38.7414 32.408 37.3704 33.6988C35.408 35.4882 33.2544 37.0766 30.9363 38.445L30.6822 38.5895L30.418 38.4354C28.0917 37.0766 25.926 35.4882 23.9452 33.6893C22.5834 32.3984 21.5356 30.8282 20.8851 29.0972C19.7367 25.7098 21.0884 21.8344 24.8802 20.666C25.1749 20.5703 25.4788 20.5033 25.7837 20.466H25.9056C26.1912 20.4268 26.4748 20.4086 26.7593 20.4086H26.8711C27.5114 20.4268 28.1313 20.532 28.7319 20.7244H28.7919C28.8326 20.7426 28.863 20.7626 28.8834 20.7808C29.108 20.8488 29.3204 20.9253 29.5236 21.0306L29.9098 21.1932C30.0031 21.2401 30.1079 21.3117 30.1984 21.3736C30.2558 21.4128 30.3074 21.4481 30.3468 21.4707C30.3634 21.48 30.3803 21.4892 30.3973 21.4986C30.4844 21.5465 30.5752 21.5963 30.6517 21.6516C31.7808 20.8392 33.1518 20.399 34.5644 20.4086ZM37.2676 27.2977C37.6842 27.2872 38.0399 26.9724 38.0704 26.5695V26.4557C38.1009 25.1151 37.2381 23.9008 35.926 23.4319C35.5094 23.297 35.052 23.5085 34.8996 23.9103C34.7573 24.3122 34.9809 24.7524 35.4077 24.895C36.0592 25.1246 36.4952 25.7284 36.4952 26.3973V26.427C36.4759 26.6461 36.546 26.8576 36.6883 27.0202C36.8305 27.1829 37.044 27.2776 37.2676 27.2977Z" fill="#E53F49"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">80</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions terminées.</p>
        </div>
    </a>
  </div>
    <form class="flex items-center mt-10">   
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher..." required>
        </div>
        <div class="flex items-center justify-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-custom-green hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filtrer
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
      Compétences
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          <!-- {{skill.title}}  -->
        </label>
      </li>
    </ul>
  </div>
  
</div>
    </form>

    <ul class="flex w-full mt-10 justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 mb-5" v-for="(mission, index) in missions" :key="index">
      <li class="flex flex-col justify-between p-4 md:p-8" >
        <h5 class="mb-5 text-xl font-bold tracking-tight text-gray-900">{{ mission.title }} | {{mission.company}}</h5>
        <p class="mb-3 font-normal text-gray-700">{{ mission.date_start }} | {{mission.localisation}}</p>
        <p class="mb-3 font-normal text-gray-700">{{ mission.description }}</p>
      </li>
      <div class=" items-center mt-5 pb-5 sm:pr-5">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
        </svg>
      </div>
    </ul> 
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "admin"
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