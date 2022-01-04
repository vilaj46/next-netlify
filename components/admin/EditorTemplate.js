import "tailwindcss/tailwind.css";
import ReactDOMServer from "react-dom/server";

const ImageWithDarkenedSlider = {
  // Internal id of the component
  id: "darken-slider",
  // Visible label
  label: "Image / Dark Slider Animation",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "mainText",
      label: "Main Text",
      widget: "string",
    },
    {
      name: "secondaryText",
      label: "Secondary Text",
      widget: "string",
    },
    {
      name: "linkText",
      label: "Link Text",
      widget: "string",
    },
    {
      name: "url",
      label: "Url",
      widget: "string",
    },
  ],

  //   <p
  //         class="text-white z-30 group-hover:text-lightRed
  //  uppercase font-juni tracking-widest"
  //       >
  //         Unlock Exclusive Offers
  //       </p>

  pattern:
    /<p class="text-white z-30 group-hover:text-lightRed uppercase font-juni tracking-widest">(.*?)<\/p>/,

  fromBlock: function (match) {
    return {
      text: match[1],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (data) {
    const component = <p className="text-xl">EXTRA LARGE TEXT</p>;
    const { renderToString } = ReactDOMServer;
    const str = renderToString(component);
    return str;
    // return component;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (data) {
    return <p>{data.Ex}</p>;
  },
};

// export const NetlifyCmsEditorComponentImage = ImageWithDarkenedSlider;
export default ImageWithDarkenedSlider;
