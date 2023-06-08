<template>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mr-3">
        <div class="relative mt-10">
            <input required v-model="question.questionText" type="text" id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
            <label for="floating_outlined"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Question
                {{ questionIndex + 1 }}</label>
        </div>
        
        <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="flex items-center mb-2">
            <input type="text" v-model="answer.answerText" required class="input mr-2">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" v-model="answer.isCorrect">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Réponse correcte</span>
            </label>
        </div>

        <div class="flex">
            <button type="button" @click="addAnswer(questionIndex)" class="btn-primary mr-2">Ajouter une
                réponse</button>
            <button type="button" @click="removeAnswer(questionIndex, answerIndex)" class="btn-secondary">Supprimer
                la réponse</button>
        </div>
        <div class="flex">
            <button type="button" @click="addQuestion" class="btn-primary mr-2">Ajouter une question</button>
            <button type="button" @click="removeQuestion(questionIndex)" class="btn-secondary">Supprimer la
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