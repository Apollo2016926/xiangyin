import request from '@/utils/request'


//获取品牌列表
export const reqTradeMarkList = (page, limit) => request({
  url: `/admin/product/baseTrademark/${page}/${limit}`,
  method: 'get'
});

//添加品牌
export const reqAddOrUpdateTradeMark = (tradeMark) => {
  if (!tradeMark.id) {
    return request({url: `/admin/product/baseTrademark/save`, method: 'post', data: tradeMark});
  } else {
    return request({url: `/admin/product/baseTrademark/update`, method: 'put', data: tradeMark});

  }
}
//删除品牌
export const reqDeleteTradeMark = (id) => request({
  url: `/admin/product/baseTrademark/remove/${id}`,
  method: 'delete'
});

//获取品牌信息
export const reqTradeMark = () => request({
  url: `/admin/product/baseTrademark/getTrademarkList`,
  method: 'get'
});

