<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Nouveau quiz</h2>
        <FormQuiz />
    </div>
</template>

<script>
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "admin"
});
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