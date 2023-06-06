<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Insérer des questions pour le quizz : </h2>
        <form @submit.prevent="saveQuiz">
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
                    <button type="button" @click="addAnswer(questionIndex)" class="btn-primary mr-2">Ajouter une
                        réponse</button>
                    <button type="button" @click="removeAnswer(questionIndex, answerIndex)" class="btn-secondary">Supprimer
                        la réponse</button>
                </div>
            </div>
            <div class="flex">
                <button type="button" @click="addQuestion" class="btn-primary mr-2">Ajouter une question</button>
                <button type="button" @click="removeQuestion(questionIndex)" class="btn-secondary">Supprimer la
                    question</button>
            </div>
            <button type="submit" class="btn-primary mt-4">Enregistrer</button>
        </form>
    </div>
</template>

<script>
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
        saveQuiz() {
            console.log(this.questions);
        }
    }
}
</script>

<style>@import 'flowbite/dist/flowbite.css';</style>
