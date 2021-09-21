import React from 'react';


function Footer() {
    return (
        <footer className="page-footer bg-success" style={{zIndex: '2'}}>
            <div className="footer-copyright">
            <div className="container">
            <span style={{cursor: 'pointer'}}>© {new Date().getFullYear()} Copyright Text</span>
            <a className="grey-text text-lighten-4 right" href="https://github.com/Zokirkhon1002/Vitrina-shop">Source Code</a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;