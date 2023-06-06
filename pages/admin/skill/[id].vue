<script setup>
definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const id = route.params.id;
const supabase = useSupabaseClient();
const skills = ref([]);
const search = ref('');

async function getSkill(value) {
  const {data, error} = await supabase
      .from('skill')
      .select()
      .ilike('title', `%${value.toLowerCase()}%`)
      .range(0, 5);

  console.log(data)

  skills.value = data;
}

watch(search, async (newSearch) => {
  if (newSearch.length > 1) {
    getSkill(newSearch)
  }else {
    skills.value = []
  }
})
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-center w-full mt-24">
        <div class="w-5/12 relative">
          <label for="default-search"
                 class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input v-model="search" type="search" id="default-search"
                   class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Java, PHP, React..." required>
          </div>
          <div v-show="skills.length > 0" class="absolute w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div v-for="(skill, index) in skills" :key="index">
              <div class="flex justify-between items-center">
                <p>{{skill.title}}</p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>