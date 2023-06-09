import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
    const body = await readBody(event);

    const {data, error} = await supabase
        .from('customer')
        .update({
            name: body.name,
            contact: body.contact,
            consultant: body.consultant,
            sales: body.sales,
        })
        .eq('id', body.id);

    if(error) {
        return 'Error';
    }

    return 'Success';
});