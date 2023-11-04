function LampItem({ item }) {
  return (
    <div className="lamp-section-column">
      <img className="lamp-section-image" src={item.image} alt={item.title} width="400" height="300" />
      <h3 className="lamp-section-text-title">{item.title}</h3>
      <p className="lamp-section-text-paragraph">{item.description}</p>
    </div>
  );
}

export default LampItem;