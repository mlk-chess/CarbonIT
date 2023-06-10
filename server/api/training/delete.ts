import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    console.log(body.id);

    const {data: newDataTraining, newErrorTraining} = await supabase
        .from('training')
        .delete().eq('id', body.id);

    if(newErrorTraining) {
        return 'Error';
    }

    return 'Success';
}); 