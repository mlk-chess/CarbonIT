import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0) {
        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const {data: newDataUser, error: newErrorUser} = await supabase
            .from('user')
            .update({
                coins: body.coins
            })
            .eq('auth_id', event.context.auth.user.auth_id);

        if (newErrorUser) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});