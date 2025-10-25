const GoogleMaps = ({ locationParam = "tangerang" }) => {
  const encoded = encodeURIComponent(locationParam);
  const url = `https://www.google.com/maps?q=${encoded}&output=embed`;
  return (
    <div className=" overflow-hidden rounded-lg p-2 ">
      <iframe
        src={url}
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
