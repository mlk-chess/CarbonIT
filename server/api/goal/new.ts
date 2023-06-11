import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const {data: newDataGoal, newErrorGoal} = await supabase
        .from('goal')
        .insert([{
            title: body.title,
            description: body.description,
            status: body.status,
            user_id: body.id,
        }]);

    if(newErrorGoal) {
        return 'Error';
    }

    return 'Success';
});