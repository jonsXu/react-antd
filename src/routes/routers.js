const routes = [
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'canvas',
        key:'/admin/canvas',
        children:[
            {
                title:'万花筒',
                key:'/admin/canvas/circle'
            },
            {
                title:'基础动画',
                key:'/admin/canvas/baseDonghua'
            }
        ]
    },
    {
        title:'地图',
        key:'/admin/map',
        children:[
            {
                title:'地图查看',
                key:'/admin/map/query'
            },
            {
                title:'地图介绍',
                key:'/admin/map/des'
            }
        ]
    }
]

export default routes
