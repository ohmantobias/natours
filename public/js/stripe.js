/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51KVx7NGcYqGbpxzVb9l6dpPdqC91oZ12dR9tkDJRJFIgd9M5CjBT54ZiVEVuG9IspYlQJWeoqbBI5YR9yWhhuJfg00SZfDSmR3'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
