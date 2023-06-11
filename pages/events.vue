<template>
<div class="p-3 sm:p-5 md:w-full lg:w-8/12">
        


    <div class="mx-auto">

        <div class="bg-white relative shadow sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                
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
</div>

<div></div>
</template>

<script setup>


import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'
import {initFlowbite} from "flowbite"

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});

const events = ref()
const eventsByDate = ref([])
const supabase = useSupabaseClient();


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



async function handleDateClick(arg){

     const data = await $fetch('/api/event/getByDate?date=' + arg.dateStr, {
        method: 'get',
    });
    if (data !== 'Error') {
        eventsByDate.value = data;
    }
}

async function getEvents(){

    const data = await $fetch('/api/event/getAll', {
        method: 'get',
    });

  if (data !== 'Error') {
      events.value = data; 
  }
}


onMounted( async () => {

    initFlowbite();
    getEvents();
   
})


</script>