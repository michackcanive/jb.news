import { loadStripe } from "@stripe/stripe-js";
export async function getStripeJs(){
    const stripejs= await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_PUBLIC_KEY)
    return stripejs
}