import{$ as t,o as r,d as p,L as d,p as _}from"./overpass.83728a8d.js";t(document).ready(()=>{const c={};window.addEventListener("message",e=>{const o=typeof e.data=="string"?JSON.parse(e.data):{};switch(o.cmd){case"update_map":s.code.overpass=o.value[0],a.update_map();break;case"cache":s.code.overpass=o.value[0],a.getQuery(i=>{const l=a.getQueryLang();r.run_query(i,l,c,!0,void 0,a.mapcss)});break}},!1),t.fn.dialog=function(){alert(`error :( ${t(this).html()}`)},p.appname="overpass-ide-map";const s={code:{},server:p.defaultServer,tileServer:p.defaultTiles,silent:!1,force_simple_cors_request:!0,disable_poiomatic:!1},a={map:void 0,mapcss:"",getQuery(e){const o=s.code.overpass,i=new _;i.parse(o,{},l=>{let m="";i.hasStatement("style")&&(m=i.getStatement("style")),a.mapcss=m;let n=null;if(i.hasStatement("data")){n=i.getStatement("data"),n=n.split(",");const w=n[0].toLowerCase();n=n.slice(1);const g={};for(const b of n){const h=b.split("=");g[h[0]]=h[1]}n={mode:w,options:g}}a.data_source=n,l=l.trim(),e(l)})},getQueryLang(){return t.trim(s.code.overpass).match(/^</)?"xml":"OverpassQL"},update_map(){t("#data_stats").remove(),typeof r.osmLayer<"u"&&a.map.removeLayer(r.osmLayer),a.getQuery(e=>{const o=a.getQueryLang();r.run_query(e,o,c,!1,void 0,a.mapcss)}),t("#map_blank").remove()}};r.init(),t.support.cors!=!0&&t('<div title="Your browser is not supported :("><p>The browser you are currently using, is not capable of running this Application. <small>It has to support <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small></p><p>Please update to a more up-to-date version of your browser or switch to a more capable browser! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work.</p></div>').dialog({modal:!0});const u=new URLSearchParams(location.search.substring(1));s.code.overpass=u.get("Q"),s.silent=u.has("silent"),a.map=new d.Map("map");const y=s.tileServer,f=p.tileServerAttribution,v=new d.TileLayer(y,{attribution:f});a.map.setView([0,0],1).addLayer(v),new d.Control.Scale({metric:!0,imperial:!1}).addTo(a.map),t(document).on({ajaxStart(){t("#loading-dialog").addClass("is-active")},ajaxStop(){t("#loading-dialog").removeClass("is-active")}}),a.map.on("layeradd",e=>{if(e.layer instanceof d.GeoJSON){a.map.setView([0,0],18,!0);try{a.map.fitBounds(e.layer.getBounds())}catch{}}}),r.handlers.onEmptyMap=e=>{t(`<div id="map_blank" style="z-index:1; display:block; position:absolute; top:42px; width:100%; text-align:center; background-color:#eee; opacity: 0.8;">This map intentionally left blank. <small>(${e})</small></div>`).appendTo("#map")},s.silent?(r.handlers.onAjaxError=e=>{parent.postMessage(JSON.stringify({handler:"onAjaxError",msg:e}),"*")},r.handlers.onQueryError=e=>{parent.postMessage(JSON.stringify({handler:"onQueryError",msg:e}),"*")}):(r.handlers.onAjaxError=e=>{alert(`An error occured during the execution of the overpass query!
${e}`)},r.handlers.onQueryError=e=>{alert(`An error occured during the execution of the overpass query!
This is what overpass API returned:
${e}`)}),r.handlers.onGeoJsonReady=()=>{a.map.addLayer(r.osmLayer)},r.handlers.onPopupReady=e=>{e.openOn(a.map)},r.handlers.onDataReceived=(e,o,i,l)=>{l()},r.handlers.onRawDataPresent=()=>{parent.postMessage(JSON.stringify({query:s.code.overpass,resultType:r.resultType,resultText:r.resultText}),"*")},a.update_map()});
