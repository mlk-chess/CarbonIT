import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 0 || event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);


        let id = null;

        if(query.id){
            id = query.id
        }else{
           id = event.context.auth.user.id
        }
      
      
        const {data, error} = await supabase
        .from('user_mission')
        .select('id, mission:mission_id(title,description,date_start,date_end,customer:customer_id(name))')
        .eq('user_id', id)


        if (error) {
            return 'Error';
        }



        const today = new Date();

        const filteredData = data.filter(item => {
          const startDate = new Date(item.mission.date_start);
          const endDate = new Date(item.mission.date_end);
        
          return today < startDate || (today >= startDate && today <= endDate);
        });
        
        return filteredData;
    }
    return 'Error';
});