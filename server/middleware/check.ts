import {serverSupabaseClient, serverSupabaseUser} from '#supabase/server';
import {navigateTo} from "nuxt/dist/app";
export default defineEventHandler(async (event) => {
    const path = getRequestPath(event);
    const splitPath = path.split('/');

    if (splitPath[1] === 'api' && splitPath[2] !== 'middleware' && splitPath[2] !== '_supabase') {
        const currentUser =await serverSupabaseUser(event);
        const supabase = serverSupabaseClient(event);

        const userData = await $fetch('/api/middleware/get?id=' + currentUser.id, {
            method: 'get',
        });

        if (userData) {
            event.context.auth = { userStatus: userData[0].status }
        }
    }
})