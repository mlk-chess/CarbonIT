<template>
    <section class="px-14">
       <i v-if="userInfos" class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{userInfos[0].firstname }} {{userInfos[0].lastname }}</i>

        <form v-on:submit.prevent="" class="mt-4">
            <div class="w-1/2">
                <input v-model="bio" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Biographie..." required=""/>
                <button type="submit" class="mt-2 text-white bg-custom-green hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sauvegarder</button>
            </div>
        </form>

        <div class="w-1/2">
            <div class="flex flex-row mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium ">Expert :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

        <div class="w-1/2">
            <div class="flex flex-row mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium ">Intermédiaire :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

         <div class="w-1/2">
            <div class="flex flex-row mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium ">Expert :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

          <div class="w-1/2">
            <div class="flex flex-row mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium ">Débutant :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>
         
        <div class="md:flex mt-12">
            <div class="md:w-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ca carbonne, ça charbonne !</h5>
                
                <div class="grid grid-cols-2">
                    <div v-for="(goal, index) in goals" :key="index" class="p-2 bg-custom-white shadow rounded mx-1 mt-2">
                        <h5 class="mb-2 text-xl font-medium">{{goal.title}}</h5>
                        <div class="">
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">En cours</span>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{goal.description}}</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="md:w-1/2 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Soft Skill !</h5>

                <div class="flex flex-row mt-12 ">
                    <div v-for="(skill, index) in skills" :key="index">
                        <div
                            class="inline-flex items-center px-2 py-1 mr-2 text-xl font-medium bg-indigo-100 text-indigo-800 rounded">
                            {{ skill.skill.title }} <span class="text-base inline-text ml-2">({{skill.level}})</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</section>
    

</template>

<script setup>

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const goals = ref([])
const userInfos = ref()
const skills = ref()


const getUser = async() => {
      const {data, error} = await supabase.from('user').select().eq('auth_id', user.value.id);
      userInfos.value = data;


}

const getGoals = async() => {

   
    const {data, error} = await supabase.from('goal').select().eq('user_id', userInfos.value[0].id).limit(4);
    goals.value = data;

}

async function getUserSkills() {
  const {data, error} = await supabase
      .from('user_skill')
      .select('skill_id, level, skill:skill_id(title)')
      .eq('user_id', userInfos.value[0].id)
    

    skills.value = data;

    console.log(data)



}

onMounted( async () => {
    await getUser();
    getGoals();
    getUserSkills();
})

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});


definePageMeta({
  middleware: ["auth"],
  layout: "user"
});

</script>
