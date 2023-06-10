import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {


    if(event.context.auth.user.status === 0 ||event.context.auth.user.status === 1) {
    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    const {data: newDataEvent, newErrorEvent} = await supabase
        .from('user_event')
        .insert([{
            eventId: body.eventId,
            userId: body.userId,
        }]);

    if(newErrorEvent) {
        return 'Error';
    }

    return 'Success';

}
return 'Error';
});