import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if ( event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);
        const body = await readBody(event);


        const {data: dataUserMission, error: errorUserMission} = await supabase
            .from('user_mission')
            .insert([{
                mission_id : body.missionId,
                user_id : body.userId,
            }]).select()

        const {data, error} = await supabase
            .from('mission')
            .update({
               status : 2
            }).eq('id', dataUserMission[0].mission_id)

        if (error) {
            return 'Error';
        }
        return "Success";
    }
    return 'Error';
});