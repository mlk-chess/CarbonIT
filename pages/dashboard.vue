<template>
  <div class="flex gap-2 mb-8">
    <div class="bg-custom-white w-4/12 shadow p-5 rounded">
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent='arg'>
          <p class="overflow-hidden hover:cursor-pointer"
             :class="{'bg-custom-green border-custom-green': arg.event.extendedProps.user_event.length > 0}"
             @click="showModal = true; dateModal = arg.event">
            {{ arg.event.title }}</p>
        </template>
      </FullCalendar>
    </div>

    <div class="bg-custom-white w-4/12 shadow p-5 rounded overflow-y-auto h-[450px]">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actualités</h5>

      <div
          class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>

      <div
          class="block mt-3 w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>

      <div
          class="block mt-3 w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>

    </div>

    <div class="bg-custom-white w-4/12 shadow p-5 rounded">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La blagounette</h5>

      <h4 class="font-normal text-base">{{ blague.joke }}</h4>

      <button data-tooltip-target="tooltip-default" type="button"
              class="mt-10 text-white bg-custom-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Réponse
      </button>
      <div id="tooltip-default" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {{ blague.answer }}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

    </div>

    <div tabindex="-1" aria-hidden="true" v-show="showModal"
         class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="fixed top-0 left-0 right-0 z-40 h-full max-h-full bg-gray-400 opacity-50"></div>
      <div class="relative w-full max-h-full z-50">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-6xl mt-32">
          <button @click="showModal=false" type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div v-if="dateModal" class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {{ new Date(dateModal.start).toLocaleDateString() }}</h3>
            <h4 class="mb-4 text-lg font-base text-gray-900 dark:text-white">{{ dateModal.title }}</h4>
            <p class="mb-4 text-md font-base text-gray-900 dark:text-white">
              {{ dateModal.extendedProps.description }}</p>

            <button v-if="dateModal.extendedProps.user_event.length === 0" @click="join(dateModal.id)" type="button"
                    class="mt-10 text-white bg-custom-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              S'inscrire
            </button>
            <p v-else class="text-sm text-gray-600 italic">
              Vous êtes inscrit à cet évènement
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex gap-2">

    <div class="bg-custom-white w-1/2 shadow p-5 rounded mb-5">
      <div class="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeu de la semaine</h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Découvrez le jeu d'aujourd'hui et tentez de gagner
          des coins !</p>
        <a href="#"
           class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-green rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Participer
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="bg-custom-white w-1/2 shadow p-5 rounded mb-5">

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CarbonAPPs</h5>

      <div class="flex">
        <div
            class="block mt-3 w-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Intranet</h5>
        </div>

        <div
            class="block ml-3 mt-3 w-fit p-6 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Repas</h5>
        </div>

        <div
            class="block ml-3 mt-3 w-fit p-6  px-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">CE</h5>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'
import BlaguesAPI from 'blagues-api';

definePageMeta({
  middleware: ["auth"],
  layout: "user",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const runtimeConfig = useRuntimeConfig()
const showModal = ref(false);
const dateModal = ref(null);
const events = ref(null)
const blague = ref({
  joke: '',
  answer: '',
})

const blagues = new BlaguesAPI(runtimeConfig.public.blagueToken);

async function getEvents() {

  const data = await $fetch('/api/event/getAllUser', {
    method: 'get',
  });

  if (data !== 'Error') {
    events.value = data;
  }
}

const calendarOptions = ref({
  headerToolbar: {
    right: 'prev,next',
    left: 'title',
    center: ''
  },
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: frLocale,
  events: events,
  height: "400px",
})

onMounted(async () => {
  getEvents();
  blague.value = await blagues.random({
    disallow: [
      blagues.categories.DARK,
      blagues.categories.LIMIT,
      blagues.categories.BLONDES,
      blagues.categories.BEAUF,
    ]
  });
});

async function join(id) {
  await $fetch('/api/event/join', {
    method: 'post',
    body: {
      eventId: id,
      userId: user.value.id,
    }
  });

  showModal.value = false;

  getEvents();
}

</script>