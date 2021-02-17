import React from 'react';

// text: inner text in button or link
// style: see scss file
// type: link - for link and button or submit for button
// href: undefined for button, adress for link

// + add smth for Router, navlinks and so on

function Button (props) {
  const {text, style, type, href} = props;

  // if (type != 'link') {
    // console.log(props);
  // };

  return (
    type !== 'link' ?
        <button className={`btn_ ${style}`} type={type}>{text}</button>
      :
        <a className={`btn_ ${style}`} href={href}>{text}</a>
  )
};

export default Button;