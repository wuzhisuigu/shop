// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },


    ]
})


// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行
    //     next()  放行    next('/login')  强制跳转

    if (to.path === '/login') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})


export default router