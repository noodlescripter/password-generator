import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
    );
}

export default Footer;
