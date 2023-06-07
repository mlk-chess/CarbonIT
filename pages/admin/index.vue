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

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: frLocale,
    events: [
        { title: 'Événement 1', start: '2023-06-01' },
        { title: 'Événement 1', start: '2023-06-01' },
        { title: 'Événement 1', start: '2023-06-01' },
        { title: 'Événement 2', start: '2023-06-05' },
        { title: 'Événement 3', start: '2023-06-10' }
    ],
})


</script>