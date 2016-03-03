function expandNav(e){event.preventDefault(),1==showing?(document.getElementsByTagName("nav")[0].setAttribute("class","hidden"),showing=!1):0==showing&&(document.getElementsByTagName("nav")[0].setAttribute("class","show"),showing=!0)}function showHome(e){document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-home").setAttribute("class","show-section animated fadeIn"),showing=!1}function showBuild(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","show-section"),showing=!1}function showAbout(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","show-section"),showing=!1}function showCart(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","show-section"),showing=!1}function displayDist(e){document.getElementById("cms").setAttribute("class","hide-section"),document.getElementById("dist").setAttribute("class","group clearfix animated fadeIn show-section")}function displayCMS(e){document.getElementById("dist").setAttribute("class","hide-section"),document.getElementById("cms").setAttribute("class","group clearfix animated fadeIn show-section")}var showing=!1;!function(e){e(document).ready(function(){e(this).hcCharts(),Highcharts.setOptions({lang:{thousandsSep:","}})}),jQuery.fn.hcCharts=function(){function t(e,t){for(var s=0;s<e.series.length;s++)for(var i=e.series[s].userOptions.borderColor,n=0;n<e.series[s].points.length;n++)if(0!=e.series[s].points[n].y&&e.series[s].visible){var r=2,o=e.series[s].points[n].shapeArgs.width,a=e.series[s].points[n].shapeArgs.height,l=e.plotTop+e.plotHeight-e.series[s].points[n].shapeArgs.x-o,c=e.plotLeft+a;e.renderer.rect(c,l,r,o,0).attr({fill:i,"stroke-width":1,stroke:i,zIndex:3,"class":"custom-remove bar-chart-rect"}).add()}}var s="#4290c5",i="#316B92",n="#CF5B5A",r="#822D2C",o="#288feb",a="#1d82dc",l="#008a32",c="#007129",d={lang:{thousandsSep:","},title:{text:null},subtitle:{text:null},credits:{enabled:!1},"export":{enabled:!1},chart:{spacing:[20,20,20,20]}};e(".chart-bar-h").doesExist()&&e(".chart-bar-h").each(function(u,h){var g=e(h),m="75%",y=g.data("chartsettings");y=jQuery.fn.userOpts(y);var p={chart:{type:"bar",events:{load:function(){t(this,y)},redraw:function(){g.find(".custom-remove").remove(),t(this,y)}}},xAxis:{tickLength:0,gridLineWidth:1,title:{text:null},labels:{style:{fontSize:16,color:"#676767",marginBottom:10}}},legend:{enabled:!0},yAxis:[{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:3,minorGridLineWidth:1,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}},{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:3,minorGridLineWidth:1,opposite:!0,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}}],plotOptions:{bar:{dataLabels:{enabled:!0,useHTML:!0,formatter:function(){return 0==this.point.y?'<img style="width: 10px; height: 10px;" src="'+y.zeroImage+'"/>':void 0}}},series:{pointPadding:.05,groupPadding:.15}}};y.hasLegend?p.legend={layout:"horizontal",align:"right",verticalAlign:"top",x:0,y:0,floating:!1,borderWidth:0,shadow:!1}:p.legend.enabled=!1;var b=g.data("datatype");if("percent"==b&&(p.yAxis[0].labels.format="{value}%",p.yAxis[0].min=0,p.yAxis[0].max=100,p.yAxis[0].minorTickInterval=10,p.yAxis[0].tickInterval=50,p.yAxis[1].labels.format="{value}%",p.yAxis[1].min=0,p.yAxis[1].max=100,p.yAxis[1].minorTickInterval=10,p.yAxis[1].tickInterval=50),"numeric"==b){for(var f=[],A=[],x=0,v=0,I=0;I<y.series.length;I++)f[I]=Math.max.apply(null,y.series[I].data),A[I]=Math.min.apply(null,y.series[I].data);x=Math.max.apply(null,f),v=Math.max.apply(null,A),x+=.1*x,v-=.1*v;var w=5*Math.round(Math.ceil(Math.sqrt(x))/5);p.yAxis[0].gridLineWidth=1,p.yAxis[0].tickInterval=w,p.yAxis[0].min=v,p.yAxis[0].max=x,p.yAxis[1].gridLineWidth=1,p.yAxis[1].tickInterval=w,p.yAxis[1].min=v,p.yAxis[1].max=x}var B=g.data("charttype");"bartricolor"==B&&(p.series=[{},{},{},{}],p.series[0].color=s,p.series[0].borderColor=i,p.series[1].color=n,p.series[1].borderColor=r,p.series[2].color=o,p.series[2].borderColor=a,p.series[3].color=l,p.series[3].borderColor=c),"barbluesingle"==B&&(p.series=[{}],p.series[0].color=cBlue,p.series[0].borderColor=cDarkBlue,p.yAxis[0].labels.format="{value}",p.yAxis[1].labels.format="{value}");var E=e.extend(!0,{},d,p,y);jQuery.fn.hcChartsRender(g,E,m)})},jQuery.fn.hcChartsRender=function(e,t,s){if(e.hasClass("chart-waypoint")){e.waypoint(function(s){e.highcharts(t),this.destroy()},{offset:s})}else e.highcharts(t)},jQuery.fn.userOpts=function(t){if("string"!=e.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var s=t?t.indexOf("{"):-1,i={};if(-1!=s)try{i=jQuery.fn.str2json(t.substr(s))}catch(n){}return i},jQuery.fn.str2json=function(e,t){try{return t?JSON.parse(e.replace(/([\$\w]+)\s*:/g,function(e,t){return'"'+t+'":'}).replace(/'([^']+)'/g,function(e,t){return'"'+t+'"'})):new Function("","var json = "+e+"; return JSON.parse(JSON.stringify(json));")()}catch(s){return!1}},jQuery.fn.doesExist=function(){return jQuery(this).length>0}}(jQuery),console.log("js working!!!!");