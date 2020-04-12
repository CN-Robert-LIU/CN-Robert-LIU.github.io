var map;
window.onload = function () {
    var mapOptions = new shipxyMap.MapOptions();
    mapOptions.center = new shipxyMap.LatLng(32, 122);
    mapOptions.zoom = 5;
    mapOptions.mapType = shipxyMap.MapType.CMAP;
    //mapDiv是一个DIV容器的id，用于放置flash地图组件
    map = new shipxyMap.Map('mapDiv', mapOptions); //创建地图实例
    //地图初始化完毕
    shipxyMap.mapReady = function () {
//地图初始化完毕才能操作 地图其他的接口
    }
}