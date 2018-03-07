
//require.ensure()，同时将模块添加到一个分开的 chunk 当中。这个新的 chunk 会被 webpack 通过 jsonp 来按需加载。
const console = r => require.ensure([], () => r(require('../page/console/console')), 'console');
const dashboard = r => require.ensure([], () => r(require('../components/dashboard')), 'dashboard');
const dashboard1 = r => require.ensure([], () => r(require('../components/dashboard1')), 'dashboard1');

const routerConfig = [{
    path: '/console',
    component:console,
    redirect:'/console/dashboard',  //根据实际业务 重定向到之路由
    children: [//二级路由  path不加 '/'  path 不加 '/'  path 不加 '/'  重要的事情说三遍  加了 '/' 代表根级
        {
            path:'dashboard',//优惠券活动列表  抵扣券活动列表
            name:"dashboard",
            component:dashboard,
            meta: { keepAlive: true }
        },
        {
            path:'dashboard1',//优惠券活动列表  抵扣券活动列表
            name:"dashboard1",
            component:dashboard1,
        },

    ]
}];

export default routerConfig;
