function expandNav(e){event.preventDefault(),1==showing?(document.getElementsByTagName("nav")[0].setAttribute("class","hidden"),showing=!1):0==showing&&(document.getElementsByTagName("nav")[0].setAttribute("class","show"),showing=!0)}function showHome(e){document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-home").setAttribute("class","show-section animated fadeIn"),$("html,body").scrollTop(0)}function showBuild(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","show-section"),$("html,body").scrollTop(0)}function showAbout(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","show-section"),$("html,body").scrollTop(0),$(this).hcCharts()}function showCart(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","show-section"),$("html,body").scrollTop(0)}function displayDist(e){document.getElementById("cms").setAttribute("class","hide-section"),document.getElementById("dist").setAttribute("class","group clearfix animated fadeIn show-section")}function displayCMS(e){document.getElementById("dist").setAttribute("class","hide-section"),document.getElementById("cms").setAttribute("class","group clearfix animated fadeIn show-section")}function selectUbuntu(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu").className+=" selected",selectedDistro="ubuntu"}function selectUbuntu2(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu2").className+=" selected",selectedDistro="ubuntu2"}function selectArdebian(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ardebian").className+=" selected",selectedDistro="ardebian"}function selectCentOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("centos").className+=" selected",selectedDistro="centos"}function selectCoreOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("coreos").className+=" selected",selectedDistro="coreos"}function selectFreeBSD(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("freebsd").className+=" selected",selectedDistro="freebsd"}function selectWordpress(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("wordpress").className+=" selected",selectedDistro="wordpress"}function selectDrupal7(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("drupal7").className+=" selected",selectedDistro="drupal7"}function selectDrupal8(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("drupal8").className+=" selected",selectedDistro="drupal8"}function selectJoomla(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("joomla").className+=" selected",selectedDistro="joomla"}var showing=!1,selectedDistro="blank",selectedSize,serverName;!function(e){e(document).ready(function(){e(this).hcCharts()}),jQuery.fn.hcCharts=function(){function t(e,t){for(var s=0;s<e.series.length;s++)for(var n=e.series[s].userOptions.borderColor,l=0;l<e.series[s].points.length;l++)if(0!=e.series[s].points[l].y&&e.series[s].visible){var i=4,o=e.series[s].points[l].shapeArgs.width,r=e.series[s].points[l].shapeArgs.height,c=e.plotTop+e.plotHeight-e.series[s].points[l].shapeArgs.x-o,a=e.plotLeft+r;e.renderer.rect(a,c,i,o,0).attr({fill:n,"stroke-width":1,stroke:n,zIndex:3,"class":"custom-remove bar-chart-rect"}).add()}}var s="#4290c5",n="#316B92",l="#CF5B5A",i="#822D2C",o="#F8743A",r="#C55C2E",c="#008a32",a="#007129",d={lang:{thousandsSep:","},title:{text:null},subtitle:{text:null},credits:{enabled:!1},"export":{enabled:!1},chart:{spacing:[20,20,20,20]}};e(".chart-bar-h").doesExist()&&e(".chart-bar-h").each(function(u,m){var g=e(m),h="75%",y=g.data("chartsettings");y=jQuery.fn.userOpts(y);var p={chart:{type:"bar",events:{load:function(){t(this,y)},redraw:function(){g.find(".custom-remove").remove(),t(this,y)}}},xAxis:{tickLength:0,gridLineWidth:1,title:{text:null},labels:{style:{fontSize:16,color:"#676767",marginBottom:10}}},legend:{enabled:!0},yAxis:[{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:3,minorGridLineWidth:1,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}},{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:2,minorGridLineWidth:1,opposite:!0,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}}],plotOptions:{bar:{dataLabels:{enabled:!0,useHTML:!0,formatter:function(){return 0==this.point.y?'<img style="width: 10px; height: 10px;" src="'+y.zeroImage+'"/>':void 0}}},series:{pointPadding:.05,groupPadding:.15}}};y.hasLegend?p.legend={layout:"horizontal",align:"right",verticalAlign:"top",x:0,y:0,floating:!1,borderWidth:0,shadow:!1}:p.legend.enabled=!1;var b=g.data("datatype");if("percent"==b&&(p.yAxis[0].labels.format="{value}%",p.yAxis[0].min=0,p.yAxis[0].max=100,p.yAxis[0].minorTickInterval=10,p.yAxis[0].tickInterval=50,p.yAxis[1].labels.format="{value}%",p.yAxis[1].min=0,p.yAxis[1].max=100,p.yAxis[1].minorTickInterval=10,p.yAxis[1].tickInterval=50),"numeric"==b){for(var f=[],B=[],I=0,E=0,A=0;A<y.series.length;A++)f[A]=Math.max.apply(null,y.series[A].data),B[A]=Math.min.apply(null,y.series[A].data);I=Math.max.apply(null,f),E=Math.max.apply(null,B),I+=.1*I,E-=.1*E;var x=5*Math.round(Math.ceil(Math.sqrt(I))/5);p.yAxis[0].gridLineWidth=1,p.yAxis[0].tickInterval=x,p.yAxis[0].min=E,p.yAxis[0].max=I,p.yAxis[1].gridLineWidth=1,p.yAxis[1].tickInterval=x,p.yAxis[1].min=E,p.yAxis[1].max=I}var D=g.data("charttype");"bartricolor"==D&&(p.series=[{},{},{},{}],p.series[0].color=s,p.series[0].borderColor=n,p.series[1].color=l,p.series[1].borderColor=i,p.series[2].color=o,p.series[2].borderColor=r,p.series[3].color=c,p.series[3].borderColor=a),"barbluesingle"==D&&(p.series=[{}],p.series[0].color=cBlue,p.series[0].borderColor=cDarkBlue,p.yAxis[0].labels.format="{value}",p.yAxis[1].labels.format="{value}");var v=e.extend(!0,{},d,p,y);jQuery.fn.hcChartsRender(g,v,h)})},jQuery.fn.hcChartsRender=function(e,t,s){if(e.hasClass("chart-waypoint")){e.waypoint(function(s){e.highcharts(t),this.destroy()},{offset:s})}else e.highcharts(t)},jQuery.fn.userOpts=function(t){if("string"!=e.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var s=t?t.indexOf("{"):-1,n={};if(-1!=s)try{n=jQuery.fn.str2json(t.substr(s))}catch(l){}return n},jQuery.fn.str2json=function(e,t){try{return t?JSON.parse(e.replace(/([\$\w]+)\s*:/g,function(e,t){return'"'+t+'":'}).replace(/'([^']+)'/g,function(e,t){return'"'+t+'"'})):new Function("","var json = "+e+"; return JSON.parse(JSON.stringify(json));")()}catch(s){return!1}},jQuery.fn.doesExist=function(){return jQuery(this).length>0}}(jQuery),console.log("js working!!!!");