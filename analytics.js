// analytics.js

(function() {
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0H6GXVC45E";
    script.async = true;
    document.head.appendChild(script);
  
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-XXXXXXXXXX');
  })();
  