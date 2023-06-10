<template>
 <section class="">
        <div class="bg-custom-white shadow rounded p-5">
            <div class="flex">
                <div class=" mb-5 rounded-lg">
                <div class="h-20 w-20 rounded-full border overflow-hidden">
                    <img
                    src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                    alt="Avatar"
                    class="h-full w-full"
                    />
                </div>
            </div>
            <i  class="mb-2 ml-5 text-2xl  text-gray-900">{{firstname }} {{name}}</i>
        </div>
       <hr>

        
        <div class="">
            <div class="flex mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Expert :</div>
                <div v-for="(skill, index) in currentSkills" :key="index">
                        <div v-if="skill.level == 'Expert'" class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

        <div class="">
            <div class="flex flex-row ">
                <span class=" px-2 py-1 mr-2 text-md font-medium ">Intermédiaire :</span>
                <div v-for="(skill, index) in currentSkills" :key="index">
                        <div v-if="skill.level == 'Intermédiaire'" class=" px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>
        


          <div class="">
            <div class="flex flex-row ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Débutant :</div>
                <div v-for="(skill, index) in currentSkills" :key="index">
                        <div v-if="skill.level == 'Débutant'" class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
            </div>

        <div class="flex justify-end">
            <button 
                  class="text-white bg-custom-green font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-black hover:text-white">
            Ajouter
          </button>
        </div>

        </div>
            
         
        <div class="md:flex md:gap-10 mt-12">
            <div class="md:w-1/2 bg-custom-white shadow rounded p-5">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900">Ca carbonne, ça charbonne !</h5>
                
                <div class="grid md:grid-cols-2">
                    <div v-for="(goal, index) in goals" :key="index" class="p-2 bg-custom-white shadow border border-custom-green rounded mx-1 mt-2">
                        <h5 class="mb-2 text-xl font-medium">{{goal.title}}</h5>
                        <div class="">
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">En cours</span>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{goal.description}}</p>
                        </div>
                    </div>
                </div>

                 <div class="flex mt-2 justify-end">
                   
                    <button @click="showModal = true"
                        class="text-white bg-custom-green font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-black hover:text-white">
                   Ajouter
                    </button>
                </div>
                
            </div>

            <div class="md:w-1/2 bg-custom-white shadow rounded p-5">
                <h5 class="mb-2 text-2xl font-medium text-gray-900">Aptitudes</h5>

                <div class="flex flex-row ">
                    <div v-for="(skill, index) in currentSkills" :key="index">
                        <div v-if="skill.skill.status == 0"
                            class="mt-2 inline-flex items-center px-1 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
                            {{ skill.skill.title }}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


<!-- MODAL -->
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
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Compétence</h3>
         
             <input v-model="search" type="search" id="default-search"
                   class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                   placeholder="Java, PHP, React..." required>

            <div v-show="skills.length > 0" class=" w-full p-6 bg-white rounded-lg shadow ">
                <div v-for="(skill, index) in skills" :key="index">
                <div class="flex justify-between items-center">
                    <p>{{ skill.title }}</p>
                    <button type="button" @click="skillId = skill.id; showModalLevel = true; showModal=false"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 mr-2 mb-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                    </button>
                </div>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                </div>
            </div>

            <div class="flex  mt-12 w-5/12">
                <div v-for="(currentSkill, index) in currentSkills" :key="index">
                    <div
                        class="inline-flex px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
                    {{ currentSkill.skill.title }} <span class="text-xs inline-text ml-2">({{currentSkill.level}})</span>
                    
                    </div>
             </div>
      </div>

          
          </div>
        </div>
      </div>
    </div>


     <div tabindex="-1" aria-hidden="true" v-show="showModalLevel"
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
              <option value="Expert">Expert</option>
            </select>

            <button @click="addSkill(); showModalLevel = false" type="button" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  
</section>
    
</template>
<script setup>



const route = useRoute();
const router = useRouter();
const id = route.params.id;
const supabase = useSupabaseClient();
const firstname = ref("");
const name = ref("");


const currentSkills = ref([])
const skills = ref([])
const goals = ref(null)
const search = ref('');
const showModal = ref(false)
const showModalLevel = ref(false)
const skillId = ref(null);
const level = ref('Débutant');

onMounted(async () => {
  await getUser();
  getUserSkills();
  getGoals();
});


const getGoals = async() => {

     const data = await $fetch('/api/goal/getGoalsByUser?id=' + id, {
            method: 'get',
    });
    goals.value = data;

}

async function getUser() {
  const data = await $fetch('/api/user/getOne?id=' + id, {
    method: 'get',
  });

  if (data !== 'Error') {
        name.value = data[0].lastname;
        firstname.value = data[0].firstname;
  }
}

async function getUserSkills() {
   const data = await $fetch('/api/skill/user/getAll?id='+id, {
        method: 'post',
    });

    currentSkills.value = data;
}

watch(search, async (newSearch) => {

  if (newSearch.length > 1) {
    getSkill(newSearch)
  }else{
      skills.value = [];
  }
});


async function getSkill(value) {
  
    const data = await $fetch('/api/skill/getSkillBySearch?search='+value, {
        method: 'get',
    });

  skills.value = data;
}

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



useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});


definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});
</script>