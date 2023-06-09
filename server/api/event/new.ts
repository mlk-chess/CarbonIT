import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {


    if(event.context.auth.userStatus === 1) {
    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    const {data: newDataEvent, newErrorEvent} = await supabase
        .from('event')
        .insert([{
            title: body.title,
            description: body.description,
            date: body.dateEvent,
            time: body.timeEvent
        }]);

    if(newErrorEvent) {
        return 'Error';
    }

    return 'Success';

}
return 'Error';
});