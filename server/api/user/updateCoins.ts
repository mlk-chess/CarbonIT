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

        const {data: userData, userError} = await supabase
        .from('user')
        .update({
            points: event.context.auth.user.points+100,
        })
        .eq('auth_id', event.context.auth.user.auth_id);

        return 'Success';
    }
    return 'Error';
});