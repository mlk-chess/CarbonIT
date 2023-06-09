import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {

    if(event.context.auth.userStatus === 1) {
    const supabase = serverSupabaseServiceRole(event);
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
}
return 'Error';
});

   