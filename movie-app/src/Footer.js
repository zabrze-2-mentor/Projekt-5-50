import React from 'react';

const Footer = () => {
    return (
      <footer className="page-footer">
        <h1>Social media</h1>
        <div className="socials">
          <div className="container-fluid text-center">
            <div className="row">    
                <div className="col">
                    <a id="fb" href="#"><h2>Facebook</h2></a>
                </div>
                <div className="col">
                    <a id="yt" href="#"><h2>YouTube</h2></a>
                </div>
                <div className="col">
                    <a id="tweet" href="#"><h2>Twitter</h2></a>
                </div>
            </div>
          </div> 
        </div>
      </footer>
    );
};

export default Footer;