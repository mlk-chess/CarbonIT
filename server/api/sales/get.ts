import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if(event.context.auth.userStatus === 1) {
        const supabase = serverSupabaseServiceRole(event);

        const {data, error} = await supabase
            .from('customer')
            .select();

        if (error) {
            return 'Error';
        }

        return data;
    }
    return 'Error';
});