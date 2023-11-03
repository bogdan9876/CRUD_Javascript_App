import './App.css';
import Header from './components/Header/header.js';
import './components/Header/header.css';
import Section1 from './components/Section1/section1';
import './components/Section1/section1.css';
import LampsSection from './components/LampsSection/lampsSection';
import './components/LampsSection/lampsSection.css';
import Button from './components/Button/button.js';
import './components/Button/button.css';
import Footer from './components/Footer/footer.js';
import './components/Footer/footer.css';

function App() {
  return (
    <div>
      <Header/>
      <Section1/>
      <LampsSection/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default App;
