import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
      
        const {data, error} = await supabase.from('user_task').select('status').eq('taskId', 1).eq('userId', event.context.auth.user.auth_id);

        if (error) {
            return 'Error';
        }
        return data;
    }
    return 'Error';
});