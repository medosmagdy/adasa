import React from 'react';
import Hero from './Hero';
import FeaturedArticles from './FeaturedArticles';
import Categories from './Categories';
import LatestArticles from './LatestArticles';
import Newsletter from './Newsletter';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <main className="flex-grow pt-20 bg-[#0a0a0a]">
            <Hero />
            <FeaturedArticles />
            <Categories />
            <LatestArticles />
            <Newsletter />
            <Footer />
        </main>
    );
};

export default Home;