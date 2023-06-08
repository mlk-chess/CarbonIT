<template>
    <form @submit.prevent="saveQuiz">
        <div class="flex flex-wrap m-8">
            <Questions :questions="questions" :addQuestion="addQuestion" :removeQuestion="removeQuestion"
                :addAnswer="addAnswer" :removeAnswer="removeAnswer" />
        </div>
        <button type="submit" class="btn-secondary">Ajouter des questions</button>
    </form>
</template>

<script setup>

import Questions from '~/components/admin/quiz/new/Questions.vue';


const route = useRoute()

if (!route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}

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


</script>