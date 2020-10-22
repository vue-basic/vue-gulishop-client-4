import Ajax from '@/ajax/Ajax'

//请求地址: /api/product/getBaseCategoryList
//请求方式: GET
// 参数类型:无

export const reqCategoryList = () => {
    return Ajax ({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// reqCategoryList()