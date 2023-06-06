import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const {data: selectData, error: selectError} = await supabase
        .from('user_skill')
        .select()
        .eq('user_id', body.userId)
        .eq('skill_id', body.skillId);

    if (selectData.length === 0) {
        const {data, error} = await supabase
            .from('user_skill')
            .insert([{
                user_id: body.userId,
                skill_id: body.skillId,
            }]);

        if(error) {
            return 'Error';
        }
    }

    return 'Success';
});