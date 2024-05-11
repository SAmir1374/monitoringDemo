import React from "react";
import { Link } from "react-router-dom";

function NavItem({ items, className, ...props }) {
  return (
    <ul>
      {items.map(({ id, title, link , func}) => (
        <li key={id} onClick={() => func() }>
          <Link to={link}> {title} </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItem;
