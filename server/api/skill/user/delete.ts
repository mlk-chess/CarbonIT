import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {

    if(event.context.auth.user.status === 1) {

    const supabase = serverSupabaseServiceRole(event);
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

    }
    return 'Error';
});