import { useState, useEffect } from "react";

function LazyLoadedVideo({ src, border }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const videoElement = document.getElementById("lazy-video");

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      id="lazy-video"
      className={border ? "videoHero rounded-md" : "videoHero"}
      src={loaded ? src : ""}
      autoPlay
      muted
      loop
    />
  );
}

export default LazyLoadedVideo;
