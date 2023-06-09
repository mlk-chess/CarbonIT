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
            <input type="text" v-model="answer.answerText" required class="w-52 mr-8 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" v-model="answer.isCorrect">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-custom-green dark:peer-focus:ring-custom-green rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-custom-green">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Réponse correcte</span>
            </label>
        </div>

        <div class="flex">
            <button type="button" @click="addAnswer(questionIndex)" class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter une
                réponse</button>
            <button type="button" @click="removeAnswer(questionIndex, answerIndex)" class="mt-7 text-white bg-custom-red hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Supprimer
                la réponse</button>
        </div>
        <div class="flex">
            <button type="button" @click="addQuestion" class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter une question</button>
            <button type="button" @click="removeQuestion(questionIndex)" class="mt-7 text-white bg-custom-red hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Supprimer la
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