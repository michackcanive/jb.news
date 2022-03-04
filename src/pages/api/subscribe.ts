import { NextRequest, NextResponse } from "next/server"
import { getSession } from "next-auth/react"
import { stripe } from "../../server/stripe";

export default async (resquest: NextRequest, response: NextResponse) => {
    const session = await getSession({ resquest })

    const stripeCustomer = await stripe.customers.create({
        email: 'mechackteste@gmail.com',
        name: 'teste'
    })

    if (resquest.method === 'POST') {
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: 'price_1KVXUzJ8YRWSg66JKX7mvOv2',
                    quantity: 1
                }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })

        return response.json({ sessionId: stripeCheckoutSession.id })

    } else {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method not allowed')
    }

}