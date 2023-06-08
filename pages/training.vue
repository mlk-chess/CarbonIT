<script setup>
import {initFlowbite} from 'flowbite';

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "admin"
});

const mode = ref(true);

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="w-full px-4 py-8 text-center lg:py-5 lg:px-6">
        <dl class="grid gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
          <div class="flex flec-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-blue-600 dark:text-primary-300" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
          <div class="flex flec-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-9 -translate-y-1/2 -translate-x-1/2 text-blue-600 dark:text-primary-300" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
          <div class="flex flec-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-10 -translate-y-1/2 -translate-x-1/2 text-blue-600 dark:text-primary-300"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
          <div class="flex flec-row justify-center items-center align-middle bg-custom-white py-10 rounded">
            <div class="w-10 p-7 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900 -translate-x-1/2">
              <svg class="w-10 -translate-y-1/2 -translate-x-1/2 text-blue-600 dark:text-primary-300"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center items-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
        </dl>
      </div>


      <div class="border-b border-gray-200 dark:border-gray-700 mx-auto w-fit mt-14">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2">
            <span @click="mode = true"
                  class="hover:cursor-pointer inline-flex p-4 border-b-2 rounded-t-lg dark:hover:text-gray-300 group"
                  :class="{'': true, 'border-blue-600 text-blue-600': mode}">
              <svg aria-hidden="true" :class="{'': true, 'text-blue-600': mode}"
                   class="w-5 h-5 mr-2 dark:text-gray-500 dark:group-hover:text-gray-300"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                                                                    clip-rule="evenodd"></path></svg>Mes formations
            </span>
          </li>
          <li class="mr-2">
            <span @click="mode = false"
                  class="hover:cursor-pointer inline-flex p-4 border-b-2 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  :class="{'': true, 'border-blue-600 text-blue-600': !mode}">
              <svg aria-hidden="true" :class="{'': true, 'text-blue-600': !mode}"
                   class="w-5 h-5 mr-2 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"><path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Rechercher une formation
            </span>
          </li>
        </ul>
      </div>

      <div v-show="mode" class="mt-16">
        <div class="grid grid-cols-4 gap-x-12">
          <div class="dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-t-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" alt=""/>
            </a>
            <div class="py-5">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">En cours</span>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                  acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#"
                 class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-t-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" alt=""/>
            </a>
            <div class="py-5">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">En cours</span>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                  acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#"
                 class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-t-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" alt=""/>
            </a>
            <div class="py-5">
              <span
                  class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Terminée</span>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                  acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#"
                 class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-t-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" alt=""/>
            </a>
            <div class="py-5">
              <span
                  class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Terminée</span>
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                  acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#"
                 class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Voir plus
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!mode" class="mt-16">
        <div class="w-6/12 mx-auto relative">
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formation React, UX/UI, Symfony..." required>
          </div>

          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="absolute top-0 -right-5 translate-x-full inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg mt-1 bg-custom-white hover:bg-gray-200 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
          </button>

          <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input id="checkbox-item-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="checkbox-item-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Date</label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input checked id="checkbox-item-5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="checkbox-item-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input id="checkbox-item-6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="checkbox-item-6" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>