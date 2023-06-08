<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(quiz, index) in paginatedQuizzes" :key="index">
            <div
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ quiz.quiz_name }}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    {{ quiz.difficulty }}
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ quiz.description }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ quiz.theme }}</p>
                <a href="/admin/quiz/create-questions"
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Edit
                    </span>
                </a>
                <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Supprimer
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <nav class="block">
            <ul class="flex pl-0 rounded list-none flex-wrap">
                <li v-if="currentPage > 1"
                    class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="page in pages"
                    :class="[page == currentPage ? 'active' : '', 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 hover:bg-gray-200']">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li v-if="currentPage < totalPages"
                    class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-r hover:bg-gray-200">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
    data() {
        return {
            quizzes: [],
            currentPage: 1,
            itemsPerPage: 6
        };
    },
    computed: {
        paginatedQuizzes() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.quizzes.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.quizzes.length / this.itemsPerPage);
        },
        pages() {
            const pagesArray = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        }
    },
    async mounted() {
        const supabase = useSupabaseClient();

        const { data, error } = await supabase
            .from('quizzes')
            .select()

        if (error) {
            console.log(error);
        } else {
            this.quizzes = data;
        }

    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        }
    }
};
</script>


