import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.userStatus === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);

        const {data, error} = await supabase
            .from('user')
            .select()
            .eq('id', query.id);

        if (error) {
            return 'Error';
        }
        return data;
    }
    return 'Error';
});