import dynamic from "next/dynamic";
// Expected server HTML to contain a matching <tag> in <tag>
// error was firing in the client side.

const DynamicParagraph = dynamic(() =>
  import("../components/Shared/Paragraph")
);

const DynamicStrong = dynamic(() => import("../components/Shared/Text/Strong"));

const DynamicDomesticLink = dynamic(() =>
  import("../components/Shared/Text/RedLinkDomestic")
);

const DynamicForeignLink = dynamic(() =>
  import("../components/Shared/Text/RedLinkForeign")
);

const DynamicRegularImage = dynamic(() =>
  import("../components/Shared/Images/RegularImage")
);

const DynamicPageSubTitle = dynamic(() =>
  import("../components/Shared/Headings/PageSubTitle")
);

export default {
  p: DynamicParagraph,
  strong: DynamicStrong,
  a: DynamicForeignLink,
  link: DynamicDomesticLink,
  img: DynamicRegularImage,
  h2: DynamicPageSubTitle,
};
