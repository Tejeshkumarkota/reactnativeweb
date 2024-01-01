import * as config from './config';

/* ------------------------------------------------------------------------------
*getFullUrl
Description: Function to get full URL from shorthand method names
Usage: getFullUrl('endpoint1'); -> http://www.server.com/api/endpoint1
@param endpoint : String {IN} {required} - enpoint string to get full url.
@param api_prefix : String = 'api/' {IN} {optional} - prefix of endpoint, if any.
@return : String = '{SERVER_URL}/api' - Full endpoint url
-------------------------------------------------------------------------------- */


const getFullUrl = (endpoint, api_prefix = 'api') => {
  if (__DEV__ && config.LIVE_API_TESTING === false) {
    return `${config.SERVER_URL_UAT}${api_prefix}${endpoint}`;
  }
  return `${config.SERVER_URL_PRD}${api_prefix}${endpoint}`;
};


export { getFullUrl };

