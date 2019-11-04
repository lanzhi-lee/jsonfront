import axios from 'axios'

/**
 * 通用ajax请求.
 * @param {Object} option - ajax可选参数.
 * @param {string} option.method - 请求的方法 get post.
 * @param {string} option.url - 请求的链接.
 * @param {Object} option.data - 请求的参数.
 * @param {boolean} option.withCredentials - 请求是否需要凭证.
 * @param {boolean} option.userData.login - 接口登陆跳转标示，默认强行跳转登陆
 * @param {boolean} option.userData.toastContext - toast Context
 */

interface DataCommon {
    method: string,
    url: string,
    headers: Object,
    withCredentials: boolean,
    params?: Object,
    data?: Object
}

const CommonAjax = (option) => {
    let dataCommon: DataCommon = {
        method: option.method || 'get',
        url: '116.62.222.97:7777' + option.url,
        headers: option.header,
        withCredentials: option.withCredentials || false
    }

    // 方式不同 参数名字不同
    option.method === 'get' ? dataCommon.params = option.data : dataCommon.data = option.data
    return new Promise((resolve, reject) => {
        axios(<any>dataCommon)
            .then(res => {
                if (res.data.code === '200') resolve(res.data)
                reject(res.data)
            })
            .catch((error) => { reject(error) })
    })
}

export default CommonAjax
