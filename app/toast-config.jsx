
import { Toaster } from 'react-hot-toast'


export const ToastConfig = () => {
  return (
    <Toaster
      containerStyle={{
        top: 'auto',
        bottom: 32,
        right: 32,
      }}
      gutter={16}

      toastOptions={{
        position: 'bottom-right',
        style: {
          wordBreak: 'break-all',
          maxWidth: '35rem',
          background: '#212b36',
          color: 'white',
          borderRadius: '16px',
          border: '1px #363636 solid',
          fontWeight: '500',
          padding: '0.5rem 0.75rem',
        },
        success: {
          duration: 6000,
        },
        error: {
          duration: 6000,
        },
      }}
    />
  )
}