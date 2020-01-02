import API from '../API/api';
import URL from '../API/urls';

export const get = {};

get.searchKeyWord = function(keyworld) {
    return new Promise((resolve, reject) => {
        API.get(URL.SEARCH_KEYWORLD + keyworld).then(res => {
            if (res) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    });
};
