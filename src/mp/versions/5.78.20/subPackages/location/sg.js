var _=Object.defineProperty;((e,r)=>{for(var R in(e=>{_(e,"__esModule",{value:!0})})(e),r)_(e,R,{get:r[R],enumerable:!0})})(exports,{FROM_BACK_NATIVE_LIST:()=>A,FROM_MAP:()=>r,GO_HOME_PAGE_WHITE_LIST:()=>E,TARGET_MAP:()=>e,USE_LAT_LON_FROM_URL_LIST:()=>O,isFromGoHome:()=>M,isFromNative:()=>T,isNeedUseLonLatfromUrl:()=>P});var e={CUR_PAGE:"curPage",POI_ADDR_MAP:"poiAddressMap",ERR_PAGE:"error_view"},r={CATEGORY_SKU_LIST:"categorySkuList",SUBMIT_ORDER:"submitOrder",SEARCH:"search",SUBMIT_CART:"submitCart"},R=[e.CUR_PAGE,e.POI_ADDR_MAP,e.ERR_PAGE],O=[r.CATEGORY_SKU_LIST,r.SUBMIT_ORDER],A=["bigSearchResult","platformCart"],E=["FROM_MULTI_POI_PAGE","FROM_MULTI_POI_OPEN"],T=_=>-1!==A.indexOf(_),M=_=>-1!==E.indexOf(_),P=(_,e)=>(_=>-1!==O.indexOf(_))(_)&&!(_=>-1!==R.indexOf(_))(e);