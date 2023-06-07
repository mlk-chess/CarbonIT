<template>
    <div class="w-4/12">
        <FullCalendar :options="calendarOptions" />
    </div>
</template>


<style scoped>

</style>
<script setup>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'


const supabase = useSupabaseClient();


const events = ref()

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
    events: events
})

onMounted( () => {
    getEvents();
})

</script>