<template>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex">
        <div class="relative mt-8 mb-5">
            <input required v-model="question.questionText" type="text" id="floating_outlined"
                class="w-80 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                placeholder=" " />
            <label for="floating_outlined"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Question
                {{ questionIndex + 1 }}</label>
        </div>

        <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="flex items-center mb-2">
            <input type="text" v-model="answer.answerText" required
                class="w-52 mr-8 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" v-model="answer.isCorrect">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-custom-green dark:peer-focus:ring-custom-green rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-custom-green">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Réponse correcte</span>
            </label>
        </div>

        <div class="inline-flex rounded-md shadow-sm" role="group">
            <button @click="addAnswer(questionIndex)" type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                <svg class="w-4 h-4 mr-2 fill-current" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                </svg>
                Ajouter une réponse
            </button>
            <button @click="removeAnswer(questionIndex, answerIndex)" type="button"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                <svg class="w-4 h-4 mr-2 fill-current" fill="none" stroke="currentColor" stroke-width="1.5"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
                    </path>
                </svg>
                Supprimer une réponse
            </button>
        </div>
        <div class="flex">
            <button type="button" @click="addQuestion"
                class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter
                une question</button>
            <button type="button" @click="removeQuestion(questionIndex)"
                class="mt-7 text-white bg-custom-red hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Supprimer
                la
                question</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions: {
            type: Array,
            required: true
        },
        addQuestion: {
            type: Function,
            required: true
        },
        removeQuestion: {
            type: Function,
            required: true
        },
        addAnswer: {
            type: Function,
            required: true
        },
        removeAnswer: {
            type: Function,
            required: true
        },
    }
}
</script>