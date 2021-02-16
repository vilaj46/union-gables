import * as React from "react";
import { Link } from 'gatsby';

const Footer = () => {
    return (<div>
        <h4>
            Union Gables Inn
        </h4>
        <p>55 Union Ave, Saratoga Springs, NY 12866, United States 518-584-1558</p>
        <p>stay@uniongables.com</p>
        <FooterLinks />
    </div>
    )
}

const FooterLinks = () => {
    return (
        <div>
            <Link to="#">Newsletter</Link>
            <Link to="#">Event Inquiries</Link>
            <Link to="#">Cookie Policy</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Sitemap</Link>
        </div>
    )
}

export default Footer;