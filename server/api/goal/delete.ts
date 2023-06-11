import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    console.log(body.id);

    const {data: newDataGoal, newErrorGoal} = await supabase
        .from('goal')
        .delete().eq('id', body.id);

    if(newErrorGoal) {
        return 'Error';
    }

    return 'Success';
}); 