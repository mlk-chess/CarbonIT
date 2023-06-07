import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);

    const { data, error } = await supabase
        .from('quizzes')
        .select('*')

    if (error) {
        return 'Error';
    }
    return data;
});