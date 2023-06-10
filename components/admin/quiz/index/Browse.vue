<template>
    <div role="status" class="flex justify-center items-center flex-col h-screen" v-if="isLoading">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
    </div> 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-else>
        <div v-for="quiz in paginatedQuizzes" :key="quiz.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-800">{{ quiz.title }}</h2>
                <p class="text-gray-600 mt-2">{{ quiz.theme }}</p>
                <div class="mt-4 flex justify-between items-center">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-1"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd"
                                d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm9 3a1 1 0 11-2 0 1 1 0 012 0zm2.6-5.6a1 1 0 11-1.2 1.6 3 3 0 10-3.6 0 1 1 0 11-1.2-1.6 5 5 0 116 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-gray-700">{{ quiz.description }}</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-1"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10 12.585L3.342 16.45l1.258-7.327L.175 6.566l7.392-1.07L10 0l2.433 5.496 7.392 1.07-4.425 3.557 1.258 7.327L10 12.585z" />
                        </svg>
                        <span class="text-gray-700">{{ quiz.difficulty }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="w-full flex justify-center mt-10">
            <nav class="pagination">
                <ul class="inline-flex -space-x-px">
                    <li v-if="currentPage > 1" @click="previousPage">
                        <button
                            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Précédent
                        </button>
                    </li>
                    <template v-for="page in totalPages" :key="page">
                        <li @click="currentPage = page">
                            <button
                                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {{ page }}
                            </button>
                        </li>
                    </template>
                    <li v-if="currentPage < totalPages" @click="nextPage">
                        <button
                            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Suivant
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="text-center text-gray-500 text-sm mt-4">
            Page {{ currentPage }} sur {{ totalPages }}
        </div>
</template>

<script setup>
const quizzes = ref([])
const isLoading = ref(true);

onMounted(async () => {
    await getQuizzes();
})

async function getQuizzes() {

    const data = await $fetch('/api/quiz/getAll', {
        method: 'get',
    });

    if (data !== 'Error') {
        quizzes.value = data;
        isLoading.value = false;
    }
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const currentPage = ref(1);
const pageSize = ref(6);

const paginatedQuizzes = computed(() => {
    return paginate(quizzes.value, pageSize.value, currentPage.value);
});

const totalPages = computed(() => {
    if (quizzes.value) {
        return Math.ceil(quizzes.value.length / pageSize.value);
    } else {
        return 0;
    }
});

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

</script>