<script setup>
import { initFlowbite } from 'flowbite';

const quizStarted = ref(false)
const quizFinished = ref(false)
// const questions = [ref([])]
const currentQuestionIndex = ref(0)
const selectedOption = ref(null)
const correctAnswers = ref(0)
const isLoading = ref(true);


useHead({
    bodyAttrs: {
        class: 'bg-[#F1F8FF]'
    }
});

onMounted(async () => {
    initFlowbite();
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
    const supabase = useSupabaseClient();
    const route = useRoute();

    const { data, error } = await supabase
        .from('quizzes')
        .select()
        .eq('id', route.params.id)

    //Check si data est bien rempli
    if (data[0] === undefined) {
        console.log('Erreur: Impossible de récupérer les données du quiz');
        isLoading.value = false;
        isQuizExist.value = false;
    } else {
        // Requête pour récupérer les questions
        const { data: dataQuestions, error: errorQuestions } = await supabase
            .from('questions')
            .select()
            .eq('quiz_id', route.params.id)

        // On met les questions et les réponses qui vont avec la question dans la variable questionsData
        if (dataQuestions) {
            // Requête pour récupérer les réponses en fonction des questions
            const { data: dataAnswers, error: errorAnswers } = await supabase
                .from('answers')
                .select()
                .in('question_id', dataQuestions.map(question => question.id))

            questionsData.value.pop();
            dataQuestions.forEach(question => {
                const answers = dataAnswers.filter(answer => answer.question_id === question.id);

                questionsData.value.push({
                    questionText: question.question_text,
                    answers: answers.map(answer => {
                        return {
                            answerText: answer.answer_text,
                            isCorrect: answer.is_correct
                        }
                    })
                })
            });
            isLoading.value = false;
        } else {
            console.log('Erreur: Impossible de récupérer les questions et/ou les réponses');
        }

        if (error) {
            console.log(error);
        } else {
            isLoading.value = false;
            dataquiz.value = data;
        }

        console.log(questionsData.value[0].questionText);
    }

});

definePageMeta({
    middleware: ["auth"],
    layout: "user"
});

const startQuiz = () => {
    quizStarted.value = true
}

const checkAnswer = () => {
    if (selectedOption.value === true) {
        correctAnswers.value++
    }
    if (currentQuestionIndex.value === questionsData.value.length - 1) {
        quizFinished.value = true
    } else {
        currentQuestionIndex.value++
        selectedOption.value = null
    }
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
        <h2>Quiz</h2>
        <div v-if="quizStarted">
            <div v-if="!quizFinished">
                <div>
                    <h3>{{ questionsData.value[currentQuestionIndex.value].questionText }}</h3>
                    <div v-for="(answer, index) in questionsData.value[currentQuestionIndex.value].answers" :key="index">
                        <label>
                            <input type="radio" :value="answer.isCorrect" v-model="selectedOption">
                            {{ answer.answerText }}
                        </label>
                    </div>
                    <button @click="checkAnswer">Suivant</button>
                </div>
            </div>
            <div v-else>
                <h3>Quiz terminé</h3>
                <p>Vous avez obtenu {{ correctAnswers }}/{{ questionsData.value.length }} bonnes réponses</p>
            </div>
        </div>
        <div v-else>
            <p>Le quiz n'a pas encore commencé.</p>
            <button @click="startQuiz">Commencer le quiz</button>
        </div>
    </div>
</template>