<script setup>
import { initFlowbite } from 'flowbite';

const quizStarted = ref(false)
const quizFinished = ref(false)
const currentQuestionIndex = ref(0)
const correctAnswersClient = ref(0)
const isLoading = ref(true);
const dataquiz = ref([]);
const selectedAnswer = ref([]);
const isQuizExist = ref(true);
const datafordisplayquiz = ref([]);

useHead({
    bodyAttrs: {
        class: 'bg-[#F1F8FF]'
    }
});

onMounted(async () => {
    initFlowbite();
    await getQuizzes();
})

async function getQuizzes() {
    const route = useRoute();
    const dataforquiz = await $fetch('/api/quiz/getQuiz?id=' + route.params.id);
    const data = await $fetch('/api/quiz/getEverything?id=' + route.params.id, {
        method: 'get',
    });


    if (dataforquiz !== 'Error') {
        datafordisplayquiz.value = dataforquiz;
        isLoading.value = false;
    } else {
        isQuizExist.value = false;
        isLoading.value = false;
    }

    if (data !== 'Error') {
        dataquiz.value = data.value;
        console.log(data.value);
        console.log(dataquiz.value.length);
        isLoading.value = false;
    } else {
        isQuizExist.value = false;
    }
}

definePageMeta({
    middleware: ["auth"],
    layout: "user"
});

const startQuiz = () => {
    quizStarted.value = true
}

const checkAnswer = async () => {
    // Check if answers selected by the clients are corrects
    const correctAnswers = dataquiz.value[currentQuestionIndex.value].answers.filter((answer) => answer.isCorrect).map((answer) => answer.answer);
    console.log(selectedAnswer.value);
    const selectedAnswers = selectedAnswer.value.filter((answer) => answer !== false);
    console.log(correctAnswers, selectedAnswers);
    if (correctAnswers.length === selectedAnswers.length && correctAnswers.every((answer) => selectedAnswers.includes(answer))) {
        correctAnswersClient.value++;
        console.log(correctAnswersClient.value);
    }
    currentQuestionIndex.value++;
    selectedAnswer.value = [];

}

</script>
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
    <div v-else>
        <div v-if="isQuizExist">
            <div v-if="quizStarted">
                <div v-if="dataquiz[currentQuestionIndex] && !quizFinished">
                    <div>
                        <!-- Display questions and answers with mulitple choices -->
                        <div>
                            <h3>{{ dataquiz[currentQuestionIndex].question }}</h3>
                            <ul v-for="(answer, index) in dataquiz[currentQuestionIndex].answers">
                                <li :key="index">
                                    <input type="checkbox" :value="answer.answer" v-model="selectedAnswer" />
                                    {{ answer.answer }}
                                </li>
                            </ul>
                            <button @click="checkAnswer">Submit</button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3>Quiz terminé !</h3>
                    <p>Vous avez obtenu {{ correctAnswersClient }} sur {{ dataquiz.length }} correctes.</p>
                </div>
            </div>
            <div v-else>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1
                            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            {{ datafordisplayquiz[0].quiz_name }}</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{{
                            datafordisplayquiz[0].description }}</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <button @click="startQuiz" href="#"
                                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Commencer le quiz
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <div>
                    <video class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" autoplay loop muted
                        style="object-fit: fill;">
                        <source src="~/assets/videos/quiz-checklist.mp4" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture de cette vidéo.
                    </video>
                </div>
            </div>
        </div>
        <div v-else>
            Quiz introuvable
            <div>
                <video class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" autoplay loop muted
                    style="object-fit: fill;">
                    <source src="~/assets/videos/not-found-quiz.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture de cette vidéo.
                </video>
            </div>
        </div>
</div></template>