import React from 'react';
import { Link } from 'react-router-dom';


const FooterColumn = (props) => {
  return (
    <div className="col-md-3">
      {
        props.menuTitle ? <h2 style={{color:'aqua'}}>{props.menuTitle}</h2>: <h2></h2>
      }
      <ul className="list-unstyled">
        {
          props.menuItems.map(item => <li><Link className="text-decoration-none text-white" to={item.link}>{item.name}</Link></li>)
        }
      </ul>
    </div>
  );
};

export default FooterColumn;