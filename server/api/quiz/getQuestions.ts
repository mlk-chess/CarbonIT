import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.user.status === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const query = await getQuery(event);

        const { data, error } = await supabase
            .from('quizzes')
            .select()
            .eq('id', query.id)
        
            console.log(query.id);
            

        //Check si data est bien rempli
        if (data[0] === undefined) {
            console.log('Erreur: Impossible de récupérer les données du quiz');
            return 'Error';
        } else {
            // Requête pour récupérer les questions
            const { data: dataQuestions, error: errorQuestions } = await supabase
                .from('questions')
                .select('*, answers (*)')
                .eq('quiz_id', query.id)
                

            // On met les questions et les réponses qui vont avec la question dans la variable questionsData
            if (dataQuestions) {
                console.log(dataQuestions);
                
                return dataQuestions;
            } else {
                console.log('Erreur: Impossible de récupérer les questions et/ou les réponses');
            }


            if (error) {
                console.log(error);
            } else {
                return data;
            }
        }

    }
    return 'Error';
});