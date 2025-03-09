import React from "react";

function InstagramFeed() {
  return (
    <div className="container mt-4">
      <div className="mbr-section-head">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Instagram Feed</strong>
        </h4>

      </div>
      <br/>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <iframe
            src="https://www.instagram.com/_passion4pics/embed"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;