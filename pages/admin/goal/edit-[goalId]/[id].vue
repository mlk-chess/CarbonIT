<template>
    <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Modifier l'objectif</h2>
      <form v-on:submit.prevent="editGoal">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objectif</label>
            <input v-model="title" type="text" name="title" id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Titre de l'objectif" required="">
          </div>
          <div class="sm:col-span-2">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="description" type="text" name="description" id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Description du nouvel objectif" required=""></textarea>
          </div>
          <div>
            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Statut</label>
            <select v-model="status" id="status"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-red focus:border-custom-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option selected value="1">Validé</option>
              <option value="0">En cours</option>
              <option value="2">Non validé</option>
            </select>
          </div>
        </div>
        <button type="submit" @click="editGoal(goal.id)"
                class="mt-7 text-white bg-custom-red hover:bg-custom-green hover:text-black focus:ring-4 focus:ring-custom-red font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Modifier
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

const route = useRoute();
const id = route.params.id;
const goalId = route.params.goalId;


async function editGoal() {
  await $fetch('/api/goal/edit', {
    method: 'put',
    body: {
    title: title.value,
    description: description.value,
    status: status.value,
    idUser: id,
    idGoal: goalId
    }
  });
}

</script>
