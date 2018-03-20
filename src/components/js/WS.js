import GLOBAL from '../../fetch/Global'
export function webS (config) {
  let ws = new WebSocket(
    config.url
  );
  if (config.onclose)   { ws.onclose   = config.onclose;   }
  if (config.onmessage) { ws.onmessage = config.onmessage; }
  if (config.onopen)    { ws.onopen    = config.onopen;    }
  if (config.onerror)   { ws.onerror    = config.onerror;  }
  return ws;
  this.over = () => {
    ws.close();
  };
}
export function WS (params, onmessage, onopen, onclose) {
    var wsscheme = "wss://";
    if (window.location.protocol != "https:") {
      wsscheme = "ws://";
    }
    var host = wsscheme + location.host;
    var regions = localStorage.getItem('region');
    var region = regions.split('-')[2];

    var token = '';
    if (params.api == 'k8s') {
      host = host + GLOBAL.route.host_wss_k8s;
    } else if(params.api == 'broker'){
      host = host + GLOBAL.route.broker_ws_apigroup;
    }else if(params.api == 'wsapis'){
      host = host + GLOBAL.route.host_ws_apis;
    }else if(params.api == 'extensions'){
      host = host + GLOBAL.route.host_ws_apisextensions;
    }else{
      host = host + GLOBAL.route.host_wss;
    }
    var tokens = localStorage.getItem('df_access_token');
    var regions = localStorage.getItem('region');
    var tokenarr = tokens.split(',');
    var region = regions.split('-')[2];
    var token = tokenarr[region - 1];

    params.name = params.name ? '/' + params.name : '';
    if (params.pod) {
      var url = host + '/namespaces/' + params.namespace + '/' + params.type + params.name +
        '?follow=true' +
        '&tailLines=1000' +
        '&limitBytes=10485760' +
        '&container=' + params.pod +

        '&access_token=' + token;
    } else if (params.app) {
      var url = host + '/namespaces/' + params.namespace + '/' + params.type + params.name +
        '?watch=true' +
        '&resourceVersion=' + params.resourceVersion +
        '&labelSelector=' + params.app +

        '&access_token=' + token;
    } else {
      var url = host + '/namespaces/' + params.namespace + '/' + params.type + params.name +
        '?watch=true' +
        '&resourceVersion=' + params.resourceVersion +

        '&access_token=' + token;
    }
    if (params.tailLines) {
      url=url+'&tailLines=' + params.tailLines;
    }
    if (params.protocols) {
      webS({
        method: 'WATCH',
        url: url,
        onclose: onclose,
        onmessage: onmessage,
        onopen: onopen,
        protocols: params.protocols
      })
    } else {
      webS({
        method: 'WATCH',
        url: url,
        onclose: onclose,
        onmessage: onmessage,
        onopen: onopen,

      })
    }


  // };

}
