<template>
    <div role="status" class="flex justify-center items-center flex-col h-screen" v-if="isLoading">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
    <div v-else-if="!isQuizExist" class="flex justify-center items-center flex-col">
        <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Ce quiz est <span
                class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">introuvable
                !</span>
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">Ce quiz n'existe pas. S'il
            est censé exister, contactez l'administrateur.</p>
        <img class="h-auto max-w-lg rounded-lg" src="~/assets/img/not_found.png" alt="image description" />
    </div>
    <div v-else>

        <section>
            <div
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="~/assets/img/quiz.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ajouter des questions
                        au
                        quiz {{ dataquiz[0].quiz_name }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ dataquiz[0].theme }}</p>
                </div>
            </div>
        </section>

        <form @submit.prevent="saveQuiz">
            <div class="flex flex-wrap m-8">
                <Questions :questions="questions" :addQuestion="addQuestion" :removeQuestion="removeQuestion"
                    :addAnswer="addAnswer" :removeAnswer="removeAnswer" />
            </div>
            <button type="submit"
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Enregistrer les questions
            </button>
        </form>

        <div class="flex flex-wrap m-8">
            <template v-for="(question, index) in questionsData">
                <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                    <div
                        class="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="p-4">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{
                                question.question_text }}</h5>
                            <ul class="list-disc list-inside">
                                <template v-for="(answer, answerIndex) in question.answers">
                                    <li :class="{ 'text-green-500 font-bold': answer.is_correct }">{{ answer.answer_text }}
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script setup>

import { initFlowbite } from 'flowbite';
import Questions from '~/components/admin/quiz/new/Questions.vue';

const isLoading = ref(true);
const isQuizExist = ref(true);
const dataquiz = ref([]);
const questionsData = ref([
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

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth-admin"],
  layout: "user"
});


const route = useRoute()

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

async function getQuizzes() {
    const response = await fetch(`/api/quiz/getQuiz?id=${route.params.id}`);
    const responseQuestions = await fetch(`/api/quiz/getQuestions?id=${route.params.id}`);

    if (response.ok && responseQuestions.ok) {
        const data = await response.json();
        const dataquestions = await responseQuestions.json();
        dataquiz.value = data;
        questionsData.value = dataquestions
        isLoading.value = false;

        console.log(questionsData.value);
    } else {
        isQuizExist.value = false;
    }
}

async function saveQuiz() {
    const response = await fetch(`/api/quiz/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quiz_id: route.params.id,
            questions: questions.value
        })
    });

    if (response.ok) {
        alert('Les questions ont été ajoutées avec succès!');
    } else {
        alert('Une erreur s\'est produite lors de l\'ajout des questions.');
    }
}

onMounted(async () => {
    initFlowbite();
    await getQuizzes();
    // await saveQuiz();

});

</script>