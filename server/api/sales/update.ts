import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
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

        if (error) {
            return 'Error';
        }
        return 'Success';
    }
    return 'Error';
});