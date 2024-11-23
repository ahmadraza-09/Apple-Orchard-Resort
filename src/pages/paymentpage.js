import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment - Vanasthali Jungle Resort</title>
                <meta name="description" content="Secure and easy payment options for booking your stay at Vanasthali Jungle Resort in Jim Corbett. Make payments via multiple methods and confirm your reservation with ease." />
                <meta name="keywords" content="Vanasthali Jungle Resort payment, Jim Corbett resort booking, online payment for resort, Vanasthali payment options, secure payment gateway, Jim Corbett resort reservations, resort payment methods, confirm booking payment" />
                <link rel="canonical" href="https://vanasthalicorbett.com/payment" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Vanasthali Jungle Resort",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/payment"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <Payment />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default PaymentPage;
