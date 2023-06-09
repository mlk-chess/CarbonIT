import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.userStatus === 1) {
        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        const {data: newDataUser, error: newErrorUser} = await supabase
            .from('user')
            .update({
                lastname: body.name,
                firstname: body.firstname,
                status: body.status,
                email: body.email,
                city: body.city,
                zipcode: body.zip,
                address: body.address,
                phone: body.phone,
                rib: body.rib,
            })
            .eq('id', body.id);

        if (newErrorUser) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});