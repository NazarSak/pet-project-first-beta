import { toast } from 'react-toastify';

export function showToast(text, type) {
  const toastOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };
  if (type === 'warning') {
    toastOptions.type = toast.TYPE.WARNING;
  } else if (type === 'error') {
    toastOptions.type = toast.TYPE.ERROR;
  } else {
    toastOptions.type = toast.TYPE.SUCCESS;
  }

  toast(text, toastOptions);
}
