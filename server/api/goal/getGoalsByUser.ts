import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {

      
        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);

        const {data, error} = await supabase.from('goal').select().eq('user_id', event.context.auth.user.id).limit(4);

        if (error) {
            return 'Error';
        }
        return data;
    }
    return 'Error';
});