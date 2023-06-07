import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const { data: newDataQuiz, error: newErrorQuiz } = await supabase
        .from('quizzes')
        .insert([{
            quiz_name: body.quizName,
            theme: body.theme,
            description: body.description,
            difficulty: body.difficulty,
        }]);

    if (newErrorQuiz) {
        console.log(newErrorQuiz);
        
        return 'Error';
    }
    console.log("quiz created");
        
    return 'Success';
});