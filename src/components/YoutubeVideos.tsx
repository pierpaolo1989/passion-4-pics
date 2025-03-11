import React from "react";

function YouTubeVideos() {
  const videos = [
    { id: "5x3Hy7zie94", title: "Lightroom Tutorial basics" },
    { id: "FwlSfetKBwk", title: "Color grade" },
    { id: "OSj7PaRb1bc", title: "Cinemaric editing" },
  ];

  return (
    <div className="container mt-4">
      <div className="mbr-section-head">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Video editing tutorials</strong>
        </h4>
      </div>
      <br />
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-4 mb-4" key={video.id}>
            <div className="card">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title text-center text-white">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTubeVideos;