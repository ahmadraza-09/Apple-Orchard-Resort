import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Vanasthali Jungle Resort</title>
                <meta name="description" content="Explore the photo gallery of Vanasthali Jungle Resort in Jim Corbett. Browse images of luxurious rooms, wildlife safaris, scenic landscapes, and memorable experiences at our resort." />
                <meta name="keywords" content="Vanasthali Jungle Resort gallery, Jim Corbett resort photos, wildlife safari pictures, luxury resort images, Corbett National Park gallery, scenic photos, Ramnagar resort images, nature retreat gallery, Corbett experiences, jungle resort photos" />
                <link rel="canonical" href="https://vanasthalicorbett.com/gallery" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Gallery - Vanasthali Jungle Resort",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/gallery"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
