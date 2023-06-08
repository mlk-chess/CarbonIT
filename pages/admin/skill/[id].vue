<script setup>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "admin"
});
useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "admin"
});

const route = useRoute();
const id = route.params.id;
const supabase = useSupabaseClient();
const skills = ref([]);
const currentSkills = ref([]);
const search = ref('');
const skillId = ref(null);
const level = ref('Débutant');
const showModal = ref(false);

onMounted(async () => {
  getUserSkills();
});

async function getUserSkills(value) {
  const {data, error} = await supabase
      .from('user_skill')
      .select('skill_id, level, skill:skill_id(title)')
      .eq('user_id', id)
  currentSkills.value = data;
}

async function getSkill(value) {
  const {data, error} = await supabase
      .from('skill')
      .select()
      .ilike('title', `%${value.toLowerCase()}%`)
      .range(0, 5);

  skills.value = data;
}

watch(search, async (newSearch) => {
  if (newSearch.length > 1) {
    getSkill(newSearch)
  } else {
    skills.value = []
  }
});

async function addSkill() {
  skills.value = [];

  await $fetch('/api/skill/user/new', {
    method: 'post',
    body: {
      userId: id,
      skillId: skillId.value,
      level: level.value
    }
  });

  getUserSkills();
}

async function deleteSkill(skillId) {
  skills.value = [];

  await $fetch('/api/skill/user/delete', {
    method: 'delete',
    body: {
      userId: id,
      skillId: skillId,
    }
  });

  getUserSkills();
}
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-center w-full mt-16">
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
          <div v-show="skills.length > 0"
               class="absolute w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div v-for="(skill, index) in skills" :key="index">
              <div class="flex justify-between items-center">
                <p>{{ skill.title }}</p>
                <button @click="skillId = skill.id; showModal = true" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                  </svg>
                </button>
              </div>
              <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center mt-12 w-5/12 mx-auto">
        <div v-for="(currentSkill, index) in currentSkills" :key="index">
          <div
              class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">
            {{ currentSkill.skill.title }} <span class="text-base inline-text ml-2">({{currentSkill.level}})</span>
            <button @click="deleteSkill(currentSkill.skill_id)" type="button"
                    class="inline-flex items-center p-0.5 ml-2 text-lg text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                              clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div tabindex="-1" aria-hidden="true" v-show="showModal"
         class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
      <div class="fixed top-0 left-0 right-0 z-40 h-full max-h-full bg-gray-100 opacity-50"></div>
      <div class="relative w-full max-h-full z-50">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-md mt-32">
          <button @click="showModal=false" type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Niveau de la compétence</h3>
            <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner le niveau</label>
            <select v-model="level" id="level" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Confirmé">Confirmé</option>
              <option value="Expert">Expert</option>
            </select>

            <button @click="addSkill(); showModal = false" type="button" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>