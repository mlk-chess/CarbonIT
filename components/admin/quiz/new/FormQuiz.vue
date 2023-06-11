<template>
    <form @submit.prevent="saveQuiz">
        <div class="flex flex-row justify-between mt-10">
            <div class="flex card">
                <!-- NAME -->
                <div class="mb-2">
                    <label for="quiz-name" class="block mb-1">Nom du quiz</label>
                    <input type="text" v-model="quizName" required
                        class="w-80 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                </div>
                <!-- Difficulté -->
                <Difficulty :setDifficulty="setDifficulty" :difficulty="difficulty" />
            </div>
        </div>

        <div class="flex mt-8">
            <div class="card">
                <!-- Thème -->
                <div class="relative">
                    <input v-model="theme" type="text" id="floating_outlined"
                        class="w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Thème</label>
                </div>
                <!-- Description -->
                <div class="relative">
                    <label for="description"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Description</label>
                    <textarea v-model="description" id="description" rows="4"
                        class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                        placeholder=" "></textarea>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <Questions :questions="questions" :addQuestion="addQuestion" :removeQuestion="removeQuestion" :addAnswer="addAnswer"
            :removeAnswer="removeAnswer"/>
        </div>

        <button type="submit" class="mt-7 text-white bg-custom-green hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Créer le quizz</button>
    </form>
</template>

<script setup>

import Difficulty from "./Difficulty.vue";
import Questions from "./Questions.vue";
const router = useRouter()
const difficulty = ref(1)
const quizName = ref('')
const description = ref('')
const theme = ref('')
const questions = ref([
    {
        questionText: '',
        answers: [
            {
                answerText: '',
                isCorrect: false
            }
        ]
    }
])


async function setDifficulty(val) {
    difficulty.value = val;
}

async function addAnswer(questionIndex) {
    questions.value[questionIndex].answers.push({
        answerText: '',
        isCorrect: false
    });
}
async function removeAnswer(questionIndex, answerIndex) {
    const question = questions.value[questionIndex];

    if (question.answers.length > 1) {
        question.answers.splice(answerIndex, 1);
    } else {
        console.log("Impossible de supprimer la réponse. Il doit y avoir au moins une réponse pour chaque question.");
    }
}
async function addQuestion() {
    questions.value.push({
        questionText: '',
        answers: [
            {
                answerText: '',
                isCorrect: false
            }
        ]
    });
}
async function removeQuestion(questionIndex) {
    if (questions.value.length > 1) {
        questions.value.splice(questionIndex, 1);
    } else {
        alert("Impossible de supprimer la question. Il doit y avoir au moins une question dans le tableau.");
    }
}
async function saveQuiz() {
    const data = {
        questions: questions.value,
    };

    const quiz = await $fetch('/api/quiz/new', {
        method: 'post',
        body: {
            quizName: quizName.value,
            difficulty: difficulty.value,
            theme: theme.value,
            description: description.value
        }
    });

    const lastQuizId = await quiz[0].id;

    const questionsRes = await $fetch('/api/quiz/questions', {
        method: 'post',
        body: {
            quiz_id: lastQuizId,
            questions: questions.value
        }
    });

    await router.push('/admin/quiz');

}

</script>