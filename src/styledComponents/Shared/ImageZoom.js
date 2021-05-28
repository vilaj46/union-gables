import React from "react";

function ImageZoom({ zoom, src, alt, background, largeImage }) {
  const zoomRef = React.useRef(zoom.clone({ background }));

  // function attachZoom(image) {
  //   zoomRef.current.attach(image);
  // }

  function attachZoom(largeImage) {
    zoomRef.current.attach(largeImage);
  }

  return (
    <img
      src={src}
      alt={alt}
      ref={attachZoom}
      data-zoom-src={largeImage}
      style={{ border: "2px solid black", width: "50%" }}
    />
  );
}
export default ImageZoom;
