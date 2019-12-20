import service from './requset'


//登录接口
export function Login(data){
    return service.request({
        method: "post",
        url: "/login",
        data
    })
}



//注册接口
export function Reg(data){
    return service.request({
        method: "post",
        url: "/reg",
        data
    })
}


//文章发布接口
export function AddArticle(data){
    return service.request({
        method: "post",
        url: "/AddArticle",
        data
    })
}

//文章请求接口
export function ArticleList(data){
    return service.request({
        method: "post",
        url: "/articleList",
        data
    })
}

//文章删除接口
export function DelArticle(data){
    return service.request({
        method: "post",
        url: "/delArticle",
        data
    })
}

//文章详情接口
export function ArtDetail(data){
    return service.request({
        method: "post",
        url: "/artDetail",
        data
    })
}

//文章搜索接口
export function Search(data){
    return service.request({
        method: "post",
        url: "/search",
        data
    })
}


//测试数据接口
export function Test(data){
    return service.request({
        method: "post",
        url: "/testt",
        data
    })
}