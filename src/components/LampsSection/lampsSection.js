import LampItem from '../LampItem/lampItem';

function LampsSection() {
    const items = [
      {
        image: "images/section2(1).jpg",
        title: "Lamp1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
      },
      {
        image: "images/section2(2).jpg",
        title: "Lamp2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
      },
      {
        image: "images/section2(3).jpg",
        title: "Lamp3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
      },
      {
        image: "images/section2(4).jpg",
        title: "Lamp4",
        description: "Your description for Lamp4."
      }
    ];
  
    return (
      <div className="section2">
        {items.map((item, index) => (
          <LampItem item={item} key={index} />
        ))}
      </div>
    );
  }
  
  export default LampsSection;