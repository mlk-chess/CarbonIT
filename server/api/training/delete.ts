import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
 if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {
    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    console.log(body.id);

    const {data: newDataTraining, newErrorTraining} = await supabase
        .from('training')
        .update({status:-1}).eq('id', body.id);

        console.log(newErrorTraining);

    if(newErrorTraining) {
        return 'Error';
    }

    return 'Success';
    }
    return 'Error';
}); 