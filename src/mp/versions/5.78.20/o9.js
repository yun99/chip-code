var R=Object.create,E=Object.defineProperty,o=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,_=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,t=R=>E(R,"__esModule",{value:!0});((R,o)=>{for(var e in t(R),o)E(R,e,{get:o[e],enumerable:!0})})(exports,{default:()=>i});var O,T=(O=require("./j5.js"),((R,_,t)=>{if(_&&"object"==typeof _||"function"==typeof _)for(let O of e(_))n.call(R,O)||"default"===O||E(R,O,{get:()=>_[O],enumerable:!(t=o(_,O))||t.enumerable});return R})(t(E(null!=O?R(_(O)):{},"default",O&&O.__esModule&&"default"in O?{get:()=>O.default,enumerable:!0}:{value:O,enumerable:!0})),O)),i={DEFAULT:(0,T.DefaultRelations)(),NONETWORK:(0,T.CommonRelations)(T.ERROR_TYPE.HTTP,"001"),HTTPTIMEOUT:(0,T.CommonRelations)(T.ERROR_TYPE.HTTP,"002"),FORBIDDEN:(0,T.CommonRelations)(T.ERROR_TYPE.ANTI_CLIMBING,"001",T.TT_ID.ANTI_CLIMBING),SERVERERROR:(0,T.CommonRelations)(T.ERROR_TYPE.BACK_END,"001"),JSERROR:(0,T.IndexRelations)(T.ERROR_TYPE.FRONT_END,"001"),JSERROR_UNRECOVERABLE:(0,T.IndexRelations)(T.ERROR_TYPE.FRONT_END,"002"),LOWPERFORMANCE:(0,T.IndexRelations)(T.ERROR_TYPE.PERFORMANCE,"001"),EMPTY_SKU_LIST:(0,T.CommonRelations)(T.ERROR_TYPE.FRONT_END,"003"),NO_PAGE:(0,T.CommonRelations)(T.ERROR_TYPE.FRONT_END,"004"),NO_DATA:(0,T.CommonRelations)(T.ERROR_TYPE.FRONT_END,"005"),GET_DATA_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"004"),GET_GOODS_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"005"),GET_REQUEST_TYPE_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"003"),GET_ORDER_EVALUATE_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"113"),GET_POI_CATEGORY_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"001"),SUBMIT_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"115"),GET_EVALUATE_ABNORMAL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"114"),NETWORK_ABNORMAL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"101"),DATA_ABNORMAL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"111"),SKU_ID_USELESS:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"007"),NO_COMMENT:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"008"),EMPTY_SKU_LIST_FULL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"006"),NO_SHARE_EVALUATION:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"112"),SEARCH_FAIL:(0,T.ExhibitionCommonRelations)(T.ERROR_TYPE.FRONT_END,"002")};