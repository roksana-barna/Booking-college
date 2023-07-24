import React from 'react';
import HomeCard from '../HomeCard';
import Banner from '../Banner';
import Collegegallery from '../Collegegallery';
import RecommendedResearch from '../RecommendedResearch';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Collegegallery></Collegegallery>
            <RecommendedResearch></RecommendedResearch>
      </div>
    );
};

export default Home;