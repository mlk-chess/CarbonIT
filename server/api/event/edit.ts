import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    
    const {data: newDataEvent, error:newErrorEvent} = await supabase
        .from('event')
        .update({
            title: body.title,
            description: body.description,
            date: body.dateEvent,
            time: body.timeEvent
        }).eq('id',body.id);
    

    if(newErrorEvent) {
        return 'Error';
    }

    return 'Success';
});

   