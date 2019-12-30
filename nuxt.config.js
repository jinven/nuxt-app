export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    env: {
        users: [
            { id: 1, name: 'Kobe Bryant', number: 24 },
            { id: 2, name: 'Michael Jordan', number: 23 },
            { id: 3, name: 'Stephen Curry', number: 30 },
            { id: 4, name: 'Lebron James', number: 23 },
            { id: 5, name: 'Kevin Durant', number: 35 },
            { id: 6, name: 'Kyrie Irving', number: 2 }
        ]
    },
    generate: {
        routes: [
            '/1',
            '/2',
            '/3',
            '/4',
            '/5',
            '/6'
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/element-ui'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) { }
    },
    router: {
        extendRoutes (routes, resolve) {
            const indexIndex = routes.findIndex(route => route.name === 'index')
            let index;
            if(indexIndex>=0 && routes[indexIndex.children]){
                index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
                console.log('routes-children', routes[indexIndex].children)
                routes[indexIndex].children[index] = {
                    ...routes[indexIndex].children[index],
                    components: {
                        default: routes[indexIndex].children[index].component,
                        left: resolve(__dirname, 'components/childLeft.vue')
                    },
                    chunkNames: {
                        left: 'components/childLeft'
                    }
                }
            }
            index = routes.findIndex(route => route.name === 'main')
            routes[index] = {
                ...routes[index],
                components: {
                    default: routes[index].component,
                    top: resolve(__dirname, 'components/mainTop.vue')
                },
                chunkNames: {
                    top: 'components/mainTop'
                }
            }
        },
        middleware: 'stats'
    }
}
