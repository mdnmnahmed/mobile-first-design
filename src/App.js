import React from 'react';
import Languages from './Components/Languages/Languages';
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';

const App = () => {
    return (
        <>
            <Navbar />
            <TopBanner />
            <Languages />
        </>
    );
}

export default App;