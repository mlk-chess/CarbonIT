<template>

<div class="container mx-auto py-8">
    <ul class="flex w-full justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 mb-5" v-for="(goal, index) in goals" :key="index">
      <li class="flex flex-col justify-between p-4 md:p-8" >
        <h5 class="mb-5 text-xl font-bold tracking-tight text-gray-900">{{ goal.title }}</h5>
        <p class="mb-3 font-normal text-gray-700">{{ goal.description }}</p>
      </li>
      <div class=" items-center mt-5 pb-5 sm:pr-5">
        <p v-if="goal.status == 0" class="mb-3 italic text-gray-500">En cours</p>
        <p v-if="goal.status == 1" class="mb-3 italic text-gray-500">Validé</p>
        <p v-if="goal.status == 2" class="mb-3 italic text-gray-500">Non validé</p>
      </div>
    </ul> 
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});
  const goals = ref(null)
  const supabase = useSupabaseClient();

  onMounted( async () => {

      const { data, error } = await supabase.from('goal').select('*');
      if (error) {
      console.error(error);
      } else {
      goals.value = data;
      }
  })

</script>
