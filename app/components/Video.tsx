import { ptSerif } from "../fonts";

export default function Video() {
  return (
    <div
      className="bg-cover bg-fixed"
      style={{
        backgroundImage: "url(img/11.jpg)",
      }}
    >
      <div className="inset-0 bg-black bg-opacity-50 px-16 md:px-60 md:mx-auto py-16 lg:grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className={ptSerif.className}>
            <h2 className="text-4xl lg:text-5xl mb-8 text-color4 text-center">
              Bright Beginnings Here
            </h2>
          </div>
          <p className="mb-8 text-color1">
            Our kindergarten fosters a love for learning in a warm and
            supportive setting. With fun activities and dedicated teachers, we
            help children build foundational skills and confidence. Join us for
            bright beginnings!
          </p>
        </div>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/zszbr8MptTA?si=XsK7dycnjbdP-zzJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="aspect-video"
        ></iframe>
      </div>
    </div>
  );
}
