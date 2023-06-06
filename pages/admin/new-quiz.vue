<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Créer un quiz</h2>
        <form @submit.prevent="saveQuiz">
            <div class="mb-2">
                <label for="question" class="block mb-1">Question:</label>
                <input type="text" v-model="questionText" required class="input">
            </div>
            <div v-for="(answer, answerIndex) in answers" :key="answerIndex" class="flex items-center mb-2">
                <input type="text" v-model="answer.answerText" required class="input mr-2">
                <label class="flex items-center">
                    <input type="radio" v-model="correctAnswer" :value="answerIndex" class="checkbox">
                    <span class="ml-2">Correcte</span>
                </label>
            </div>
            <div class="mb-2">
                <label for="difficulty" class="block mb-1">Difficulté:</label>
                <div class="flex items-center">
                    <svg @click="setDifficulty(1)" aria-hidden="true" class="w-5 h-5 cursor-pointer"
                        :class="{ 'text-yellow-400': difficulty >= 1, 'text-gray-300 dark:text-gray-500': difficulty !== 'easy' }"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg @click="setDifficulty(2)" aria-hidden="true" class="w-5 h-5 cursor-pointer"
                        :class="{ 'text-yellow-400': difficulty >= 2, 'text-gray-300 dark:text-gray-500': difficulty !== 'medium' }"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg @click="setDifficulty(3)" aria-hidden="true" class="w-5 h-5 cursor-pointer"
                        :class="{ 'text-yellow-400': difficulty >= 3, 'text-gray-300 dark:text-gray-500': difficulty !== 'hard' }"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg @click="setDifficulty(4)" aria-hidden="true" class="w-5 h-5 cursor-pointer"
                        :class="{ 'text-yellow-400': difficulty >= 4, 'text-gray-300 dark:text-gray-500': difficulty !== 'very-hard' }"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg @click="setDifficulty(5)" aria-hidden="true" class="w-5 h-5 cursor-pointer"
                        :class="{ 'text-yellow-400': difficulty >= 5, 'text-gray-300 dark:text-gray-500': difficulty !== 'extreme' }"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                </div>
            </div>
            <button type="submit" class="btn">Créer</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questionText: '',
            answers: [{ answerText: '' }, { answerText: '' }],
            correctAnswer: '',
            difficulty: 0
        };
    },
    methods: {
        setDifficulty(difficulty) {
            this.difficulty = difficulty;
        },
        saveQuiz() {
            const quiz = {
                question: this.questionText,
                answers: this.answers,
                correctAnswer: this.correctAnswer,
                difficulty: this.difficulty
            };
            console.log(quiz);
        }
    }
}

</script>
