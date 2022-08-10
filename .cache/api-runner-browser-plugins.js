module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":1,"once":true,"disable":false,"selector":"[data-sal]","animateClassName":"sal-animate","disabledClassName":"sal-disabled","rootMargin":"0% 50%","enterEventName":"sal:in","exitEventName":"sal:out"},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1000,"wrapperStyle":"margin: 3rem 0;","backgroundColor":"none","linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ben's Portfolio","short_name":"Ben's Portfolio","start_url":"/","background_color":"white","theme_color":"white","display":"standalone","icon":"src/images/logo.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":"a01d3d0fd2624d8b9a5231e28512a4e2"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
