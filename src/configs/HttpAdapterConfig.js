import axios from 'axios';

import { REACT_APP_API_URL } from './EnvConfig';
import { showLoader, hideLoader } from '../utils/LoaderUtils';
import { showErrorToast } from '../utils/ToastUtils';

const httpAdapter = axios;
const httpAdapterInstance = httpAdapter.create({
    baseURL: REACT_APP_API_URL,
});

httpAdapterInstance.interceptors.request.use(
    config => {
        showLoader();
        return config;
    },
    error => {
        errorHandler(error);
    }
);

httpAdapterInstance.interceptors.response.use(
    response => {
        hideLoader();
        return response;
    },
    error => {
        errorHandler(error);
    }
);


const errorHandler = error => {
    const { message } = error.toJSON() || {};
    showErrorToast(message);
    hideLoader();
    Promise.reject(error);
};

export default httpAdapterInstance;