import "tailwindcss/tailwind.css";

// Helper functions
import createImageObject from "../../../utilities/createImageObject";

/**
 * @param {Object} mainImage - src from out metadata.
 * @returns
 */
function MainImage({ mainImage }) {
  const obj = createImageObject(mainImage);

  return (
    <div className="w-full h-full xl:h-192 overflow-hidden">
      <img
        src={"/" + obj.src}
        alt={obj.alt}
        // Do not need this css yet. Everything seems to be working
        // properly.
        // className="w-full bg-cover bg-center object-cover"
      />
    </div>
  );
}

export default MainImage;
