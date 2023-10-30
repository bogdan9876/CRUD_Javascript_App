function Section2() {
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
      }
  ];

  return (
      <div className="section2">
          {items.map((item, index) => (
              <div className={`section2-column${index + 1}`} key={index}>
                  <img className="section2-image" src={item.image} alt={`lamp${index + 1}`} width="400" height="300" />
                  <h3 className="section2-text-title">{item.title}</h3>
                  <p className="section2-text-paragraph">{item.description}</p>
              </div>
          ))}
      </div>
  );
}

export default Section2;
