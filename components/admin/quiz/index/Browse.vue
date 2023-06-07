<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="quiz in quizzes" :key="quiz.id">
            <a href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ quiz.quiz_name }}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ quiz.difficulty }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ quiz.description }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ quiz.theme }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quizzes: []
        };
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

    }
};
</script>
