(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{261:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return s}));var c=o(33),n=o(30),a=o(50);const r=c.$ecomConfig.get("currency")||"BRL",s=e=>{const t={name:Object(n.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},273:function(e,t,o){"use strict";var c=o(12),n=o(261);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let o,a,r;const s=()=>{const e=[];return c.a.data&&Array.isArray(c.a.data.items)&&c.a.data.items.forEach((t=>{e.push(Object(n.b)(t))})),e},i=t=>{e.push({event:"eec.checkout_option",ecommerce:{currencyCode:n.a,checkout_option:{actionField:t}}})},u=(t,c)=>{const r={step:t,option:c};t<=1||!o?(e.push({event:"eec.checkout",ecommerce:{currencyCode:n.a,checkout:{actionField:r,products:s()}}}),e.push({event:"checkout"}),o=!0):a||(i(r),e.push({event:"checkoutOption"}),a=!0)},d=(t,o)=>{if(!r){const{amount:a}=window.storefrontApp,u={id:t,revenue:(a&&a.total||c.a.data&&c.a.data.subtotal||0).toFixed(2)};let d;if(a&&(void 0!==a.freight&&(u.shipping=a.freight.toFixed(2)),void 0!==a.tax&&(u.tax=a.tax.toFixed(2))),o)try{d=JSON.parse(o)}catch(e){}d&&(["payment_method_label","shipping_method_label"].forEach(((e,t)=>{d[e]&&i({step:3+t,option:d[e]})})),d.extra_discount&&d.extra_discount.discount_coupon&&(u.coupon=d.extra_discount.discount_coupon)),e.push({event:"eec.purchase",ecommerce:{currencyCode:n.a,purchase:{actionField:u,products:s()}}}),r=!0}};let p;const l=e=>{let{name:t,params:o}=e;switch(t){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":clearTimeout(p),o.json?d(o.id,decodeURIComponent(o.json)):p=setTimeout((()=>{d(o.id)}),1500)}};t.currentRoute&&l(t.currentRoute),t.afterEach(l)}}},274:function(e,t,o){"use strict";var c=o(12),n=o(261);t.a=e=>{const t={},o=o=>{const c=Object(n.b)(o);e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[c]}}}),e.push({event:"addToCart"}),t[o.sku]=c},a=o=>{const c=t[o.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[c?Object.assign({},c):Object(n.b)(o)]}}}),e.push({event:"removeFromCart"}),delete t[o.sku]};c.a.on("addItem",(e=>{let{item:t}=e;return o(t)})),c.a.on("increaseItemQnt",(e=>{let{item:c}=e;const n=t[c.sku];if(n){const e=c.quantity-n.quantity;e>0?o({...c,quantity:e}):a({...c,quantity:-e})}else o(c)})),c.a.on("removeItem",(e=>{let{item:t}=e;return a(t)})),c.a.on("clear",(()=>{for(const e in t)t[e]&&a(t[e])}))}},405:function(e,t,o){"use strict";o.r(t);o(14);var c=o(101),n=o(261),a=e=>{const t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){const{body:o}=t,a=Object(n.b)(o),r={event:"eec.detail",ecommerce:{currencyCode:n.a,detail:{products:[a]}}},s=Object(c.a)(o);s.length&&(a.category=o.category_tree?o.category_tree.replace(/\s>\s/g,"/"):s[0],r.ecommerce.detail.actionField={list:s[0]}),o.brands&&o.brands.length&&(a.brand=o.brands[0].name),e.push(r)}},r=e=>{const t=document.querySelectorAll("[data-sku]");if(t.length){const o=[],c={},a="/search"===window.location.pathname;let r;if(a)r="Search results";else{const e=window.storefront&&window.storefront.context;if(e&&e.body){const{name:t}=e.body;switch(e.resource){case"categories":r="Category: ".concat(t);break;case"brands":r="Brand: ".concat(t);break;case"collections":r="Collection: ".concat(t)}}}for(let e=0;e<t.length;e++){const n=t[e],{sku:r}=n.dataset;if(-1===o.indexOf(r)&&(o.push(r),n.closest)){const e=n.closest(".products-carousel");!a&&e&&(c[r]=e.dataset.title)}}e.push({event:"eec.impressions",ecommerce:{currencyCode:n.a,impressions:o.map((e=>{const t=c[e]||r,o={id:e};return t&&(o.list=t),o}))}})}},s=o(273),i=o(274);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{dataLayerVar:t,parseDomMsDelay:o}=e,c=window[t]||window.dataLayer;c&&(a(c),Object(s.a)(c),Object(i.a)(c),setTimeout((()=>{r(c)}),o>=0?o:300))}}}]);