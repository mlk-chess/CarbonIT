import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if(event.context.auth.userStatus === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const {data: data, error: error} = await supabase
            .from('customer')
            .insert([{
                name: body.name,
                contact: body.contact,
                consultant: body.consultant,
                sales: body.sales,
            }]);

        if (error) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});