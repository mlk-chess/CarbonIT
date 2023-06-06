<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Créer un objectif</h2>
      <form v-on:submit.prevent="saveGoal">
        <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
           
          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objectif</label>
            <input v-model="title" type="text" name="title" id="title"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Titre de l'objectif" required="">
          </div>
          <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="description" type="text" name="description" id="description"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Description de l'objectif" required=""></textarea>
          </div>

        </div>
        <button type="submit"
                class="mt-7 text-white bg-custom-red hover:bg-custom-green focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Ajouter
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>

const title = ref("");
const description = ref("");
const status = ref(0);
const supabase = useSupabaseClient();

async function saveGoal() {
  await $fetch('/api/goal/new', {
    method: 'post',
    body: {
      title: title.value,
      description: description.value,
      status: status.value,
    }
  });
}
</script>