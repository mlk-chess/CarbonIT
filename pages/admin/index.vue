<template>
    <div class="flex gap-2">

        <div class="w-1/2 shadow p-5 rounded mb-5 mt-5">
            <div class="">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeu du jour</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>

        <div class="w-1/2 shadow p-5 rounded mb-5">

         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CarbonAPPs</h5>

            
        </div>
    </div>

    <div class="flex gap-2">
        <div class="w-4/12 shadow p-5 rounded">
            <FullCalendar :options="calendarOptions" />
        </div>

         <div class="w-4/12 shadow p-5 rounded">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actualités</h5>
        </div>

         <div class="w-4/12 shadow p-5 rounded">
           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actualités</h5>
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

const supabase = useSupabaseClient();


const events = ref()
const eventsByDate = ref()

async function getEvents(){

     const { data, error } = await supabase.from('event').select();
    if (error) {
    console.error(error);
    } else {
    events.value = data;
    }
}

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: frLocale,
    events: events,
    height: "400px",
})

onMounted( () => {
    getEvents();
})

</script>