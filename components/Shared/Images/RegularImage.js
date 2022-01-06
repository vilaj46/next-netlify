import "tailwindcss/tailwind.css";

function RegularImage({ src, alt }) {
  const newSrc = src.replace("http://localhost:3000", "");
  return <img src={newSrc} alt={alt} />;
}

export default RegularImage;
