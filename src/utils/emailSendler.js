import emailjs from '@emailjs/browser';

export const emailSendler = (data) => {
    emailjs
        .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
            to_email: data.email,
            subject: data.subject,
            message: data.message,
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
