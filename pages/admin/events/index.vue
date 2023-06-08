<template>
<div class="p-3 sm:p-5 md:w-full lg:w-8/12">
        <div class="inline-flex rounded-md shadow-sm mb-5 " role="group">
            <button @click='handleChangeMode("calendar")' type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Calendrier
            </button>
            <button @click='handleChangeMode("list")' type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Liste
            </button>
        </div>


    <div v-if="calendarMode" class="mx-auto">

        <div class="bg-white relative shadow sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <NuxtLink href="/admin/events/new" class="flex items-center justify-center text-white bg-custom-red  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Créer un évènement
                    </NuxtLink>
                  
                </div>
            </div>

            <div class="p-4">
                <FullCalendar :options="calendarOptions" />
            </div>
        </div>
        <div class="shadow rounded  sm:rounded-lg">
            <div v-if="eventsByDate.length == 0" class="w-full mt-10 justify-between items-center bg-white border-b hover:bg-gray-100 mb-5 p-4"><i>Pas d'évènement prévu</i></div>
            <ul class="flex w-full mt-10 justify-between items-center bg-white border-b hover:bg-gray-100 mb-5" v-for="(event, index) in eventsByDate" :key="index">
                <li class="flex flex-col justify-between p-4 md:p-8" >
                    <h5 class="text-xl font-bold tracking-tight text-gray-900">{{ event.title }}</h5>
                    <p class=" text text-gray-500">{{ event.description }}</p>
                    <i class=" text-xs text-gray-500">{{ event.date }}</i>
                </li>
            </ul> 
        </div>
    </div>
    <div v-else class="mx-auto ">

        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <NuxtLink href="/admin/events/new" class="flex items-center justify-center text-white bg-custom-red  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Créer un évènement
                    </NuxtLink>
                  
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-4 py-3">Nom</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" class="px-4 py-3">Date</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    

                        <tr class="border-b dark:border-gray-700" v-for="event in events" :key="event.id">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ event.title }}</th>
                            <td class="px-4 py-3">{{ event.description }}</td>
                            <td class="px-4 py-3 flex items-center justify-end">

                                <NuxtLink :href="`/admin/events/edit-${event.id}`">
                                       <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                </svg>
                                </NuxtLink>
                             

                                <svg @click="deleteEvent(event.id)" fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg> 
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
            
        
        </div>
    </div>
</div>

<div></div>
</template>

<script setup>


import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'
import {initFlowbite} from "flowbite"

definePageMeta({
    middleware: ["auth"],
    layout: "admin"
});


const events = ref()
const eventsByDate = ref([])
const supabase = useSupabaseClient();
const calendarMode = ref(true);

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
    dateClick: handleDateClick,
    height: "400px",
})

async function handleChangeMode(mode){

    switch(mode){
        case "calendar":
            calendarMode.value = true;
            break;
        case "list":
            calendarMode.value = false;
            break;
        default:
            calendarMode.value = true;
    }
}

async function handleDateClick(arg){

    const { data, error } = await supabase.from('event').select().eq('date', arg.dateStr);
    if (error) {
        console.error(error);
    } else {
        eventsByDate.value = data;
    }
}

async function getEvents(){

    const { data, error } = await supabase.from('event').select();
    if (error) {
    console.error(error);
    } else {
    events.value = data;
    }
}



async function deleteEvent(eventId) {
  await $fetch(`/api/event/delete`, {
    method: 'delete',
    body: {
        id: eventId,
    }
  });

  getEvents();
}

onMounted( async () => {

    initFlowbite();
    getEvents();
   
})


</script>