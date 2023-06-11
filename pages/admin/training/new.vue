<script setup>

definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const title = ref("");
const description = ref("");
const dateTraining = ref(null);
const timeTraining = ref(null);
const router = useRouter()


async function saveTraining() {
    
  await $fetch('/api/training/new', {
    method: 'post',
    body: {
      title: title.value,
      description: description.value,
      dateTraining : dateTraining.value,
      timeTraining : timeTraining.value
    }
  });

   await router.push('/admin/training');
}
</script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Créer une formation</h2>

      <form v-on:submit.prevent="saveTraining">
        <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input v-model="title" type="text" name="title" id="title"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nom" required="">
          </div>
          <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="description" type="text" name="description" id="description"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="description" required=""></textarea>
          </div>

          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input v-model="dateTraining" type="date" 
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required="">
          </div>

           <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heure</label>
            <input v-model="timeTraining" type="time" name="" id=""
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required="">
          </div>
        
        </div>
        <button type="submit"
                class="text-white bg-custom-green mt-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-black hover:text-white">
          Créer
        </button>
      </form>
    </div>
  </section>
</template>