import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
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
});