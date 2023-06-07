import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const {data, error} = await supabase
        .from('user_skill')
        .delete()
        .eq('user_id', body.userId)
        .eq('skill_id', body.skillId);

    if(error) {
        return 'Error';
    }

    return 'Success';
});