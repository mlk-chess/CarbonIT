<template>
    <div class="mx-auto">
        <FormQuiz />
    </div>
</template>

<script>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});
import FormQuiz from "~/components/admin/quiz/new/FormQuiz.vue";
export default {
    components: {
        FormQuiz
    },
}
</script>