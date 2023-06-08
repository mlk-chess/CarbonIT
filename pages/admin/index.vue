<template>
  <div class="flex gap-2">

    <div class="bg-custom-white w-1/2 shadow p-5 rounded mb-5 mt-5">
      <div class="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeu du jour</h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
           class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
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


    </div>
  </div>

  <div class="flex gap-2">
    <div class="bg-custom-white w-4/12 shadow p-5 rounded">
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent='arg'>
          <p class="overflow-hidden hover:cursor-pointer" @click="showModal = true; dateModal = arg.event">{{ arg.event.title }}</p>
        </template>
      </FullCalendar>
    </div>

    <div class="bg-custom-white w-4/12 shadow p-5 rounded">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actualités</h5>
    </div>

    <div class="bg-custom-white w-4/12 shadow p-5 rounded">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La blagounette</h5>
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
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{{new Date(dateModal.start).toLocaleDateString()}}</h3>
            <h4 class="mb-4 text-lg font-base text-gray-900 dark:text-white">{{dateModal.title}}</h4>
            <p class="mb-4 text-md font-base text-gray-900 dark:text-white">{{dateModal.extendedProps.description}}</p>
          </div>
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


definePageMeta({
  middleware: ["auth-admin"],
  layout: "admin",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "admin"
});
const supabase = useSupabaseClient();
const showModal = ref(false);
const dateModal = ref(null);

const events = ref(null)

async function getEvents() {

  const {data, error} = await supabase.from('event').select();
  if (error) {
    console.error(error);
  } else {
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

onMounted(() => {
  getEvents();
})

</script>