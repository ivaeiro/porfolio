import React from "react";

function FooterLink({children, href, icon}) {
  return (
    <a
      href={href}
      className="flex items-center space-x-3 hover:text-sky-400 transition"
    >
    {icon}
      <span>{children}</span>
    </a>
  );
}

export default FooterLink;
