<script setup>
const quizzes = ref();
const isLoading = ref(true);

useHead({
    bodyAttrs: {
        class: 'bg-[#F1F8FF]'
    }
});

definePageMeta({
    middleware: ["auth"],
    layout: "user"
});

onMounted(async () => {
    const supabase = useSupabaseClient();

    const { data, error } = await supabase
        .from('quizzes')
        .select()

    if (error) {
        console.log(error);
    } else {
        quizzes.value = data
        isLoading.value = false;
    }
})

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const currentPage = ref(1);
const pageSize = ref(6);

const paginatedQuizzes = computed(() => {
    return paginate(quizzes.value, pageSize.value, currentPage.value);
});

const totalPages = computed( () => {
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

<template>
    <div>
        <div v-if="isLoading">Chargement en cours...</div>
        <div v-else>
            <h1 class="text-3xl font-bold text-gray-800">Browse Quizzes</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Loop quizzes.value -->
                <div v-for="(quiz, index) in paginatedQuizzes" :key="index">
                    <div class="bg-white shadow-md rounded-md p-4">
                        <h2 class="text-xl font-bold text-gray-800">{{ quiz.quiz_name }}</h2>
                        <p class="text-gray-600">{{ quiz.description }}</p>
                        <div class="flex justify-end mt-4">
                            <nuxt-link :to="`/quiz/quiz-${quiz.id}`"
                                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">S'évaluer</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="w-full flex justify-center mt-4">
            <nav class="pagination">
                <ul class="flex">
                    <li v-if="currentPage > 1" @click="previousPage" class="mr-2">
                        <a href="#" class="block bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Précédent
                        </a>
                    </li>
                    <template v-for="page in totalPages" :key="page">
                        <li :class="{ 'mx-2': page !== 1 && page !== totalPages, 'mr-2': page === 1, 'ml-2': page === totalPages }" @click="currentPage = page">
                            <a href="#" class="block bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" :class="{ 'bg-blue-500 text-white': currentPage === page, 'hover:bg-blue-500 hover:text-white': currentPage !== page }">
                                {{ page }}
                            </a>
                        </li>
                    </template>
                    <li v-if="currentPage < totalPages" @click="nextPage" class="ml-2">
                        <a href="#" class="block bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Suivant
                        </a>
                    </li>
                </ul>
            </nav>
        </div>


    </div>
</template>