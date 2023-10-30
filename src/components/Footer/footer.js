function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">Branding stuff</h4>
                    <p className="footer__text-pharahraph">If you want to make the search for a new table easier,
                        come to us!
                    </p>
                </div>
                <div className="footer__logo">
                    <img src="logos/logo.png" alt="logo" width="70" height="70" />
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="logos/facebook.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/twitter.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/google.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/linkedin.png"></img></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2023 IoT © Copyright all rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer