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
        <i v-if="userInfos" class="mb-2 ml-5 text-2xl  text-gray-900">{{userInfos[0].firstname }} {{userInfos[0].lastname }}</i>
        </div>
       <hr>

        
        <div class="">
            <div class="flex mt-5 ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Expert :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div v-if="skill.level == 'Expert'" class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>

        <div class="">
            <div class="flex flex-row ">
                <span class=" px-2 py-1 mr-2 text-md font-medium ">Intermédiaire :</span>
                <div v-for="(skill, index) in skills" :key="index">
                        <div v-if="skill.level == 'Intermédiaire'" class=" px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
        </div>
        


          <div class="">
            <div class="flex flex-row ">
                <div class="inline-flex items-center px-2 py-1 mr-2 text-md font-medium ">Débutant :</div>
                <div v-for="(skill, index) in skills" :key="index">
                        <div v-if="skill.level == 'Débutant'" class="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">{{ skill.skill.title }} </div>
                </div> 
            </div>
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

                 <div class="flex justify-end">
                   
                    <NuxtLink href="/goal"
                        class="text-white bg-custom-green font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-black hover:text-white">
                   Voir mes objectifs
                    </NuxtLink>
                </div>

                
            </div>

            <div class="md:w-1/2 bg-custom-white shadow rounded p-5">
                <h5 class="mb-2 text-2xl font-medium text-gray-900">Aptitudes</h5>

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

     const data = await $fetch('/api/goal/getGoalsByUser', {
            method: 'get',
    });
    goals.value = data;

}

async function getUserSkills() {
   const data = await $fetch('/api/skill/user/getAll', {
        method: 'post',
    });

    skills.value = data;


}

onMounted( async () => {
    await getUser();
    await getGoals();
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
