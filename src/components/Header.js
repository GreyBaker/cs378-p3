import React from 'react';

const Header = ({logo_img, logo_img_alt, subtitle, under_subtitle}) => {
  return (

      <div class="text-center" id="logo-info">
        <img src={logo_img} alt={logo_img_alt} id="logo" />
        <p id="subtitle">{subtitle}</p>
        <p id="orange-cursive">{under_subtitle}</p>
      </div>


  )
};

export default Header;