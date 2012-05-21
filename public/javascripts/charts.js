function triggerNewRequest(){
  newUrl = ""
  window.location.herf=newUrl;
}

$(document).ready(function(){
  var plot1 = $.jqplot('chart1', [data], { 
      title: 'Gateway Monitor', 
      series: [{ 
          label: 'Google, Inc.', 
          neighborThreshold: -1 
      }], 
      axes: { 
          xaxis: { 
              renderer: $.jqplot.DateAxisRenderer,
              min: min, 
              tickInterval: interval, 
              tickOptions:{formatString:'/%#H:/%#M/:%/S'} 
          }, 
          yaxis: { 
              tickOptions:{formatString:'%d'} 
          } 
      }, 
      cursor:{ 
        show: true,
        showTooltip:false
      } 
  });
 
});



