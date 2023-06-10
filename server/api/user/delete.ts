import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if(event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        if (body.id === event.context.auth.user.id) {
            return 'Error';
        }


        const { data, error } = await supabase.auth.admin.deleteUser(
            body.id
        )


        if (error) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});