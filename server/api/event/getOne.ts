import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);

        const {data, error} = await supabase
            .from('event')
            .select()
            .eq('id', query.id);

        if (error) {
            return 'Error';
        }
        return data;
    }
    return 'Error';
});