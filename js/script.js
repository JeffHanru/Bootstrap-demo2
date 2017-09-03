var lineChartData = {
    //X-axix
    labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
    datasets : [
        {
            fillColor : "rgba(255,255,255,0)",
            strokeColor : "red",
            pointColor : "rgba(255, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [85,225,265,484,233,257,290]
        }
        ,{
            fillColor : "rgba(255,255,255,0)",
            strokeColor : "blue",
            pointColor : "rgba(23, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [114,255,455,414,599,605,500]
        }
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}