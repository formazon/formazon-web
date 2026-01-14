import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(data: unknown): data is ContactFormData {
    if (!data || typeof data !== 'object') {
        return false;
    }
    
    const { name, email, message } = data as Record<string, unknown>;
    
    return (
        typeof name === 'string' &&
        name.trim().length > 0 &&
        typeof email === 'string' &&
        EMAIL_REGEX.test(email) &&
        typeof message === 'string' &&
        message.trim().length > 0
    );
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Валидация
        if (!validateContactForm(body)) {
            return NextResponse.json(
                { error: 'Invalid form data. All fields are required and email must be valid.' },
                { status: 400 }
            );
        }

        const { name, email, message } = body;

        // TODO: Здесь должна быть интеграция с сервисом отправки email
        // Например: Formspree, Resend, SendGrid, или собственный SMTP сервер
        // 
        // Пример для Resend:
        // await resend.emails.send({
        //     from: 'contact@formazon.com',
        //     to: 'mail@formazon.com',
        //     subject: `Contact form submission from ${name}`,
        //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        // });

        // Имитация успешной отправки (удалить после интеграции с реальным сервисом)
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
