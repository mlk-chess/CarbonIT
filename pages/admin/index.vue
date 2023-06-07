<template>
    <div class="w-6/12 shadow p-5 rounded">
        <FullCalendar :options="calendarOptions" />
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
    nowIndicator: false,
})

onMounted( () => {
    getEvents();
})

</script>