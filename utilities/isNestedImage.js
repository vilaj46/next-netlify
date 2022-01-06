function isNestedImage(child) {
  try {
    const children = Array.from(child.children);
    const element = children[0];
    const { nodeName } = element;
    if (children.length === 1 && nodeName === "IMG") {
      return true;
    } else {
      return false;
    }
  } catch {
    // #text sometimes giving error.
    return false;
  }
}

export default isNestedImage;
