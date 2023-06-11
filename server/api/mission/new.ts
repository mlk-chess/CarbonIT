import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);


        console.log(body)
        const {data: data, error: error} = await supabase
            .from('mission')
            .insert([{
                title: body.title,
                description: body.description,
                date_end: body.dateEnd,
                date_start: body.dateStart,
                status: 1,
                localisation : body.place,
                customer_id : body.customerId
            }]);

        if (error) {
            return 'Error';
        }
        return data;
    }
    return 'Error';
});