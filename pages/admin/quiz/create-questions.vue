<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Insérer des questions pour le quizz : </h2>
        <form @submit.prevent="saveQuestion">
            <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mb-4">
                <h3 class="text-xl font-bold mb-2">Question {{ questionIndex + 1 }}</h3>
                <div class="mb-2">
                    <label for="question" class="block mb-1">Question:</label>
                    <input type="text" v-model="question.questionText" required class="input">
                </div>
                <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="flex items-center mb-2">
                    <input type="text" v-model="answer.answerText" required class="input mr-2">
                    <label class="flex items-center">
                        <input type="checkbox" v-model="answer.isCorrect" class="checkbox">
                        <span class="ml-2">Correcte</span>
                    </label>
                </div>
                <div class="flex">
                    <button type="button" @click="addAnswer(questionIndex)" class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter une
                        réponse</button>
                    <button type="button" @click="removeAnswer(questionIndex, answerIndex)" class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Supprimer
                        la réponse</button>
                </div>
            </div>
            <div class="flex">
                <button type="button" @click="addQuestion" class="mt-7 text-white bg-custom-blue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter une question</button>
                <button type="button" @click="removeQuestion(questionIndex)" class="mt-7 text-white bg-custom-red hover:bg-red-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">Supprimer la
                    question</button>
            </div>
             <button type="submit" class="mt-7 text-white bg-custom-green hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enregistrer</button>
        </form>
    </div>
</template>

<script>
definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});
export default {
    data() {
        return {
            questions: [
                {
                    questionText: '',
                    answers: [
                        {
                            answerText: '',
                            isCorrect: false
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        addAnswer(questionIndex) {
            this.questions[questionIndex].answers.push({
                answerText: '',
                isCorrect: false
            });
        },
        removeAnswer(questionIndex, answerIndex) {
            this.questions[questionIndex].answers.splice(answerIndex, 1);
        },
        addQuestion() {
            this.questions.push({
                questionText: '',
                answers: [
                    {
                        answerText: '',
                        isCorrect: false
                    }
                ]
            });
        },
        removeQuestion(questionIndex) {
            this.questions.splice(questionIndex, 1);
        },
        saveQuestion() {
            console.log(this.questions);
        }
    }
}
</script>
