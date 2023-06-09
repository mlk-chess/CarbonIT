<template>
    <div>
        <h2>Quiz</h2>
        <div v-if="quizStarted">
            <div v-if="!quizFinished">
                <h3>{{ currentQuestion.question }}</h3>
                <ul>
                    <li v-for="(option, index) in currentQuestion.options" :key="index">
                        <label>
                            <input type="radio" :value="index" v-model="selectedOption">
                            {{ option }}
                        </label>
                    </li>
                </ul>
                <button @click="nextQuestion">Suivant</button>
            </div>
            <div v-else>
                <h3>Quiz terminé !</h3>
                <p>Vous avez répondu correctement à {{ correctAnswers }} question(s) sur {{ questions.length }}.</p>
            </div>
        </div>
        <div v-else>
            <p>Le quiz n'a pas encore commencé.</p>
            <button @click="startQuiz">Commencer le quiz</button>
        </div>
    </div>
</template>
  
<script setup>
import {initFlowbite} from 'flowbite';

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

onMounted(async () => {
  initFlowbite();
  const {data, error} = await supabase.from('user').select().eq('auth_id', user.value.id);
  points.value = data[0].points;

  const {data: tasksData, error: tasksError} = await supabase.from('user_task').select('*, task:taskId(*)').eq('userId', user.value.id);
  tasks.value = tasksData;

  console.log(tasksData);
});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});

const quizStarted = ref(false)
const quizFinished = ref(false)
const questions = [
    {
        question: 'Question 1',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 2
    },
    {
        question: 'Question 2',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 1
    },
]
const currentQuestionIndex = ref(0)
const selectedOption = ref(null)
const correctAnswers = ref(0)

const currentQuestion = computed(() => {
    return questions[currentQuestionIndex.value]
})

const startQuiz = () => {
    quizStarted.value = true
}

const nextQuestion = () => {
    if (selectedOption.value === currentQuestion.value.correctAnswer) {
        correctAnswers.value++
    }
    currentQuestionIndex.value++
    if (currentQuestionIndex.value >= questions.length) {
        quizFinished.value = true
    }
    selectedOption.value = null
}

</script>
  