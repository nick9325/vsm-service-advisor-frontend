
import 'styles/theme.scss';
import { ToastConfig } from './toast-config';

export const metadata = {
    title: 'Vehicare - Service Advisor Dashboard',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                    {children}
                <ToastConfig />
            </body>
        </html>
    )
}
