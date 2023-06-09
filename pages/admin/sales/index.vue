<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const customers = ref([]);
const supabase = useSupabaseClient();
const details = ref(false);

onMounted(async () => {
  const {data, error} = await supabase
      .from('customer')
      .select();

  customers.value = data;
});
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="w-full px-4 py-2 text-center lg:px-6">
        <dl class="grid gap-8 mx-auto text-gray-900 md:grid-cols-2 xl:grid-cols-4 dark:text-white">
          <div class="flex flex-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-[#03A89E] dark:text-primary-300" fill="none"
                   stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">3 958 €</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Générés</dd>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-[#3A36DB] dark:text-primary-300" fill="none"
                   stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">60</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Clients actifs</dd>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-pink-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-10 -translate-y-1/2 -translate-x-1/2 text-[#FF69B4] dark:text-primary-300" fill="none"
                   stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1878</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Prospects</dd>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-10 -translate-y-1/2 -translate-x-1/2 text-red-600 dark:text-primary-300" fill="none"
                   stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">70 %</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Objectif atteint</dd>
            </div>
          </div>
        </dl>
      </div>

      <div class="flex justify-between mt-10 items-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Liste des clients</h2>

        <NuxtLink href="/admin/sales/new"
                  class="text-white bg-custom-green hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="button">
          <svg class="w-6 mr-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>
          Ajouter un client
        </NuxtLink>
      </div>

      <div class="grid grid-cols-12 gap-12">
        <div class="mt-10 col-span-12 xl:col-span-9">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Client
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Contact
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Nombre de missions
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Nombre de consultants
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Chiffre d'affaires
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Statut
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Actions
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 320 512">
                        <path
                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                      </svg>
                    </a>
                  </div>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(customer, index) in customers" :key="index"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">
                  {{ customer.name }}
                </td>
                <td class="px-6 py-4">
                  {{ customer.contact }}
                </td>
                <td class="px-6 py-4">
                  10
                </td>
                <td class="px-6 py-4">
                  {{ customer.consultant }}
                </td>
                <td class="px-6 py-4">
                  {{ customer.sales }} €
                </td>
                <td class="px-6 py-4">
                  <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
                </td>
                <td class="px-6 py-4">
                  <NuxtLink :href="`/admin/sales/${customer.id}`" class="hover:cursor-pointer hover:text-blue-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </NuxtLink>

                  <!--              <button @click="details = true" class="hover:cursor-pointer hover:text-blue-400 ml-5">-->
                  <!--                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">-->
                  <!--                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path>-->
                  <!--                </svg>-->
                  <!--              </button>-->
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-3 mt-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">To do list :</h2>
          <p class="font-light text-gray-500 dark:text-gray-400">Ces objectifs sont mis a jours quotidienement </p>

          <div class="w-80 xl:w-full flex flex-row justify-center items-center align-middle bg-custom-white py-3 mt-5 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-red-500 dark:text-primary-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-xl text-gray-700 md:text-2xl">Appels</dt>
              <dt class="mb-2 text-2xl md:text-3xl text-gray-700 font-extrabold">49</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">restants aujourd'hui</dd>
            </div>
          </div>

          <div class="w-80 xl:w-full flex flex-row justify-center items-center align-middle bg-custom-white py-3 mt-5 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-green-500 dark:text-primary-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-xl text-gray-700 md:text-2xl">Mails</dt>
              <dt class="mb-2 text-2xl md:text-3xl text-gray-700 font-extrabold">11</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">restants aujourd'hui</dd>
            </div>
          </div>

          <div class="w-80 xl:w-full flex flex-row justify-center items-center align-middle bg-custom-white py-3 mt-5 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-pink-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-pink-500 dark:text-primary-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-xl text-gray-700 md:text-2xl">Rendez-vous</dt>
              <dt class="mb-2 text-2xl md:text-3xl text-gray-700 font-extrabold">4</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">restants aujourd'hui</dd>
            </div>
          </div>

          <div class="w-80 xl:w-full flex flex-row justify-center items-center align-middle bg-custom-white py-3 mt-5 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-blue-500 dark:text-primary-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-xl text-gray-700 md:text-2xl">Contrat</dt>
              <dt class="mb-2 text-2xl md:text-3xl text-gray-700 font-extrabold">2</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">restants aujourd'hui</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div v-show="details" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1">-->
    <!--      <h5 class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info</h5>-->
    <!--      <button @click="details = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >-->
    <!--        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
    <!--        <span class="sr-only">Close menu</span>-->
    <!--      </button>-->
    <!--      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>-->
    <!--      <div class="grid grid-cols-2 gap-4">-->
    <!--        <a href="#" class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>-->
    <!--        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>