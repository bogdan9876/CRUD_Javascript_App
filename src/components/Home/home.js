import React, { useState } from 'react';
import Section1 from '../Section1/section1';
import '../../components/Section1/section1.css'
import LampsSection from '../LampsSection/lampsSection';
import '../../components/LampsSection/lampsSection.css'
import Button from '../Button/button';
import '../../components/Button/button.css'

function Home() {
    const [sectionCount, setSectionCount] = useState(1);

    const handleButtonClick = () => {
        if (sectionCount === 1) {
            setSectionCount(sectionCount + 1);
        } else {
            setSectionCount(sectionCount - 1);
        }
    };

    return (
      <div className="Home">
        <Section1/>
        {[...Array(sectionCount)].map((_, index) => (
          <LampsSection key={index} />
        ))}
        <Button onClick={handleButtonClick} label={sectionCount === 1 ? 'View More' : 'View Less'}/>
      </div>
    );
}
  
export default Home;
