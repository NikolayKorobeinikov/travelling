import "../css/footer.css";

export function Footer() {
    return (
        <div className="footer__content">
            <div className="footer__desc">
                <p className="footer_txtFont">Copyright © Explorer</p>
                <p className="footer_txtItem"> Images used for demonstration purpose only</p>
                <p className="footer_txtColor">(Licenses)</p>
            </div>
            <div className="footer__text">
                <p className="footer_txtFont">Copyright ©</p>
                <p className="footer_txtColor">Studio Corvus</p>
                <p className="footer_txtFont">Powered by</p>
                <p className="footer_txtColor">Webflow</p>
            </div>
        </div>
    )
}