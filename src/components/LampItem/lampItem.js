function LampItem({ item }) {
  return (
    <div className="section2-column">
      <img className="section2-image" src={item.image} alt={item.title} width="400" height="300" />
      <h3 className="section2-text-title">{item.title}</h3>
      <p className="section2-text-paragraph">{item.description}</p>
    </div>
  );
}

export default LampItem;