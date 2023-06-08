// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            blagueToken: process.env.BLAGUE_TOKEN,
        }
    },

    app: {
        head: {
            title: 'Carbon',
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            // bodyAttrs: {
            //     class: 'bg-custom-black'
            // },
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ]
})
