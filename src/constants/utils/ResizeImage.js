// @Referance https://cloudinary.com/documentation/image_transformations
export const getResizedImage = (url, config) => {
    const {
        width = null,
        height = null,
        crop = 'fit',
        quality = 'auto',
    } = config;
    const uArr = url.split('/');
    const dimension = [];
    if (height) {
        dimension.push(`h_${height}`);
    }
    if (width) {
        dimension.push(`w_${width}`);
    }
    dimension.push(`c_${crop}`, `q_${quality}`);
    uArr[6] = dimension.join(',');
    // console.log(url,props,uArr)

    return uArr.join('/');
};
