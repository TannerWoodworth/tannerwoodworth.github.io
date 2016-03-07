/**
 *
 * NAVIGATION
 *
 **/
var showing = false;

function expandNav(e) {
  event.preventDefault();
  if (showing == true) {
    document.getElementsByTagName("nav")[0].setAttribute("class", "hidden");
    showing = false;
  } else if (showing == false) {
    document.getElementsByTagName("nav")[0].setAttribute("class", "show");
    showing = true;
  };
};

function showHome(e) {
  document.getElementById('pg-build').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-home').setAttribute("class", "show-section animated fadeIn");
  $('html,body').scrollTop(0);
}

function showBuild(e) {
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "show-section");
  $('html,body').scrollTop(0);
}

function showAbout(e) {
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "show-section");
  $('html,body').scrollTop(0);
  $(this).hcCharts();
}

function showCart(e) {
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "show-section");
  cartContents();
  $('html,body').scrollTop(0);
}
/**
 *
 * GET STARTED PAGE FUNCTIONS
 *
 **/
function goToDist(event) {
  $('html,body').animate({
    scrollTop: $("#dist").offset().top
  }, 500);
}

function goToSize(event) {
  $('html,body').animate({
    scrollTop: $("#size").offset().top
  }, 500);
}

function highlightName(event) {
  serverName = document.getElementsByTagName("input")[0].setAttribute("class", "highlight");
}
var selectedDistro = ["blank", ""],
  selectedSize = ["blank", "", "", "", "", "", ],
  serverName = '',
  errors;

function checkCart(e) {
  serverName = document.getElementsByTagName("input")[0].value;
  if ((selectedDistro[0] == "blank") || (selectedSize[0] == "blank") || (serverName == '')) {
    document.getElementById('error').setAttribute("class", "show-section animated fadeIn");
    errors = "";
    if (selectedDistro[0] == "blank") {
      errors += "<a href='#dist' onclick='goToDist()'>Please select a Distribution.</a>";
    }
    if (selectedSize[0] == "blank") {
      errors += "<a href='#size' onclick='goToSize()'>Please select a Server Size.</a>";
    }
    if (serverName == "") {
      errors += "<a href='#error' onclick='highlightName()'>Please select a Server Name.</a>";
    }
    document.getElementById('error').innerHTML = errors;
    return false;
  } else {
    document.getElementById('error').setAttribute("class", "hide-section");
    document.getElementById('pg-build').setAttribute("class", "hide-section");
    document.getElementById('pg-cart').setAttribute("class", "show-section");
    cartContents();
    $('html,body').scrollTop(0);
  }
}

function displayDist(e) {
  document.getElementById('cms').setAttribute("class", "hide-section");
  document.getElementById('dist').setAttribute("class", "group clearfix animated fadeIn show-section");
}

function displayCMS(e) {
  document.getElementById('dist').setAttribute("class", "hide-section");
  document.getElementById('cms').setAttribute("class", "group clearfix animated fadeIn show-section");
}

function selectUbuntu(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("ubuntu").className += " selected";
  selectedDistro = ["ubuntu", "Ubuntu", "15.10"];
};

function selectUbuntu2(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("ubuntu2").className += " selected";
  selectedDistro = ["ubuntu2", "Ubuntu", "14.04"];
};

function selectArdebian(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("ardebian").className += " selected";
  selectedDistro = ["ardebian", "Ardebian", "8.3"];
};

function selectCentOS(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("centos").className += " selected";
  selectedDistro = ["centos", "centOS", "7.2"];
};

function selectCoreOS(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("coreos").className += " selected";
  selectedDistro = ["coreos", "coreOS", "835.13.0"];
};

function selectFreeBSD(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("freebsd").className += " selected";
  selectedDistro = ["freebsd", "freeBSD", "10.2"];
};

function selectWordpress(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("wordpress").className += " selected";
  selectedDistro = ["wordpress", "Wordpress", "4.4.2"];
};

function selectDrupal7(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("drupal7").className += " selected";
  selectedDistro = ["drupal7", "Drupal", "7.43"];
};

function selectDrupal8(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("drupal8").className += " selected";
  selectedDistro = ["drupal8", "Drupal", "8.0.5"];
};

function selectJoomla(e) {
  document.getElementById(selectedDistro[0]).className = document.getElementById(selectedDistro[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("joomla").className += " selected";
  selectedDistro = ["joomla", "Joomla", "3.4.8"];
};

function selectSmall(e) {
  document.getElementById(selectedSize[0]).className = document.getElementById(selectedSize[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("small").className += " selected";
  selectedSize = ["small", "Small", "10GB", "1GB ", "1TB", "$5"];
};

function selectMedium(e) {
  document.getElementById(selectedSize[0]).className = document.getElementById(selectedSize[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("medium").className += " selected";
  selectedSize = ["medium", "Medium", "30GB", "2GB ", "3TB", "$10"];
};

function selectLarge(e) {
  document.getElementById(selectedSize[0]).className = document.getElementById(selectedSize[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("large").className += " selected";
  selectedSize = ["large", "Large", "50GB", "6GB ", "5TB", "$20"];
};

function selectCorporate(e) {
  document.getElementById(selectedSize[0]).className = document.getElementById(selectedSize[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("corporate").className += " selected";
  selectedSize = ["corporate", "Corporate", "500GB", "36GB ", "Unlimited", "$60"];
};

function selectUltimate(e) {
  document.getElementById(selectedSize[0]).className = document.getElementById(selectedSize[0]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
  document.getElementById("ultimate").className += " selected";
  selectedSize = ["ultimate", "Ultimate", "1.5TB", "64GB ", "Unlimited", "$120"];
};
/**
 *
 * CART PAGE FUNCTIONS
 *
 **/

function changeDist() {
  document.getElementById('change-dist').setAttribute("class", "show-section");
  document.getElementById('csd').setAttribute("class", "hide-section");
}

function changePlan() {
  document.getElementById('change-plan').setAttribute("class", "show-section");
  document.getElementById('csp').setAttribute("class", "hide-section");
}

function changeName() {
  document.getElementById('change-name').setAttribute("class", "show-section");
  document.getElementById('csn').setAttribute("class", "hide-section");
}

function changeCartName() {
  serverName = document.getElementsByTagName("input")[1].value;
  document.getElementById('cn').innerHTML = serverName;
  if (serverName==''){
    document.getElementById('error-2').setAttribute("class", "show-section animated fadeIn");
    document.getElementById('final-checkout').setAttribute("class", "animated fadeOut");
  } else{
    document.getElementById('error-2').setAttribute("class", "hide-section");
    document.getElementById('change-name').setAttribute("class", "hide-section");
    document.getElementById('csn').setAttribute("class", "show-section");
    cartVerify();
  }
}

function confirm() {
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-thanks').setAttribute("class", "show-section");
  console.log("confirmed!");
}
function cartVerify(){
  if ((selectedDistro[0] !== "blank") && (selectedSize[0] !== "blank") && (serverName !== '')) {
   document.getElementById("final-checkout").className = document.getElementById("final-checkout").className.replace(/(?:^|\s)hide-section(?!\S)/g, '');
   document.getElementById("final-checkout").className = "confirm animated fadeIn show-section";
 }
}
function cartContents() {

  cartVerify();

  if ((selectedDistro[0] == "blank") && (selectedSize[0] == "blank") && (serverName == '')) {
    document.getElementById('cart-instructions').innerHTML = "It looks like you haven't selected selected any options for your server yet. How about we <a href='#pg-build' onclick='showBuild()'>get one set up </a>?";
    document.getElementById('cart-content').setAttribute("class", "hide-section");
  } else{
    document.getElementById('cart-content').setAttribute("class", "show-section");
    document.getElementById('cart-instructions').innerHTML = "Please take a moment to review your order. If all of the information is correct, click the confirm button below and we'll get your server set up for you so you can get going!";
    if (selectedDistro[0] == "blank") {
      document.getElementById('cart-distro').innerHTML = "Looks like you still need to pick a distribution. How about we <a href='#dist' onclick='showBuild()'>select a distribution</a>?";
    } else {
      document.getElementById('cart-distro').innerHTML = "<p class='info'>Distribution: <span class='important'>" + selectedDistro[1] + "</p> <p class='info'>Version: <span class='important'>" + selectedDistro[2] + "</p> <a id='csd' href='#dist' onclick='showBuild()'>Change Distribution</a>";
    }
    if (selectedSize[0] == "blank") {
      document.getElementById('cart-size').innerHTML = "Looks like you still need to pick a server size. How about we <a href='#size' onclick='showBuild()'>select a plan</a>?";
    } else {
      document.getElementById('cart-size').innerHTML = "<p class='info'>Plan Name: <span class='important'>" + selectedSize[1] + "</p> <p class='info'>Size: <span class='important'>" + selectedSize[2] + "</p> <p class='info'>Speed: <span class='important'>" + selectedSize[3] + "</p><p class='info'>Transfer Limit: <span class='important'>" + selectedSize[4] + "</p> <a id='csp' href='#size' onclick='showBuild()'>Change Server Plan</a>";
    }
    if (serverName == "") {
      document.getElementById('cart-name').innerHTML = "Looks like you still need to pick a server name. How about we <a href='#error' onclick='showBuild()'>pick a name</a>?";
    } else {
      document.getElementById('cart-name').innerHTML = "<p class='info'>Name: <span id='cn' class='important'>" + serverName + "</p> <a id='csn' href='#cart-name' onclick='changeName()'>Change Server Name</a>";
    }
  }
}
/**
 *
 * HIGHCHARTS
 *
 **/
(function($) {
  $(document).ready(function() {
    $(this).hcCharts();
  });
  //================================
  // Highcharts Charts
  //================================
  jQuery.fn.hcCharts = function() {
    // Colors
    var sM = "#4290c5",
      dSM = "#316B92",
      as = "#CF5B5A",
      dAS = "#822D2C",
      hL = "#F8743A",
      dHL = "#C55C2E",
      sD = "#008a32",
      dSD = "#007129";

    var sharedOpts = {
      lang: {
        thousandsSep: ',',
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      export: {
        enabled: false,
      },
      chart: {
        spacing: [20, 20, 20, 20],
      }
    };
    /*======== Bar Chart =========*/
    if ($('.chart-bar-h').doesExist()) {
      $('.chart-bar-h').each(function(index, el) {
        var chart = $(el);
        var waypointOffset = '75%';
        var userOpts = chart.data('chartsettings');
        userOpts = jQuery.fn.userOpts(userOpts);
        var chartoptns = {
          chart: {
            type: 'bar',
            events: {
              load: function() {
                bar_postrender(this, userOpts);
              },
              redraw: function() {
                chart.find('.custom-remove').remove();
                bar_postrender(this, userOpts);
              }
            }
          },
          xAxis: {
            tickLength: 0,
            gridLineWidth: 1,
            title: {
              text: null
            },
            labels: {
              style: {
                fontSize: 16,
                color: '#676767',
                marginBottom: 10,
              }
            }
          },
          legend: {
            enabled: true,
          },
          yAxis: [{
            gridLineColor: '#bcbdbf',
            minorGridLineColor: '#DADCDB',
            gridLineWidth: 3,
            minorGridLineWidth: 1,
            title: {
              text: '',
            },
            labels: {
              align: 'center',
              style: {
                color: '#a1a2a4',
                fontSize: 13,
              }
            },
          }, {
            gridLineColor: '#bcbdbf',
            minorGridLineColor: '#DADCDB',
            gridLineWidth: 2,
            minorGridLineWidth: 1,
            opposite: true,
            title: {
              text: '',
            },
            labels: {
              align: 'center',
              style: {
                color: '#a1a2a4',
                fontSize: 13,
              }
            },
          }],
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true,
                useHTML: true,
                formatter: function() {
                  if (this.point.y == 0) {
                    return '<img style="width: 10px; height: 10px;" src="' + userOpts.zeroImage + '"/>';
                  };
                },
              },
            },
            series: {
              pointPadding: 0.05,
              groupPadding: 0.15,
            }
          }
        };

        //Define Chart Legend
        if (userOpts.hasLegend) {
          chartoptns.legend = {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 0,
            shadow: false,
          }
        } else {
          chartoptns.legend.enabled = false;
        }

        //Datatype Overrides
        var datatype = chart.data('datatype');
        if (datatype == 'percent') {
          chartoptns.yAxis[0].labels.format = '{value}%';
          chartoptns.yAxis[0].min = 0;
          chartoptns.yAxis[0].max = 100;
          chartoptns.yAxis[0].minorTickInterval = 10;
          chartoptns.yAxis[0].tickInterval = 50;
          //Opposite
          chartoptns.yAxis[1].labels.format = '{value}%';
          chartoptns.yAxis[1].min = 0;
          chartoptns.yAxis[1].max = 100;
          chartoptns.yAxis[1].minorTickInterval = 10;
          chartoptns.yAxis[1].tickInterval = 50;
        }
        if (datatype == 'numeric') {
          var maxValArray = [];
          var minValArray = [];
          var maxVal = 0;
          var minVal = 0;
          for (var i = 0; i < userOpts.series.length; i++) {
            maxValArray[i] = Math.max.apply(null, userOpts.series[i].data);
            minValArray[i] = Math.min.apply(null, userOpts.series[i].data);
          }
          maxVal = Math.max.apply(null, maxValArray);
          minVal = Math.max.apply(null, minValArray);
          maxVal = maxVal + (maxVal * .1);
          minVal = minVal - (minVal * .1);
          var tickInt = 5 * (Math.round(Math.ceil(Math.sqrt(maxVal)) / 5));
          chartoptns.yAxis[0].gridLineWidth = 1;
          chartoptns.yAxis[0].tickInterval = tickInt;
          chartoptns.yAxis[0].min = minVal;
          chartoptns.yAxis[0].max = maxVal;
          //Opposite
          chartoptns.yAxis[1].gridLineWidth = 1;
          chartoptns.yAxis[1].tickInterval = tickInt;
          chartoptns.yAxis[1].min = minVal;
          chartoptns.yAxis[1].max = maxVal;
        }

        //Chartype Overrides
        var charttype = chart.data('charttype');
        if (charttype == 'bartricolor') {
          chartoptns.series = [{}, {}, {}, {}];
          chartoptns.series[0].color = sM;
          chartoptns.series[0].borderColor = dSM;
          chartoptns.series[1].color = as;
          chartoptns.series[1].borderColor = dAS;
          chartoptns.series[2].color = hL;
          chartoptns.series[2].borderColor = dHL;
          chartoptns.series[3].color = sD;
          chartoptns.series[3].borderColor = dSD;
        }
        if (charttype == 'barbluesingle') {
          chartoptns.series = [{}];
          chartoptns.series[0].color = cBlue;
          chartoptns.series[0].borderColor = cDarkBlue;
          // prevent labels from converting to 2k, 4k, etc...
          chartoptns.yAxis[0].labels.format = '{value}';
          chartoptns.yAxis[1].labels.format = '{value}';
        }

        //Merge userOpts and chartoptns
        var combinedOpts = $.extend(true, {}, sharedOpts, chartoptns, userOpts);

        //Render the chart
        jQuery.fn.hcChartsRender(chart, combinedOpts, waypointOffset);
      });
    }
    /*====== END: Bar Chart 1 ======*/
    // POST RENDERERS
    function bar_postrender(chart, userOpts) {
      for (var s = 0; s < chart.series.length; s++) {
        var borderColor = chart.series[s].userOptions.borderColor;
        for (var d = 0; d < chart.series[s].points.length; d++) {
          if (chart.series[s].points[d].y != 0 && chart.series[s].visible) {
            var barcapWidth = 4;
            var lgth = chart.series[s].points[d].shapeArgs.width;
            var hgt = chart.series[s].points[d].shapeArgs.height;
            var xcor = (chart.plotTop + chart.plotHeight - chart.series[s].points[d].shapeArgs.x - lgth);
            var ycor = (chart.plotLeft + hgt);
            chart.renderer.rect(ycor, xcor, barcapWidth, lgth, 0)
              .attr({
                fill: borderColor,
                'stroke-width': 1,
                stroke: borderColor,
                zIndex: 3,
                class: 'custom-remove bar-chart-rect'
              })
              .add();
          }
        }
      }
    }; // bar_postrender
  };
  //HELPER FUNCTIONS
  jQuery.fn.hcChartsRender = function(chart, combinedOpts, offset) {
      if (chart.hasClass("chart-waypoint")) {
        //waypoint function
        var waypoints = chart.waypoint(function(direction) {
          chart.highcharts(combinedOpts);
          this.destroy();
        }, {
          offset: offset,
        });
      } else {
        chart.highcharts(combinedOpts);
      }

    }
    //Returns JSON object from string
  jQuery.fn.userOpts = function(string) {
    if ($.type(string) != 'string') return string;
    if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
      string = '{' + string + '}';
    }
    var start = (string ? string.indexOf("{") : -1),
      options = {};
    if (start != -1) {
      try {
        options = jQuery.fn.str2json(string.substr(start));
      } catch (e) {}
    }
    return options;
  };
  //Converts string to JSON
  jQuery.fn.str2json = function(str, notevil) {
    try {
      if (notevil) {
        return JSON.parse(str
          // wrap keys without quote with valid double quote
          .replace(/([\$\w]+)\s*:/g, function(_, $1) {
            return '"' + $1 + '":';
          })
          // replacing single quote wrapped ones to double quote
          .replace(/'([^']+)'/g, function(_, $1) {
            return '"' + $1 + '"';
          })
        );
      } else {
        return (new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));"))();
      }
    } catch (e) {
      return false;
    }
  };
  //Check if element exists function
  jQuery.fn.doesExist = function() {
    return jQuery(this).length > 0;
  };
})(jQuery);
