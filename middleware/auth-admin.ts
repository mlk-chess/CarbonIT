import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useSupabaseUser();

    if (!user.value && to.path !== '/') {
        return navigateTo('/');
    } else if (user.value && to.path === '/') {
        return navigateTo('/private');
    }

    if (user.value) {
        const userData = await $fetch('/api/user/get?id=' + user.value.id, {
            method: 'get',
        });

        if (userData[0].status !== 1) {
            return navigateTo('/');
        }
    }
});