import React from 'react';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import Featurejobs from '../FeatureJobs/Featurejobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <Featurejobs></Featurejobs>
        </div>
    );
};

export default Home;