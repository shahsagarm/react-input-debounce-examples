import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 8000,
    dismissible: true,
    position: {
        x: 'right',
        y: 'top',
    }
});

export const showSuccessToast = (message) => {
    return notyf.success(message);
};

export const showErrorToast = (message) => {
    return notyf.error(message);
};