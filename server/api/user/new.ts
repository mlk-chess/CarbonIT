import {serverSupabaseServiceRole} from '#supabase/server';

export default defineEventHandler(async (event) => {
    if (event.context.auth.userStatus === 1) {

        const supabase = serverSupabaseServiceRole(event);
        const body = await readBody(event);

        function generatePassword() {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let password = '';

            for (let i = 0; i < 16; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }

            return password;
        }

        const generatedPassword = generatePassword();

        const {data: dataUser, error: errorUser} = await supabase.auth.admin.createUser({
            email: body.email,
            password: generatedPassword,
            email_confirm: true
        })

        if (errorUser) {
            return 'Error';
        }

        const {data: newDataUser, error: newErrorUser} = await supabase
            .from('user')
            .insert([{
                lastname: body.name,
                firstname: body.firstname,
                status: body.status,
                email: body.email,
                city: body.city,
                zipcode: body.zip,
                address: body.address,
                phone: body.phone,
                rib: body.rib,
                auth_id: dataUser.user.id
            }]);

        if (newErrorUser) {
            return 'Error';
        }

        const {data: tasksData, tasksError} = await supabase.from('task').select();

        if (tasksError) {
            return 'Error';
        }

        for (let i = 0; i < tasksData.length; i++) {
            const {data: newTaskData, error: newTaskError} = await supabase.from('user_task').insert([{
                userId: dataUser.user.id,
                taskId: tasksData[i].id,
                status: false
            }]);

            if (newTaskError) {
                return 'Error';
            }
        }

        const {data, error} = await supabase.auth.resetPasswordForEmail(body.email, {
            redirectTo: 'http://localhost:3000/reset-password',
        });

        if (error) {
            return 'Error';
        }

        return 'Success';
    }
    return 'Error';
});