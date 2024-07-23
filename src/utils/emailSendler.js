import emailjs from '@emailjs/browser';

export const emailSendler = () => {
    emailjs
        .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID,{
                to_email: 'kolesnikkosta572@gmail.com',
                subject: 'Hello',
                message: 'test'
            },
            {
                publicKey: import.meta.env.VITE_PUBLIC_KEY
            },
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
                console.log('FAILED...', err);
            },
        );
}
    