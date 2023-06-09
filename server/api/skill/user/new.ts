import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {

    if(event.context.auth.user.status === 1) {
    const supabase = serverSupabaseServiceRole(event);
    const body = await readBody(event);

    
    const {data: selectData, error: selectError} = await supabase
        .from('user_skill')
        .select()
        .eq('user_id', body.userId)
        .eq('skill_id', body.skillId);

    if (selectData.length === 0) {
        const {data, error} = await supabase
            .from('user_skill')
            .insert([{
                user_id: body.userId,
                skill_id: body.skillId,
                level: body.level,
            }]);

        if(error) {
            return 'Error';
        }
    }

    return 'Success';
}
return 'Error';
});