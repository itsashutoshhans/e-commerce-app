import React from "react";
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{
          backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);


/**
 * because <Route> only passes the props to first child then to receive history 
 * props here in the menuItem component we will have to tunnel the props upto here
 * which is a bad pattern (children in between don't actually need that propetery)
 * Therefore, withRouter(higher order component) is used here to give access to 
 * the props with Route provides
 */

export default withRouter(MenuItem); 
