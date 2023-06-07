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
            }]);

        if (newError) {
            console.log(newError);
            return 'Error';
        }
    });
    console.log("Questions created");

    return 1;
});