import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
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
});