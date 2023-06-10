import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {

    if(event.context.auth.user.status === 1 || event.context.auth.user.status === 0) {

    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    const {data, error} = await supabase
    .from('user_skill')
    .select('skill_id, level, skill:skill_id(title, status)')
    .eq('user_id', event.context.auth.user.id)

   

    if(error) {
        return 'Error';
    }
    

    return data;

    }
    return 'Error';
});