<template>
    <form @submit.prevent="saveQuiz">
        <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mb-4">
            <h3 class="text-xl font-bold mb-2">Question {{ questionIndex + 1 }}</h3>
            <div class="mb-2">
                <label for="question" class="block mb-1">Question:</label>
                <input type="text" v-model="question.questionText" required class="input">
            </div>
            <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="flex items-center mb-2">
                <input type="text" v-model="answer.answerText" required class="input mr-2">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" v-model="answer.isCorrect">
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
        </div>
        <Difficulty :difficulty="difficulty" :setDifficulty="setDifficulty" />
        <button type="submit" class="btn-secondary">Créer</button>
    </form>
</template>

<script>
import Difficulty from "./Difficulty.vue";
export default {
    components: {
        Difficulty
    },
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
            ],
            difficulty: 1
        };
    },
    methods: {
        setDifficulty(difficulty) {
            this.difficulty = difficulty;
        },
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
        saveQuiz() {
            console.log(this.questions, this.difficulty);
        }
    }

}
</script>