import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const supabase = serverSupabaseClient(event);
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

    const { data: dataUser, error: errorUser } = await supabase.auth.signUp({
        email: body.email,
        password: generatedPassword,
    })

    if(errorUser) {
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

    if(newErrorUser) {
        return 'Error';
    }

    return 'Success';
});