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
  <div class="flex flex-row w-full mt-8">
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0.515259 29.5002C0.515259 13.6459 13.3677 0.793503 29.2219 0.793503H32.9122C48.7665 0.793503 61.6189 13.6459 61.6189 29.5002C61.6189 45.3544 48.7665 58.2068 32.9122 58.2068H29.2219C13.3677 58.2068 0.515259 45.3544 0.515259 29.5002Z" fill="#282B2A"/>
            <path d="M34.5901 31.37C34.7984 32.2511 34.8045 33.1679 34.6081 34.0517C34.4117 34.9355 34.0178 35.7633 33.456 36.4733C32.8942 37.1832 32.179 37.7568 31.3641 38.1511C30.5491 38.5454 29.6555 38.7502 28.7501 38.75V33.9501M34.5901 31.37C36.5 29.9788 38.0537 28.1555 39.1243 26.0491C40.1949 23.9427 40.752 21.6129 40.7501 19.25C38.3874 19.2483 36.0578 19.8055 33.9516 20.8761C31.8454 21.9467 30.0222 23.5003 28.6311 25.41M34.5901 31.37C32.852 32.6413 30.8604 33.5215 28.7501 33.9501M28.7501 33.9501C28.6471 33.9711 28.5431 33.991 28.4391 34.01C27.5319 33.2907 26.7105 32.4693 25.9911 31.562C26.01 31.4578 26.029 31.3538 26.0501 31.25M28.6311 25.41C27.75 25.2016 26.8331 25.1954 25.9492 25.3917C25.0653 25.588 24.2373 25.9818 23.5272 26.5437C22.8171 27.1055 22.2434 27.8207 21.8491 28.6358C21.4547 29.4509 21.25 30.3446 21.2501 31.25H26.0501M28.6311 25.41C27.36 27.1479 26.4789 29.1401 26.0501 31.25M23.8111 33.64C23.1533 34.1292 22.6418 34.789 22.3321 35.548C22.0224 36.307 21.9263 37.1363 22.0541 37.946C22.8639 38.0738 23.6933 37.9775 24.4523 37.6676C25.2113 37.3577 25.8711 36.8461 26.3601 36.188M35.5001 26C35.5001 26.3979 35.3421 26.7794 35.0608 27.0607C34.7795 27.342 34.3979 27.5 34.0001 27.5C33.6023 27.5 33.2208 27.342 32.9395 27.0607C32.6582 26.7794 32.5001 26.3979 32.5001 26C32.5001 25.6022 32.6582 25.2207 32.9395 24.9394C33.2208 24.6581 33.6023 24.5 34.0001 24.5C34.3979 24.5 34.7795 24.6581 35.0608 24.9394C35.3421 25.2207 35.5001 25.6022 35.5001 26Z" stroke="#282B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">110</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions en cours.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.143677" y="0.793488" width="61.1036" height="57.4133" rx="28.7067" fill="#E53F49"/>
            <path d="M34.5901 32.37C34.7984 33.2511 34.8045 34.1679 34.6081 35.0517C34.4117 35.9354 34.0178 36.7633 33.456 37.4733C32.8942 38.1832 32.179 38.7568 31.3641 39.1511C30.5491 39.5454 29.6555 39.7502 28.7501 39.75V34.95M34.5901 32.37C36.5 30.9788 38.0537 29.1555 39.1243 27.0491C40.1949 24.9427 40.752 22.6129 40.7501 20.25C38.3874 20.2483 36.0578 20.8055 33.9516 21.8761C31.8454 22.9467 30.0222 24.5003 28.6311 26.41M34.5901 32.37C32.852 33.6413 30.8604 34.5214 28.7501 34.95M28.7501 34.95C28.6471 34.971 28.5431 34.991 28.4391 35.01C27.5319 34.2907 26.7105 33.4692 25.9911 32.562C26.01 32.4578 26.029 32.3538 26.0501 32.25M28.6311 26.41C27.75 26.2016 26.8331 26.1954 25.9492 26.3917C25.0653 26.588 24.2373 26.9818 23.5272 27.5436C22.8171 28.1055 22.2434 28.8207 21.8491 29.6358C21.4547 30.4508 21.25 31.3446 21.2501 32.25H26.0501M28.6311 26.41C27.36 28.1478 26.4789 30.1401 26.0501 32.25M23.8111 34.64C23.1533 35.1292 22.6418 35.789 22.3321 36.548C22.0224 37.307 21.9263 38.1363 22.0541 38.946C22.8639 39.0737 23.6933 38.9774 24.4523 38.6676C25.2113 38.3577 25.8711 37.846 26.3601 37.188M35.5001 27C35.5001 27.3979 35.3421 27.7794 35.0608 28.0607C34.7795 28.342 34.3979 28.5 34.0001 28.5C33.6023 28.5 33.2208 28.342 32.9395 28.0607C32.6582 27.7794 32.5001 27.3979 32.5001 27C32.5001 26.6022 32.6582 26.2207 32.9395 25.9394C33.2208 25.6581 33.6023 25.5 34.0001 25.5C34.3979 25.5 34.7795 25.6581 35.0608 25.9394C35.3421 26.2207 35.5001 26.6022 35.5001 27Z" stroke="#E53F49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">40</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions à prévoir.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.1" x="0.809814" y="0.793518" width="61.1036" height="57.4133" rx="28.7067" fill="#00BB7E"/>
            <path d="M34.375 22.7872C33.1968 22.1077 31.8606 21.7502 30.5004 21.7506C29.1403 21.7511 27.8043 22.1095 26.6265 22.7898C25.4488 23.4701 24.4708 24.4484 23.7909 25.6264C23.111 26.8044 22.7531 28.1405 22.7531 29.5006C22.7531 30.8608 23.111 32.1969 23.7909 33.3749C24.4708 34.5529 25.4488 35.5311 26.6265 36.2115C27.8043 36.8918 29.1403 37.2502 30.5004 37.2506C31.8606 37.2511 33.1968 36.8936 34.375 36.2141M21.4584 27.5625H27.9167M21.4584 31.4375H27.9167" stroke="#00BB7E" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M24.0417 18.3116C26.0044 17.1761 28.2325 16.5798 30.5 16.5833C37.6339 16.5833 43.4167 22.3661 43.4167 29.5C43.4167 36.6339 37.6339 42.4167 30.5 42.4167C23.3662 42.4167 17.5834 36.6339 17.5834 29.5C17.5834 27.1479 18.2124 24.9404 19.3116 23.0417" stroke="#00BB7E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">90 214 €</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">CA généré cette année.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <div class="mx-5">
          <svg color="#FFE80C" width="62" height="58" viewBox="0 0 62 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" width="61.1036" height="57.4133" rx="28.7067" fill="#FDF6B2"/>
            <path color="#FFE80C" d="M27.299 20.4304C28.946 17.4768 29.7689 16 31 16C32.2311 16 33.054 17.4768 34.701 20.4304L35.1274 21.1948C35.5954 22.0346 35.8294 22.4545 36.1934 22.7314C36.5574 23.0083 37.0124 23.111 37.9223 23.3164L38.7491 23.5036C41.947 24.2277 43.5447 24.5891 43.9256 25.8124C44.3052 27.0344 43.2158 28.3097 41.0358 30.859L40.4716 31.5181C39.8528 32.2423 39.5421 32.605 39.403 33.0522C39.2639 33.5007 39.3107 33.9843 39.4043 34.9502L39.4901 35.8303C39.819 39.2324 39.9841 40.9328 38.9883 41.6881C37.9925 42.4447 36.495 41.7544 33.5024 40.3764L32.7264 40.0202C31.8762 39.6276 31.4511 39.4326 31 39.4326C30.5489 39.4326 30.1238 39.6276 29.2723 40.0202L28.4989 40.3764C25.505 41.7544 24.0075 42.4434 23.013 41.6894C22.0159 40.9328 22.181 39.2324 22.5099 35.8303L22.5957 34.9515C22.6893 33.9843 22.7361 33.5007 22.5957 33.0535C22.4579 32.605 22.1472 32.2422 21.5284 31.5194L20.9642 30.859C18.7842 28.311 17.6948 27.0357 18.0744 25.8124C18.4553 24.5891 20.0543 24.2264 23.2522 23.5036L24.079 23.3164C24.9876 23.111 25.4413 23.0083 25.8066 22.7314C26.1706 22.4545 26.4046 22.0346 26.8726 21.1948L27.299 20.4304Z" stroke="#FFF16E" stroke-width="1.5"/>
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
            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-green focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher..." required>
            <button  id="dropdownDefault" data-dropdown-toggle="dropdown" type="button" class="w-10 h-10 absolute inset-y-0 right-0 flex items-center pr-3">
                <svg color="gray" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path>
                </svg>
            </button>
        </div>
        <div class="flex items-center justify-center p-4">

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden w-56 p-3 mr-5 bg-white rounded-lg shadow dark:bg-gray-700">
    <h6 class="mb-3 text-sm text-bold font-medium text-gray-900 dark:text-white">
      Compétences
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          PHP
        </label>
      </li>
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Java
        </label>
      </li>
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Javascript
        </label>
      </li>
    </ul>
    <h6 class="mb-3 mt-3 text-sm font-medium text-gray-900 dark:text-white">
      Entreprise
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          PMU
        </label>
      </li>
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Enedis
        </label>
      </li>
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Veepee
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