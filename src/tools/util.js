import URL from '../API/urls';

/**
 *  处理图片的地址，为每一个图片添加一个cover地址
 * @param {Array} data
 * @returns {Array}
 */
export function mapImageUrl(data) {
    return data.map(item => {
        item.cover = item.url.replace(/__\d*/, '__30');
        item.cover30 = item.cover;
        item.cover50 = item.url.replace(/__\d*/, '__50');
        item.cover70 = item.url.replace(/__\d*/, '__70');
        item.cover85 = item.url.replace(/__\d*/, '__85');
        item.cover100 = item.url;
        return item;
    });
}

/**
 * 将对象属性拼接成字符串
 * @param { String } url
 * @param { Object } option
 * @returns {String}
 */
export function parmasConcat(url, option) {
    let str = '';
    Object.keys(option).forEach(item => {
        str += `${item}=${option[item]}&`;
    });
    return url + '?' + str.slice(0, -1);
}

/**
 *
 * @param {String} str
 */
export function downloadImage(url) {
    const el = document.createElement('a');
    const lis = url.split('/');
    if (el.download) {
        el.download = lis[lis.length - 1];
        el.href = url;
    } else {
        el.download = lis[lis.length - 1];
        el.href = URL.BAIDU_IMAGE_DOWNLOADER + url;
    }
    el.click();
}
