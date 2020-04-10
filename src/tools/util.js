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
