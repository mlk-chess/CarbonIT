import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);
    
    // Loop to add all questions in table questions
    const questions = body.questions.map( async (question: any) => {
        const { data: newData, error: newError } = await supabase
            .from('questions')
            .insert([{
                quiz_id: body.quiz_id,
                question_text: question.questionText
            }])
            .select("*");

        // Ajouter les réponses correspondant aux questions
        for (const answer of question.answers) {
            const { data: answerData, error: answerError } = await supabase
                .from('answers')
                .insert([{
                    question_id: newData[0].id,
                    answer_text: answer.answerText,
                    is_correct: answer.isCorrect
                }])
                .select("*");

            if (answerError) {
                console.log(answerError);
                return 'Error';
            }
        }

        if (newError) {
            console.log(newError);
            return 'Error';
        }

        return newData;
    });
    console.log(questions);

    return questions

});