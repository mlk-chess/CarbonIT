import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {

    if (event.context.auth.user.status === 1) {
        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const { data: newDataQuiz, error: newErrorQuiz } = await supabase
            .from('quizzes')
            .insert([{
                quiz_name: body.quizName,
                theme: body.theme,
                description: body.description,
                difficulty: body.difficulty,
            }])
            .select("*");

        if (newErrorQuiz) {
            return 'Error';
        }

        return newDataQuiz

    }
    return 'Error';
});