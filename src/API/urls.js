import { baseUrl } from '../config/baseURL';

const URL = {};

URL.host = window.location.host;
URL.parmas = window.location.search;

URL.SEARCH_KEYWORLD = baseUrl + '/a/get/list/keyworld?kw=';

export default URL;
