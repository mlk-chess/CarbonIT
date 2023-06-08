<script setup>
import {initFlowbite} from 'flowbite';

const supabase = useSupabaseClient();
const router = useRouter();

onMounted(() => {
  initFlowbite();
});

async function logout() {
  const { error } = await supabase.auth.signOut()

  await router.push('/');
}
</script>

<template>
  <div>

    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>

    <aside id="default-sidebar"
           class="fixed top-0 left-0 z-40 w-24 h-screen transition-transform -translate-x-full sm:translate-x-0"
           aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-custom-black dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink href="#"
                      class="flex justify-center items-center p-2 text-custom-white rounded-lg dark:text-white hover:bg-[#515456] dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                   class="w-6 h-6 text-custom-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/training"
                      class="flex items-center justify-center p-2 text-custom-white rounded-lg dark:text-white hover:bg-[#515456] dark:hover:bg-gray-700">
              <svg
                  class="flex-shrink-0 w-6 h-6 text-custom-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
              </svg>
            </NuxtLink>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <button @click="logout"
                      class="w-full flex items-center justify-center p-2 text-custom-white rounded-lg dark:text-white hover:bg-[#515456] dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                   class="flex-shrink-0 w-6 h-6 text-custom-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-24">
      <div class="p-4">
        <slot/>
      </div>
    </div>
  </div>
</template>