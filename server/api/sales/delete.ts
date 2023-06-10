import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if(event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const {data: data, error: error} = await supabase
            .from('customer')
            .delete()
            .eq('id', body.id);

        if (error) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});