(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{254:function(e,t,i){var r=i(267);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(194).default)("02acad6a",r,!0,{})},256:function(e,t,i){"use strict";var r=i(32),s=i(49),n=i(96);var o={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0}},computed:{deadlineStr(){const e=this.shippingLine,t=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let i=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(i+=e.delivery_time.days),i+=this.productionDeadline,i>1?"".concat(Object(s.a)(r.Vd)," ").concat(i," ")+Object(s.a)(t?r.ce:r.Z).toLowerCase():Object(s.a)(1===i?r.Ud:e.pick_up?"Retire hoje":r.Uc)},freightValueStr(){const{shippingLine:e}=this,t="number"==typeof e.total_price?e.total_price:e.price;return t?Object(n.a)(t):Object(s.a)(e.pick_up?r.tb:r.ub)}}},a=(i(266),i(58)),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-line"},[i("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),i("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?i("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);t.a=d.exports},266:function(e,t,i){"use strict";i(254)},267:function(e,t,i){(t=i(193)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,oBAAoB,CAAC,2BAA2B,CAAC,eAAe,CAAC,uBAAuB",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}"]}]),e.exports=t},311:function(e,t,i){var r=i(379);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(194).default)("60cdd274",r,!0,{})},378:function(e,t,i){"use strict";i(311)},379:function(e,t,i){(t=i(193)(!0)).push([e.i,".order{min-height:300px}","",{version:3,sources:["EcOrder.scss"],names:[],mappings:"AAAA,OAAO,gBAAgB",file:"EcOrder.scss",sourcesContent:[".order{min-height:300px}"]}]),e.exports=t},398:function(e,t,i){"use strict";i.r(t);var r=i(123),s=i(2),n=i(59),o={name:"EcOrder",components:{EcOrderInfo:i(285).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data(){return{isReady:this.skipDataLoad,orderBody:{_id:"",...this.order}}},computed:{localOrder:{get(){return this.orderBody},set(e){this.orderBody=e,this.$emit("update:order",e)}}},methods:{fetchOrder(){const e="/orders/".concat(this.orderBody._id,".json");(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(s.g)({url:e})).then((e=>{let{data:t}=e;this.localOrder=t,this.isReady=!0}))}},watch:{"order._id"(e){e&&e!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(e){e&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then((e=>{this.localOrder=e.find((e=>{let{number:t}=e;return t===this.order.number}))||{}})))}},a=(i(378),i(58)),d={name:"order",components:{EcOrder:Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"order"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[e.isReady?i("ec-order-info",{key:"info",attrs:{order:e.localOrder,"skip-first-data-load":""},on:{"update:order":function(t){e.localOrder=t}}}):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:{...Object(r.c)(["orders"]),number(){const e=this.$route.params.number;return/^[0-9]+$/.test(e)&&parseInt(e,10)},order(){const e=this.orders.find((e=>{let{_id:t,number:i}=e;return this.number===i||this.$route.params.number===t}));if(!e){const{number:e}=this;return e?{_id:this.$route.params.id,number:e}:{_id:this.$route.params.number}}return e}}},l=Object(a.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"order"}},[i("ec-order",{attrs:{order:e.order}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);