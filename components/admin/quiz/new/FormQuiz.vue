<template>
    <form @submit.prevent="saveQuiz">
        <div class="flex justify-center">
            <QuizName :quizName="quizName" class="mr-20" />
            <Difficulty :difficulty="difficulty" :setDifficulty="setDifficulty" />
        </div>

        <Questions :questions="questions" :addQuestion="addQuestion" :removeQuestion="removeQuestion" :addAnswer="addAnswer"
            :removeAnswer="removeAnswer" />

        <button type="submit" class="btn-secondary">Créer</button>
    </form>
</template>

<script>
import Difficulty from "./Difficulty.vue";
import QuizName from "./QuizName.vue";
import Questions from "./Questions.vue";
export default {
    components: {
        Difficulty,
        QuizName,
        Questions
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
            difficulty: 1,
            quizName: '',
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
            const question = this.questions[questionIndex];

            if (question.answers.length > 1) {
                question.answers.splice(answerIndex, 1);
            } else {
                console.log("Impossible de supprimer la réponse. Il doit y avoir au moins une réponse pour chaque question.");
            }
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
            if (this.questions.length > 1) {
                this.questions.splice(questionIndex, 1);
            } else {
                alert("Impossible de supprimer la question. Il doit y avoir au moins une question dans le tableau.");
            }
        },
        saveQuiz() {
            console.log(this.questions, this.difficulty);
        }
    }

}
</script>