import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const { data: newData, error: newError } = await supabase
        .from('questions')
        .insert([{
            quiz_id: body.quizId,
            question_text: body.questionText
        }]);

    if (newError) {
        console.log(newError);
        return 'Error';
    }
    console.log("Questions created");

    return 'Success';
});