<template>
  <div>
    <h1>Liste des objectifs</h1>
    <ul>
      <li v-for="(goal, index) in goals" :key="index">
        {{ goal.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>

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
