import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {


    if(event.context.auth.user.status === 1) {
    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    const {data: newDataTraining, newErrorTraining} = await supabase
        .from('training')
        .insert([{
            title: body.title,
            description: body.description,
            status: 0,
            date_start: body.dateTraining,
            time_start: body.timeTraining
        }]);

        console.log(body);

    if(newErrorTraining) {
        return 'Error';
    }

    return 'Success';

}
return 'Error';
});