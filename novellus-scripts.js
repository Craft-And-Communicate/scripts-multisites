// Talk Further Novellus - all communities
(function () {
    var a = document.createElement("script");
    var b = document.getElementsByTagName("script")[0];
    a.type = "text/javascript";
    a.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "js.talkfurther.com/talkfurther_init.min.js";
    a.async = true;
    b.parentNode.insertBefore(a, b);
  }
  )();

// Google 
const container = document.createElement('div');

container.innerHTML =/*html*/ `
<!-- Google Tag Manager -->
<amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-KRFJ3K8>m.url=SOURCE_URL" data-credentials="include">
</amp-analytics>

<!-- Google Tag Manager (noscript) -->
<noscript aria-hidden="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHC2N94"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- AMP Analytics -->
<script aria-hidden="true"
   async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js">
</script>

<!-- Google Tag Manager -->
<script aria-hidden="true">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHC2N94');</script>
<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script aria-hidden="true" async src="https://www.googletagmanager.com/gtag/js?id=UA-214283808-1"></script>
<script aria-hidden="true">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-214283808-1');

`;
  