(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  //myChart.getModel().getComponent('bmap').getBMap();
  // 2. 指定配置和数据
  var indexList = ["1-3044"];
  // var indexList = ["1-500","501-1000","1001-1500","1501-2000","2001-2500","2501-3000","3001-3044"];
  console.log("LOAD");
  for (let indexV in indexList) {
    console.log('https://cdn.jsdelivr.net/gh/CN-Robert-LIU/images@master/blog/echart/shanghai-jiaotong' + '/json/bus_line_shanghai'+indexList[indexV]+'.json');
  $.get('https://cdn.jsdelivr.net/gh/CN-Robert-LIU/images@master/blog/echart/shanghai-jiaotong' + '/json/bus_line_shanghai'+indexList[indexV]+'.json', function(data) {
    var hStep = 300 / (data.length - 1);
    var busLines = [].concat.apply([], data.map(function (busLine, idx) {
        var prevPt;
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                pt = [
                    prevPt[0] + pt[0],
                    prevPt[1] + pt[1]
                ];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                }
            }
        };
    }));
    console.log("length"+Object.call(busLines)+Object.keys(busLines).length);
    myChart.setOption(option = {
        bmap: {
            center: [121.48, 31.25],
            zoom: 20,
            roam: true,
            mapStyle: {
              'styleJson': [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }
              ]
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                // color: '#c23531',
                // color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
            },
            progressiveThreshold: 500,
            progressive: 200
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            lineStyle: {
                width: 0
            },
            effect: {
                constantSpeed: 10,
                show: true,
                trailLength: 0.1,
                symbolSize: 1.5
            },
            zlevel: 1
        }]
    });
});
  window.addEventListener("resize", function() {
    myChart.resize();
  });
}})();