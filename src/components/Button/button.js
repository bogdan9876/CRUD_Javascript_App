function Button({ onClick }) {
    return (
        <section className="button">
            <div className="view-more">
                <button type="button" className="view-more-button" onClick={onClick}><a>View More</a></button>
            </div>
        </section>
    );
}

export default Button;
