import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);
        const questionsData: { value: { question: string; answers: { answer: string; isCorrect: boolean }[] }[] } = { value: [] };
        const { data, error } = await supabase
            .from('quizzes')
            .select()
            .eq('id', query.id)

        console.log(data);

        //Check si data est bien rempli
        if (data[0] === undefined) {
            console.log('Erreur: Impossible de récupérer les données du quiz');
            console.log("ok2");

        } else {
            // Requête pour récupérer les questions
            const { data: dataQuestions, error: errorQuestions } = await supabase
                .from('questions')
                .select()
                .eq('quiz_id', query.id)


            console.log(query.id, dataQuestions);

            // On met les questions et les réponses qui vont avec la question dans la variable questionsData
            if (dataQuestions) {
                // Requête pour récupérer les réponses en fonction des questions
                const { data: dataAnswers, error: errorAnswers } = await supabase
                    .from('answers')
                    .select()
                    .in('question_id', dataQuestions.map((question: { id: number; }) => question.id))

                console.log(dataAnswers);

                dataQuestions.forEach((question: { id: number; question_text: string; }) => {
                    const answers = dataAnswers.filter((answer: { question_id: number; }) => answer.question_id === question.id);
                    console.log(answers);
                    questionsData.value.push({
                        question: question.question_text,
                        answers: answers.map((answer: { answer_text: string; is_correct: boolean; }) => ({
                            answer: answer.answer_text,
                            isCorrect: answer.is_correct
                        }))
                    })

                })

            } else {
                console.log('Erreur: Impossible de récupérer les questions et/ou les réponses');
                return 'Error';
            }

            if (error) {
                console.log(error);
            } else {
                return questionsData;
            }
        }
    }
    return 'Error';
});
