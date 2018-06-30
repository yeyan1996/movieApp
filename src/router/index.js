import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import movie from '@/pages/movie/movie'
import nowPlaying from '@/pages/movie/components/nowPlaying'
import detail from '@/pages/home/detail'
import movieCommingSoon from '@/pages/movie/components/movieCommingSoon'
import cinema from '@/pages/cinema/cinema'
import store from '@/store/index'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/city',
            name: 'city',
            component: city
        },
        {
            path: '/detail/:id',
            props: true,
            component: detail

        },
        {
            path: '/movie',
            name: 'movie',
            component: movie,
            children: [
                {
                    path: 'nowPlaying',
                    name: 'nowPlaying',
                    component: nowPlaying
                },
                {
                    path: 'movieCommingSoon',
                    name: 'movieCommingSoon',
                    component: movieCommingSoon
                }
            ]
        },
        {
            path: '/cinema',
            name: 'ciname',
            component: cinema
        }

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach(function (to, from, next) {
    console.log('beforeEach')
    store.commit('updateLoadingStatus', {isLoading: true})
    next()
})

// // 路由跳转后的钩子
// router.beforeResolve(function (to,from,next) {
//     console.log('.beforeResolve')
//     store.commit('updateLoadingStatus', {isLoading: false})
//   next()
// })
export default router
