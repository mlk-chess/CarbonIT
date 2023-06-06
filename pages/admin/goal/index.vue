<template>
  <div>
    <h1>Liste des goals</h1>
    <ul>
      <li v-for="(goal, index) in goals" :key="index">
        {{ goal }}
      </li>
    </ul>
  </div>
</template>

<script setup>

  const goals = ref(null)

  onMounted( async () => {

      const { data, error } = await supabase.from('goals').select('*');
      if (error) {
      console.error(error);
      } else {
      goals.value = data;
      }
  })

</script>
