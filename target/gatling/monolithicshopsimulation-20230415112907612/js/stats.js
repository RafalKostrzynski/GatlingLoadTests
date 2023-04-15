var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "27",
        "ok": "-",
        "ko": "26"
    },
    "percentiles2": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "percentiles3": {
        "total": "43",
        "ok": "-",
        "ko": "43"
    },
    "percentiles4": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "27",
        "ok": "-",
        "ko": "27"
    },
    "percentiles2": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "percentiles3": {
        "total": "43",
        "ok": "-",
        "ko": "43"
    },
    "percentiles4": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
