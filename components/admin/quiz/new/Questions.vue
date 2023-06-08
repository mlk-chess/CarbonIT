<template>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mb-4">
        <h3 class="text-xl font-bold mb-2">Question {{ questionIndex + 1 }}</h3>
        <div class="mb-2">
            <input type="text" v-model="question.questionText" placeholder="Question" required
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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