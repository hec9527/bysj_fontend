import { baseUrl } from '../config/baseURL';

const URL = {};

// --------   基础路径    --------
URL.host = window.location.host;
URL.parmas = window.location.search;

// ----------    网络请求路径      ----------
// 关键字搜索
URL.SEARCH_KEYWORLD = baseUrl + '/a/get/home/keyworld';

// bing最近7日的图片数据
URL.BIYING_SEVERN_DAY = baseUrl + '/a/get/getBingDaily';

// 每日英语数据
URL.ENGLIST_DAILY_POST = baseUrl + '/a/get/getEnglishDaily';

// 请求转发
URL.FORWRAD_REQUEST = baseUrl + '/a/get/forward';

// 图片的分类信息
URL.IMAGES_TYPE_INFO = baseUrl + '/a/get/getImageCategory';

// 获取指定分类的图片
URL.IMAGE_TYPE_DATA = baseUrl + '/a/get/getImageByCategory';

// TODO   后端添加相应的接口
// 加载出错的图片
URL.IMAGES_LOAD_ERROR = baseUrl + '/a/get/imageLoadError';

// 用户登录URL
URL.USER_LOGIN = baseUrl + '/a/post/userLogin';

// 用户注册URL
URL.USER_REGIST = baseUrl + '/a/post/userRegist';

// 百度图片下载API
URL.BAIDU_IMAGE_DOWNLOADER = 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=';

export default URL;
