/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')


// --- 登录与授权 Demo --- //
// 登录接口
router.get('/login', null, controllers.login)
// 用户信息接口（可以用来验证登录态）
router.get('/user', null, controllers.user)

module.exports = router
