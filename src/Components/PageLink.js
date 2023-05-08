import React from "react";
import { pageLinks } from "../data";
import PageLinkItem from "./PageLinkItem";
function PageLink({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id={itemClass}>
      {pageLinks.map((link) => (
        <PageLinkItem key={link.id} itemClass={itemClass} link={link} />
      ))}
    </ul>
  );
}

export default PageLink;
