"use client"

import React, { useEffect } from 'react'

export default function FacebookMessenger({pageId = "112646488531022", themeColor, loggedInGreeting, loggedOutGreeting}) {

   useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    // Load SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);
    
  return (
    <>
        <div id="fb-root"></div>

      {/* Messenger Chat Plugin */}
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={pageId}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
      ></div>
    </>
  )
}
