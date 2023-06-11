<template>
<div class=" rounded p-5">
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
</div>
<div class="flex flex-row w-full justify-center mt-8">
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_84_237)">
            <path d="M13.488 20.417H0.856445V16.6276C0.856445 13.217 7.55118 11.5749 10.9617 11.5749C12.8564 11.5749 15.888 12.0802 18.1617 13.217C17.1512 13.596 16.3933 14.1012 15.6354 14.7328C14.2459 14.2276 12.6038 13.9749 10.9617 13.9749C7.17223 13.9749 3.25645 15.8697 3.25645 16.6276V18.017H13.7407C13.6143 18.5223 13.488 19.1539 13.488 19.7855V20.417ZM24.8564 19.7855C24.8564 22.1855 22.8354 24.2065 20.4354 24.2065C18.0354 24.2065 16.0143 22.1855 16.0143 19.7855C16.0143 17.3855 18.0354 15.3644 20.4354 15.3644C22.8354 15.3644 24.8564 17.3855 24.8564 19.7855ZM10.9617 2.73283C12.3512 2.73283 13.488 3.86967 13.488 5.25914C13.488 6.64862 12.3512 7.78546 10.9617 7.78546C9.57223 7.78546 8.43539 6.64862 8.43539 5.25914C8.43539 3.86967 9.57223 2.73283 10.9617 2.73283ZM10.9617 0.206512C8.18276 0.206512 5.90908 2.4802 5.90908 5.25914C5.90908 8.03809 8.18276 10.3118 10.9617 10.3118C13.7407 10.3118 16.0143 8.03809 16.0143 5.25914C16.0143 2.4802 13.7407 0.206512 10.9617 0.206512Z" fill="#00BB7E"/>
            </g>
            <defs>
            <clipPath id="clip0_84_237">
            <rect width="24" height="24" fill="white" transform="translate(0.856445 0.206512)"/>
            </clipPath>
            </defs>
        </svg>

        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">95</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Membres connectés.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="mx-5">
          <svg width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0.515137 29.5001C0.515137 13.6459 13.3675 0.793457 29.2218 0.793457H32.9121C48.7664 0.793457 61.6188 13.6459 61.6188 29.5001V29.5001C61.6188 45.3544 48.7664 58.2068 32.9121 58.2068H29.2218C13.3675 58.2068 0.515137 45.3544 0.515137 29.5001V29.5001Z" fill="#E53F49"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5644 20.4086C35.2057 20.4086 35.846 20.4938 36.4548 20.6861C40.2059 21.8344 41.5576 25.7098 40.4285 29.0972C39.7882 30.8282 38.7414 32.408 37.3704 33.6988C35.408 35.4882 33.2544 37.0766 30.9363 38.445L30.6822 38.5895L30.418 38.4354C28.0917 37.0766 25.926 35.4882 23.9452 33.6893C22.5834 32.3984 21.5356 30.8282 20.8851 29.0972C19.7367 25.7098 21.0884 21.8344 24.8802 20.666C25.1749 20.5703 25.4788 20.5033 25.7837 20.466H25.9056C26.1912 20.4268 26.4748 20.4086 26.7593 20.4086H26.8711C27.5114 20.4268 28.1313 20.532 28.7319 20.7244H28.7919C28.8326 20.7426 28.863 20.7626 28.8834 20.7808C29.108 20.8488 29.3204 20.9253 29.5236 21.0306L29.9098 21.1932C30.0031 21.2401 30.1079 21.3117 30.1984 21.3736C30.2558 21.4128 30.3074 21.4481 30.3468 21.4707C30.3634 21.48 30.3803 21.4892 30.3973 21.4986C30.4844 21.5465 30.5752 21.5963 30.6517 21.6516C31.7808 20.8392 33.1518 20.399 34.5644 20.4086ZM37.2676 27.2977C37.6842 27.2872 38.0399 26.9724 38.0704 26.5695V26.4557C38.1009 25.1151 37.2381 23.9008 35.926 23.4319C35.5094 23.297 35.052 23.5085 34.8996 23.9103C34.7573 24.3122 34.9809 24.7524 35.4077 24.895C36.0592 25.1246 36.4952 25.7284 36.4952 26.3973V26.427C36.4759 26.6461 36.546 26.8576 36.6883 27.0202C36.8305 27.1829 37.044 27.2776 37.2676 27.2977Z" fill="#E53F49"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">20</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Badge obtenus.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 ml-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <div class="mx-5">
          <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.709961" y="0.103027" width="63.3811" height="63.3811" rx="31.6905" fill="#03A89E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6379 24.4842C34.97 24.4888 35.303 24.4933 35.6371 24.4968C39.2268 24.4968 41.8442 27.0613 41.8442 30.6028V35.1519C41.8442 38.6934 39.2268 41.258 35.6371 41.258C34.1991 41.2885 32.7611 41.2987 31.3128 41.2987C29.8645 41.2987 28.4058 41.2885 26.9678 41.258C23.3781 41.258 20.7607 38.6934 20.7607 35.1519V30.6028C20.7607 27.0613 23.3781 24.4968 26.9782 24.4968C28.3334 24.4764 29.7196 24.4561 31.1266 24.4561V24.2831C31.1266 23.5809 30.5369 23.011 29.8334 23.011H28.8093C27.6403 23.011 26.6885 22.0747 26.6885 20.9349C26.6885 20.5176 27.0403 20.1716 27.4644 20.1716C27.8989 20.1716 28.2403 20.5176 28.2403 20.9349C28.2403 21.2402 28.4989 21.4844 28.8093 21.4844H29.8334C31.3956 21.4946 32.668 22.7464 32.6784 24.2729V24.4662C33.3305 24.4662 33.9827 24.4752 34.6379 24.4842ZM30.0918 33.6346H29.0056V34.7133C29.0056 35.1306 28.6539 35.4766 28.2297 35.4766C27.7952 35.4766 27.4538 35.1306 27.4538 34.7133V33.6346H26.3572C25.9331 33.6346 25.5814 33.2987 25.5814 32.8713C25.5814 32.4541 25.9331 32.108 26.3572 32.108H27.4538V31.0395C27.4538 30.6222 27.7952 30.2762 28.2297 30.2762C28.6539 30.2762 29.0056 30.6222 29.0056 31.0395V32.108H30.0918C30.516 32.108 30.8677 32.4541 30.8677 32.8713C30.8677 33.2987 30.516 33.6346 30.0918 33.6346ZM34.489 31.9142H34.5924C35.0166 31.9142 35.3683 31.5783 35.3683 31.1509C35.3683 30.7336 35.0166 30.3876 34.5924 30.3876H34.489C34.0545 30.3876 33.7131 30.7336 33.7131 31.1509C33.7131 31.5783 34.0545 31.9142 34.489 31.9142ZM36.2576 35.4154H36.3611C36.7852 35.4154 37.1369 35.0795 37.1369 34.6521C37.1369 34.2349 36.7852 33.8889 36.3611 33.8889H36.2576C35.8221 33.8889 35.4817 34.2349 35.4817 34.6521C35.4817 35.0795 35.8221 35.4154 36.2576 35.4154Z" fill="#03A89E"/>
          </svg>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">180</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Missions terminées.</p>
        </div>
    </a>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 mx-5 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <div class="mx-5">   
        <svg width="62" height="58" viewBox="0 0 62 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0 28.7067C0 12.8524 12.8524 0 28.7067 0H32.397C48.2512 0 61.1036 12.8524 61.1036 28.7067C61.1036 44.5609 48.2512 57.4133 32.397 57.4133H28.7067C12.8524 57.4133 0 44.5609 0 28.7067Z" fill="#99B2C6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0493 19.6151C34.6906 19.6151 35.3309 19.7003 35.9396 19.8926C39.6908 21.0409 41.0424 24.9163 39.9133 28.3037C39.2731 30.0347 38.2263 31.6145 36.8553 32.9054C34.8928 34.6948 32.7393 36.2832 30.4211 37.6515L30.1671 37.796L29.9028 37.642C27.5765 36.2832 25.4108 34.6948 23.4301 32.8958C22.0682 31.605 21.0204 30.0347 20.37 28.3037C19.2216 24.9163 20.5733 21.0409 24.3651 19.8725C24.6598 19.7769 24.9636 19.7099 25.2685 19.6726H25.3905C25.6761 19.6333 25.9596 19.6151 26.2442 19.6151H26.356C26.9962 19.6333 27.6162 19.7386 28.2168 19.9309H28.2768C28.3174 19.9491 28.3479 19.9692 28.3682 19.9874C28.5928 20.0553 28.8052 20.1319 29.0085 20.2371L29.3947 20.3998C29.488 20.4467 29.5927 20.5183 29.6833 20.5801C29.7406 20.6193 29.7923 20.6547 29.8317 20.6773C29.8483 20.6865 29.8651 20.6958 29.8821 20.7051C29.9693 20.753 30.06 20.8029 30.1366 20.8581C31.2657 20.0457 32.6367 19.6056 34.0493 19.6151ZM36.7524 26.5043C37.1691 26.4937 37.5248 26.1789 37.5553 25.7761V25.6622C37.5858 24.3216 36.7229 23.1073 35.4109 22.6384C34.9942 22.5035 34.5369 22.715 34.3845 23.1169C34.2422 23.5188 34.4658 23.9589 34.8926 24.1015C35.544 24.3312 35.98 24.935 35.98 25.6038V25.6335C35.9607 25.8526 36.0309 26.0641 36.1731 26.2268C36.3154 26.3894 36.5288 26.4842 36.7524 26.5043Z" fill="#3A36DB"/>
        </svg>

        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">12</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nouveaux Carbon.</p>
        </div>
    </a>
  </div>
<div class="flex gap-2 mb-8 mt-8">
    <div class="bg-custom-white w-2/3 shadow p-5 rounded">
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent='arg'>
          <p class="overflow-hidden hover:cursor-pointer" :class="{'bg-custom-green border-custom-green': arg.event.extendedProps.user_event.length > 0}" @click="showModal = true; dateModal = arg.event">
            {{ arg.event.title }}</p>
        </template>
      </FullCalendar>
    </div>
    

    <div class="bg-custom-white w-1/3 shadow p-5 rounded">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actualités</h5>
    </div>

    <div tabindex="-1" aria-hidden="true" v-show="showModal"
         class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="fixed top-0 left-0 right-0 z-40 h-full max-h-full bg-gray-400 opacity-50"></div>
      <div class="relative w-full max-h-full z-50">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-6xl mt-32">
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
          <div v-if="dateModal" class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {{ new Date(dateModal.start).toLocaleDateString() }}</h3>
            <h4 class="mb-4 text-lg font-base text-gray-900 dark:text-white">{{ dateModal.title }}</h4>
            <p class="mb-4 text-md font-base text-gray-900 dark:text-white">
              {{ dateModal.extendedProps.description }}</p>

            <button v-if="dateModal.extendedProps.user_event.length === 0" @click="join(dateModal.id)" type="button"
                    class="mt-10 text-white bg-custom-green hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              S'inscrire
            </button>
            <p v-else class="text-sm text-gray-600 italic">
              Vous êtes inscrit à cet évènement
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-2">
    <div class="bg-custom-white w-2/3 shadow p-5 rounded mb-5">
      <div class="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To Do list: </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Remplir</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr';

definePageMeta({
  middleware: ["auth"],
  layout: "user",
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const runtimeConfig = useRuntimeConfig()
const showModal = ref(false);
const dateModal = ref(null);
const userInfos = ref()
const events = ref(null)

async function getEvents(){

    const data = await $fetch('/api/event/getAllUser', {
        method: 'get',
    });

    console.log(data);

  if (data !== 'Error') {
      events.value = data; 
  }
}

const calendarOptions = ref({
  headerToolbar: {
    right: 'prev,next',
    left: 'title',
    center: ''
  },
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: frLocale,
  events: events,
  height: "400px",
})

const getUser = async() => {
    const data = await $fetch('/api/middleware/get?id=' + user.value.id, {
            method: 'get',
    });

  if (data !== 'Error') {
      userInfos.value = data;
  }


}

onMounted(async () => {
  await getUser();
  getEvents();
});

async function join(id) {
  await $fetch('/api/event/join', {
    method: 'post',
    body: {
      eventId: id,
      userId: user.value.id,
    }
  });

  showModal.value = false;

  getEvents();
}
</script>