<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Nouveau quiz</h2>
        <FormQuiz />
    </div>
</template>

<script>
import FormQuiz from "~/components/admin/quiz/new/FormQuiz.vue";
export default {
    components: {
        FormQuiz
    },
}
</script>

<style>
@import 'flowbite/dist/flowbite.css';
</style>