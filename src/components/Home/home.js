import Section1 from '../Section1/section1';
import '../../components/Section1/section1.css'
import LampsSection from '../LampsSection/lampsSection';
import '../../components/LampsSection/lampsSection.css'
import Button from '../Button/button';
import '../../components/Button/button.css'

function Home() {
    return (
      <div className="Home">
        <Section1/>
        <LampsSection/>
        <Button/>
      </div>
    );
  }
  
  export default Home;