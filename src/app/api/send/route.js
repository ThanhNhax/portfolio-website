import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmial = process.env.FROM_EMAIL;

export const POST = async () => {
  try {
    const data = await resend.emails.send({
      from: fromEmial,
      to: [''], 
      subject: 'Hello world!',
      react: (
        <>
          <p>Email:</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
