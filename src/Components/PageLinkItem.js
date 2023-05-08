import React from "react";

function PageLinkItem({ link, itemClass }) {
  return (
    <li>
      <a className={itemClass} href={link.href}>
        {link.text}
      </a>
    </li>
  );
}

export default PageLinkItem;
