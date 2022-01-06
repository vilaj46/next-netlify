// Utilities
import components from "../../../../utilities/components";

function createImage(child) {
  const Component = components.img;
  const { firstChild } = child;
  const { alt, src } = firstChild;
  return <Component src={src} alt={alt} />;
}

export default createImage;
