import React from 'react';
import  { Fragment } from "react";
 

const Footer = () => {
  return (
    <Fragment>
      <div class="ui inverted segment ">
        <div class="ui container">
         

          <ul style={{ listStyle: "none" }} className="row row-col-4">
            <div className="col">
              <li>
                <i className="big instagram icon" />
                instagram.com/Area_Boutique
              </li>
            </div>

            <div className="col">
              <li>
                <i className="big facebook icon" />
                facebook.com/Area_Boutique
              </li>
            </div>

            <div className="col">
              <li>
                <i class="big linkedin icon"></i>
                linkedin.com/Area_Boutique
              </li>
            </div>

            <div className="col">
              <li>
                <i class="phone icon"></i>
                *1050
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;


