import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Валидация
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

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
