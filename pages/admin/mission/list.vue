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
            <rect opacity="0.2" x="0.143677" y="0.793488" width="61.1036" height="57.4133" rx="28.7067" fill="#E53F49"/>
            <path d="M34.5901 32.37C34.7984 33.2511 34.8045 34.1679 34.6081 35.0517C34.4117 35.9354 34.0178 36.7633 33.456 37.4733C32.8942 38.1832 32.179 38.7568 31.3641 39.1511C30.5491 39.5454 29.6555 39.7502 28.7501 39.75V34.95M34.5901 32.37C36.5 30.9788 38.0537 29.1555 39.1243 27.0491C40.1949 24.9427 40.752 22.6129 40.7501 20.25C38.3874 20.2483 36.0578 20.8055 33.9516 21.8761C31.8454 22.9467 30.0222 24.5003 28.6311 26.41M34.5901 32.37C32.852 33.6413 30.8604 34.5214 28.7501 34.95M28.7501 34.95C28.6471 34.971 28.5431 34.991 28.4391 35.01C27.5319 34.2907 26.7105 33.4692 25.9911 32.562C26.01 32.4578 26.029 32.3538 26.0501 32.25M28.6311 26.41C27.75 26.2016 26.8331 26.1954 25.9492 26.3917C25.0653 26.588 24.2373 26.9818 23.5272 27.5436C22.8171 28.1055 22.2434 28.8207 21.8491 29.6358C21.4547 30.4508 21.25 31.3446 21.2501 32.25H26.0501M28.6311 26.41C27.36 28.1478 26.4789 30.1401 26.0501 32.25M23.8111 34.64C23.1533 35.1292 22.6418 35.789 22.3321 36.548C22.0224 37.307 21.9263 38.1363 22.0541 38.946C22.8639 39.0737 23.6933 38.9774 24.4523 38.6676C25.2113 38.3577 25.8711 37.846 26.3601 37.188M35.5001 27C35.5001 27.3979 35.3421 27.7794 35.0608 28.0607C34.7795 28.342 34.3979 28.5 34.0001 28.5C33.6023 28.5 33.2208 28.342 32.9395 28.0607C32.6582 27.7794 32.5001 27.3979 32.5001 27C32.5001 26.6022 32.6582 26.2207 32.9395 25.9394C33.2208 25.6581 33.6023 25.5 34.0001 25.5C34.3979 25.5 34.7795 25.6581 35.0608 25.9394C35.3421 26.2207 35.5001 26.6022 35.5001 27Z" stroke="#E53F49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
  layout: "user"
});
  import {initFlowbite} from "flowbite";
  const missions = ref(null)
  const skills = ref(null)
  const supabase = useSupabaseClient();

  onMounted( async () => {

     initFlowbite();
     await getMissions();
  })


  async function getMissions(){

    const data = await $fetch('/api/mission/getAll', {
        method: 'get',
    });

  if (data !== 'Error') {
      missions.value = data; 
  }
}

  

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