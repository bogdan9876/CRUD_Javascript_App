function Button({ onClick, label }) {
    return (
        <section className="button">
            <div className="view-more">
                <button type="button" className="view-more-button" onClick={onClick}><a>{label}</a></button>
            </div>
        </section>
    );
}

export default Button;
