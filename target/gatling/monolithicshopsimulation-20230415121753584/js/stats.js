var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "39899",
        "ok": "39899",
        "ko": "60005"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "39899",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "49952",
        "ok": "39899",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "10053",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "49952",
        "ok": "39899",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "54979",
        "ok": "39899",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "59000",
        "ok": "39899",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "59804",
        "ok": "39899",
        "ko": "60005"
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
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.02",
        "ok": "0.01",
        "ko": "0.01"
    }
},
contents: {
"req_authenticate-4dcaf": {
        type: "REQUEST",
        name: "authenticate",
path: "authenticate",
pathFormatted: "req_authenticate-4dcaf",
stats: {
    "name": "authenticate",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "percentiles2": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "percentiles3": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39899",
        "ok": "39899",
        "ko": "-"
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.01",
        "ok": "0.01",
        "ko": "-"
    }
}
    },"req_test-098f6": {
        type: "REQUEST",
        name: "test",
path: "test",
pathFormatted: "req_test-098f6",
stats: {
    "name": "test",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.01",
        "ok": "-",
        "ko": "0.01"
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