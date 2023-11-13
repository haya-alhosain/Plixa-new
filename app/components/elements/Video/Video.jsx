import "./Video.css";
export default function Video() {
  return (
    <>
      <section className="video-section">
        <div className="container">
          <video width="100%" height="100%" controls src="/video-player.mp4" type="video/mp4" autoPlay></video>
        </div>
      </section>
    </>
  );
}
