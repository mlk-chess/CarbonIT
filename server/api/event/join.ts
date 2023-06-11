import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {
        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const {data: newDataEvent, newErrorEvent} = await supabase
            .from('user_event')
            .insert([{
                eventId: body.eventId,
                userId: body.userId,
            }]);

        if (newErrorEvent) {
            return 'Error';
        }

        const {data: userData, userError} = await supabase
            .from('user')
            .update({
                points: event.context.auth.user.points+50,
                coins: event.context.auth.user.coins+100,
            })
            .eq('auth_id', event.context.auth.user.auth_id);

        if (userError) {
            return 'Error';
        }

        return 'Success';

    }
    return 'Error';
});