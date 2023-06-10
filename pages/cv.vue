<template>
    <section class="">
        
       <i v-if="userInfos" class="mb-2 text-2xl font-bold text-gray-900">{{userInfos[0].firstname }} {{userInfos[0].lastname }}</i>

        <form v-on:submit.prevent="" class="mt-4">
            <div class="md:w-1/2">
                <input v-model="bio" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Biographie..." required=""/>
            </div>
        </form>

        
        <div class="">
            <div class="flex mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Expert :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

        <div class="">
            <div class="flex flex-row ">
                <span class=" px-2 py-1 mr-2 text-md font-medium ">Intermédiaire :</span>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class=" px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>
        


          <div class="">
            <div class="flex flex-row ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Débutant :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>
         
        <div class="md:flex md:gap-10 mt-12">
            <div class="md:w-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ca carbonne, ça charbonne !</h5>
                
                <div class="grid md:grid-cols-2">
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
                <h5 class="mb-2 text-2xl font-bold text-gray-900">Aptitudes</h5>

                <div class="flex flex-row ">
                    <div v-for="(skill, index) in skills" :key="index">
                        <div v-if="skill.skill.status == 0"
                            class="mt-2 inline-flex items-center px-1 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
                            {{ skill.skill.title }}
                            
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
    const data = await $fetch('/api/middleware/get?id=' + user.value.id, {
            method: 'get',
    });

  if (data !== 'Error') {
      userInfos.value = data;
  }


}

const getGoals = async() => {

   
    const {data, error} = await supabase.from('goal').select().eq('user_id', userInfos.value[0].id).limit(4);
    goals.value = data;

}

async function getUserSkills() {
  const {data, error} = await supabase
      .from('user_skill')
      .select('skill_id, level, skill:skill_id(title, status)')
      .eq('user_id', userInfos.value[0].id)
    

    skills.value = data;




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
