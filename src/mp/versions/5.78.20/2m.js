var e={sysInfoCache:null,getBL(){const{benchmarkLevel:e=-1}=this.getSystemInfo();return e},getDeviceModel(){const{model:e="unknown"}=this.getSystemInfo();return e},getDeviceSystem(){const{system:e=""}=this.getSystemInfo();return e},getSystemInfo(){if(this.sysInfoCache)return this.sysInfoCache;if(!wx.getSystemInfoSync)return this.sysInfoCache={model:"unknown",benchmarkLevel:-1,system:""},this.sysInfoCache;const e=wx.getSystemInfoSync();return e&&"object"==typeof e?(this.sysInfoCache={model:e.model||"unknown",benchmarkLevel:e.benchmarkLevel||0,system:e.system||""},this.sysInfoCache):(this.sysInfoCache={model:"unknown",benchmarkLevel:-1,system:""},this.sysInfoCache)}};module.exports=e;