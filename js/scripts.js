function expandNav(e){event.preventDefault(),1==showing?(document.getElementsByTagName("nav")[0].setAttribute("class","hidden"),showing=!1):0==showing&&(document.getElementsByTagName("nav")[0].setAttribute("class","show"),showing=!0)}function showHome(e){document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-home").setAttribute("class","show-section animated fadeIn"),$("html,body").scrollTop(0)}function showBuild(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","show-section"),$("html,body").scrollTop(0)}function showAbout(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","show-section"),$("html,body").scrollTop(0),$(this).hcCharts()}function showCart(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","show-section"),$("html,body").scrollTop(0)}function displayDist(e){document.getElementById("cms").setAttribute("class","hide-section"),document.getElementById("dist").setAttribute("class","group clearfix animated fadeIn show-section")}function displayCMS(e){document.getElementById("dist").setAttribute("class","hide-section"),document.getElementById("cms").setAttribute("class","group clearfix animated fadeIn show-section")}function selectUbuntu(e){document.getElementById("ubuntu2").className=document.getElementById("ubuntu2").className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu").className+=" selected",selectedDistro="ubuntu"}function selectUbuntu2(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu2").className+=" selected",selectedDistro="ubuntu2"}function selectArdebian(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ardebian").className+=" selected",selectedDistro="ardebian"}function selectCentOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("centos").className+=" selected",selectedDistro="centos"}function selectCoreOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("coreos").className+=" selected",selectedDistro="coreos"}function selectFreeBSD(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("freebsd").className+=" selected",selectedDistro="freebsd"}var showing=!1,selectedDistro="blank",selectedSize,serverName;!function(e){e(document).ready(function(){e(this).hcCharts()}),jQuery.fn.hcCharts=function(){function t(e,t){for(var s=0;s<e.series.length;s++)for(var n=e.series[s].userOptions.borderColor,i=0;i<e.series[s].points.length;i++)if(0!=e.series[s].points[i].y&&e.series[s].visible){var r=4,o=e.series[s].points[i].shapeArgs.width,l=e.series[s].points[i].shapeArgs.height,c=e.plotTop+e.plotHeight-e.series[s].points[i].shapeArgs.x-o,a=e.plotLeft+l;e.renderer.rect(a,c,r,o,0).attr({fill:n,"stroke-width":1,stroke:n,zIndex:3,"class":"custom-remove bar-chart-rect"}).add()}}var s="#4290c5",n="#316B92",i="#CF5B5A",r="#822D2C",o="#F8743A",l="#C55C2E",c="#008a32",a="#007129",d={lang:{thousandsSep:","},title:{text:null},subtitle:{text:null},credits:{enabled:!1},"export":{enabled:!1},chart:{spacing:[20,20,20,20]}};e(".chart-bar-h").doesExist()&&e(".chart-bar-h").each(function(u,m){var g=e(m),h="75%",y=g.data("chartsettings");y=jQuery.fn.userOpts(y);var b={chart:{type:"bar",events:{load:function(){t(this,y)},redraw:function(){g.find(".custom-remove").remove(),t(this,y)}}},xAxis:{tickLength:0,gridLineWidth:1,title:{text:null},labels:{style:{fontSize:16,color:"#676767",marginBottom:10}}},legend:{enabled:!0},yAxis:[{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:3,minorGridLineWidth:1,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}},{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:2,minorGridLineWidth:1,opposite:!0,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}}],plotOptions:{bar:{dataLabels:{enabled:!0,useHTML:!0,formatter:function(){return 0==this.point.y?'<img style="width: 10px; height: 10px;" src="'+y.zeroImage+'"/>':void 0}}},series:{pointPadding:.05,groupPadding:.15}}};y.hasLegend?b.legend={layout:"horizontal",align:"right",verticalAlign:"top",x:0,y:0,floating:!1,borderWidth:0,shadow:!1}:b.legend.enabled=!1;var p=g.data("datatype");if("percent"==p&&(b.yAxis[0].labels.format="{value}%",b.yAxis[0].min=0,b.yAxis[0].max=100,b.yAxis[0].minorTickInterval=10,b.yAxis[0].tickInterval=50,b.yAxis[1].labels.format="{value}%",b.yAxis[1].min=0,b.yAxis[1].max=100,b.yAxis[1].minorTickInterval=10,b.yAxis[1].tickInterval=50),"numeric"==p){for(var f=[],A=[],x=0,B=0,I=0;I<y.series.length;I++)f[I]=Math.max.apply(null,y.series[I].data),A[I]=Math.min.apply(null,y.series[I].data);x=Math.max.apply(null,f),B=Math.max.apply(null,A),x+=.1*x,B-=.1*B;var E=5*Math.round(Math.ceil(Math.sqrt(x))/5);b.yAxis[0].gridLineWidth=1,b.yAxis[0].tickInterval=E,b.yAxis[0].min=B,b.yAxis[0].max=x,b.yAxis[1].gridLineWidth=1,b.yAxis[1].tickInterval=E,b.yAxis[1].min=B,b.yAxis[1].max=x}var v=g.data("charttype");"bartricolor"==v&&(b.series=[{},{},{},{}],b.series[0].color=s,b.series[0].borderColor=n,b.series[1].color=i,b.series[1].borderColor=r,b.series[2].color=o,b.series[2].borderColor=l,b.series[3].color=c,b.series[3].borderColor=a),"barbluesingle"==v&&(b.series=[{}],b.series[0].color=cBlue,b.series[0].borderColor=cDarkBlue,b.yAxis[0].labels.format="{value}",b.yAxis[1].labels.format="{value}");var D=e.extend(!0,{},d,b,y);jQuery.fn.hcChartsRender(g,D,h)})},jQuery.fn.hcChartsRender=function(e,t,s){if(e.hasClass("chart-waypoint")){e.waypoint(function(s){e.highcharts(t),this.destroy()},{offset:s})}else e.highcharts(t)},jQuery.fn.userOpts=function(t){if("string"!=e.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var s=t?t.indexOf("{"):-1,n={};if(-1!=s)try{n=jQuery.fn.str2json(t.substr(s))}catch(i){}return n},jQuery.fn.str2json=function(e,t){try{return t?JSON.parse(e.replace(/([\$\w]+)\s*:/g,function(e,t){return'"'+t+'":'}).replace(/'([^']+)'/g,function(e,t){return'"'+t+'"'})):new Function("","var json = "+e+"; return JSON.parse(JSON.stringify(json));")()}catch(s){return!1}},jQuery.fn.doesExist=function(){return jQuery(this).length>0}}(jQuery),console.log("js working!!!!");