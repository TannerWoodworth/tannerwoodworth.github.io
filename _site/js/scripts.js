function expandNav(e){event.preventDefault(),1==showing?(document.getElementsByTagName("nav")[0].setAttribute("class","hidden"),showing=!1):0==showing&&(document.getElementsByTagName("nav")[0].setAttribute("class","show"),showing=!0)}function showHome(e){document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-home").setAttribute("class","show-section animated fadeIn"),$("html,body").scrollTop(0)}function showBuild(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","show-section"),$("html,body").scrollTop(0)}function showAbout(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","show-section"),$("html,body").scrollTop(0),$(this).hcCharts()}function showCart(e){document.getElementById("pg-home").setAttribute("class","hide-section"),document.getElementById("pg-about").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","show-section"),cartContents(),$("html,body").scrollTop(0)}function goToDist(e){$("html,body").animate({scrollTop:$("#dist").offset().top},500)}function goToSize(e){$("html,body").animate({scrollTop:$("#size").offset().top},500)}function highlightName(e){serverName=document.getElementsByTagName("input")[0].setAttribute("class","highlight")}function checkCart(e){return serverName=document.getElementsByTagName("input")[0].value,"blank"==selectedDistro||"blank"==selectedSize||""==serverName?(document.getElementById("error").setAttribute("class","show-section animated fadeIn"),errors="","blank"==selectedDistro&&(errors+="<a href='#dist' onclick='goToDist()'>Please select a Distribution.</a>"),"blank"==selectedSize&&(errors+="<a href='#size' onclick='goToSize()'>Please select a Server Size.</a>"),""==serverName&&(errors+="<a href='#error' onclick='highlightName()'>Please select a Server Name.</a>"),document.getElementById("error").innerHTML=errors,!1):(document.getElementById("error").setAttribute("class","hide-section"),document.getElementById("pg-build").setAttribute("class","hide-section"),document.getElementById("pg-cart").setAttribute("class","show-section"),$("html,body").scrollTop(0),void 0)}function displayDist(e){document.getElementById("cms").setAttribute("class","hide-section"),document.getElementById("dist").setAttribute("class","group clearfix animated fadeIn show-section")}function displayCMS(e){document.getElementById("dist").setAttribute("class","hide-section"),document.getElementById("cms").setAttribute("class","group clearfix animated fadeIn show-section")}function selectUbuntu(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu").className+=" selected",selectedDistro="ubuntu"}function selectUbuntu2(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ubuntu2").className+=" selected",selectedDistro="ubuntu2"}function selectArdebian(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ardebian").className+=" selected",selectedDistro="ardebian"}function selectCentOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("centos").className+=" selected",selectedDistro="centos"}function selectCoreOS(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("coreos").className+=" selected",selectedDistro="coreos"}function selectFreeBSD(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("freebsd").className+=" selected",selectedDistro="freebsd"}function selectWordpress(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("wordpress").className+=" selected",selectedDistro="wordpress"}function selectDrupal7(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("drupal7").className+=" selected",selectedDistro="drupal7"}function selectDrupal8(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("drupal8").className+=" selected",selectedDistro="drupal8"}function selectJoomla(e){document.getElementById(selectedDistro).className=document.getElementById(selectedDistro).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("joomla").className+=" selected",selectedDistro="joomla"}function selectSmall(e){document.getElementById(selectedSize).className=document.getElementById(selectedSize).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("small").className+=" selected",selectedSize="small"}function selectMedium(e){document.getElementById(selectedSize).className=document.getElementById(selectedSize).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("medium").className+=" selected",selectedSize="medium"}function selectLarge(e){document.getElementById(selectedSize).className=document.getElementById(selectedSize).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("large").className+=" selected",selectedSize="large"}function selectCorporate(e){document.getElementById(selectedSize).className=document.getElementById(selectedSize).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("corporate").className+=" selected",selectedSize="corporate"}function selectUltimate(e){document.getElementById(selectedSize).className=document.getElementById(selectedSize).className.replace(/(?:^|\s)selected(?!\S)/g,""),document.getElementById("ultimate").className+=" selected",selectedSize="ultimate"}function cartContents(){"blank"!=selectedDistro&&"blank"!=selectedSize&&""!=serverName||(document.getElementById("cart-instructions").innerHTML="It looks like you haven't selected selected any options for your server yet. How about we <a href='#pg-build' onclick='showBuild()'>Get one set up </a>.",document.getElementById("cart-content").setAttribute("class","hide-section"),"blank"==selectedDistro&&document.getElementById("cart-content").setAttribute("class","show-section"),"blank"==selectedSize&&document.getElementById("cart-content").setAttribute("class","show-section"),""==serverName&&document.getElementById("cart-content").setAttribute("class","show-section"))}var showing=!1,selectedDistro="blank",selectedSize="blank",serverName,errors;!function(e){e(document).ready(function(){e(this).hcCharts()}),jQuery.fn.hcCharts=function(){function t(e,t){for(var s=0;s<e.series.length;s++)for(var n=e.series[s].userOptions.borderColor,l=0;l<e.series[s].points.length;l++)if(0!=e.series[s].points[l].y&&e.series[s].visible){var c=4,o=e.series[s].points[l].shapeArgs.width,i=e.series[s].points[l].shapeArgs.height,r=e.plotTop+e.plotHeight-e.series[s].points[l].shapeArgs.x-o,a=e.plotLeft+i;e.renderer.rect(a,r,c,o,0).attr({fill:n,"stroke-width":1,stroke:n,zIndex:3,"class":"custom-remove bar-chart-rect"}).add()}}var s="#4290c5",n="#316B92",l="#CF5B5A",c="#822D2C",o="#F8743A",i="#C55C2E",r="#008a32",a="#007129",d={lang:{thousandsSep:","},title:{text:null},subtitle:{text:null},credits:{enabled:!1},"export":{enabled:!1},chart:{spacing:[20,20,20,20]}};e(".chart-bar-h").doesExist()&&e(".chart-bar-h").each(function(m,u){var g=e(u),y="75%",h=g.data("chartsettings");h=jQuery.fn.userOpts(h);var b={chart:{type:"bar",events:{load:function(){t(this,h)},redraw:function(){g.find(".custom-remove").remove(),t(this,h)}}},xAxis:{tickLength:0,gridLineWidth:1,title:{text:null},labels:{style:{fontSize:16,color:"#676767",marginBottom:10}}},legend:{enabled:!0},yAxis:[{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:3,minorGridLineWidth:1,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}},{gridLineColor:"#bcbdbf",minorGridLineColor:"#DADCDB",gridLineWidth:2,minorGridLineWidth:1,opposite:!0,title:{text:""},labels:{align:"center",style:{color:"#a1a2a4",fontSize:13}}}],plotOptions:{bar:{dataLabels:{enabled:!0,useHTML:!0,formatter:function(){return 0==this.point.y?'<img style="width: 10px; height: 10px;" src="'+h.zeroImage+'"/>':void 0}}},series:{pointPadding:.05,groupPadding:.15}}};h.hasLegend?b.legend={layout:"horizontal",align:"right",verticalAlign:"top",x:0,y:0,floating:!1,borderWidth:0,shadow:!1}:b.legend.enabled=!1;var p=g.data("datatype");if("percent"==p&&(b.yAxis[0].labels.format="{value}%",b.yAxis[0].min=0,b.yAxis[0].max=100,b.yAxis[0].minorTickInterval=10,b.yAxis[0].tickInterval=50,b.yAxis[1].labels.format="{value}%",b.yAxis[1].min=0,b.yAxis[1].max=100,b.yAxis[1].minorTickInterval=10,b.yAxis[1].tickInterval=50),"numeric"==p){for(var f=[],B=[],I=0,E=0,A=0;A<h.series.length;A++)f[A]=Math.max.apply(null,h.series[A].data),B[A]=Math.min.apply(null,h.series[A].data);I=Math.max.apply(null,f),E=Math.max.apply(null,B),I+=.1*I,E-=.1*E;var N=5*Math.round(Math.ceil(Math.sqrt(I))/5);b.yAxis[0].gridLineWidth=1,b.yAxis[0].tickInterval=N,b.yAxis[0].min=E,b.yAxis[0].max=I,b.yAxis[1].gridLineWidth=1,b.yAxis[1].tickInterval=N,b.yAxis[1].min=E,b.yAxis[1].max=I}var S=g.data("charttype");"bartricolor"==S&&(b.series=[{},{},{},{}],b.series[0].color=s,b.series[0].borderColor=n,b.series[1].color=l,b.series[1].borderColor=c,b.series[2].color=o,b.series[2].borderColor=i,b.series[3].color=r,b.series[3].borderColor=a),"barbluesingle"==S&&(b.series=[{}],b.series[0].color=cBlue,b.series[0].borderColor=cDarkBlue,b.yAxis[0].labels.format="{value}",b.yAxis[1].labels.format="{value}");var D=e.extend(!0,{},d,b,h);jQuery.fn.hcChartsRender(g,D,y)})},jQuery.fn.hcChartsRender=function(e,t,s){if(e.hasClass("chart-waypoint")){e.waypoint(function(s){e.highcharts(t),this.destroy()},{offset:s})}else e.highcharts(t)},jQuery.fn.userOpts=function(t){if("string"!=e.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var s=t?t.indexOf("{"):-1,n={};if(-1!=s)try{n=jQuery.fn.str2json(t.substr(s))}catch(l){}return n},jQuery.fn.str2json=function(e,t){try{return t?JSON.parse(e.replace(/([\$\w]+)\s*:/g,function(e,t){return'"'+t+'":'}).replace(/'([^']+)'/g,function(e,t){return'"'+t+'"'})):new Function("","var json = "+e+"; return JSON.parse(JSON.stringify(json));")()}catch(s){return!1}},jQuery.fn.doesExist=function(){return jQuery(this).length>0}}(jQuery),console.log("Hey you! If you're looking to see some code checking out https://github.com/TannerWoodworth/tannerwoodworth.github.io might make it a bit easier for you!");