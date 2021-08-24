import { REACT_APP_API_URL } from '../configs/EnvConfig';
import httpAdapter from '../configs/HttpAdapterConfig';

export const fetchPosts = (query) => {
    // let url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&search=react.js';
    let url = `${REACT_APP_API_URL}/search_by_date?tags=story`;
    if (query) {
        url += `&query=${query}`;
    }
    return httpAdapter.get(url);
};

