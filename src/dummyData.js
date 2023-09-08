import http from "./services/httpService";

const arr = {
  data: [
    [1693526550000, 1, "1"],
    [1693526550000, 3, "2"],
    [1693526550000, 4, "3"],
    [1693526460000, 25, "1"],
    [1693526460000, 40, "2"],
    [1693526460000, 35, "3"],
    [1693526560000, 15, "1"],
    [1693526560000, 20, "2"],
    [1693526560000, 35, "3"],
    [1693526520000, 40, "1"],
    [1693526520000, 50, "2"],
    [1693526520000, 66, "3"],
  ],
};

async function fetchData(category) {
  let data = await http.get("/" + category);

  data = data["data"]["data"];

  //   console.log(objectArray, 'objectArray');

  return data;
}

function getChartData(category) {
  return processData(category);
}

function processData(category) {
  // const data  = await fetchData(category);

  let objectArray = arr["data"].map(([timestamp, value, c]) => {
    return {
      time: timestamp,
      value: value,
      category: "category" + c,
    };
  });

  if (category != "all categories") {
    objectArray = objectArray.filter((obj) => obj.category == category);
  }

  return objectArray;
}

function getAverage(arr) {
  let n = arr.length;

  let sum = arr.reduce((sum, obj) => (sum = +obj), 0);

  return sum / n;
}

function getMedian(arr) {
  let n = arr.length;

  if (n % 2 == 0) {
    return (arr[n / 2] + arr[n / 2 + 1]) / 2;
  }

  return arr[n / 2];
}

function getScatterData(category) {
  let data = arr["data"];

  let scatterData = [];

  if (category != "all categories") {
    let i = category[category.length - 1];

    console.log(category, "selected category:");

    let filteredTime = [];
    let filteredValue = [];

    data.forEach(([time, value, cat]) => {
      if (cat == i) {
        filteredTime.push(time);
        filteredValue.push(value);
      }
    });

    let avgTime = getAverage(filteredTime, i);
    let avgVal = getAverage(filteredValue, i);
    scatterData.push({ time: avgTime, val: avgVal, category: "Avg Cat" + i });

    let medTime = getMedian(filteredValue, i);
    let medVal = getMedian(filteredValue, i);
    scatterData.push({ time: medTime, val: medVal, category: "Med Cat" + i });

    console.log(scatterData, "Scatter data");

    return scatterData;
  }

  for (let i = 1; i <= 3; i++) {
    let filteredTime = [];
    let filteredValue = [];

    data.forEach(([time, value, cat]) => {
      if (cat == i) {
        filteredTime.push(time);
        filteredValue.push(value);
      }
    });

    let avgTime = getAverage(filteredTime, i);
    let avgVal = getAverage(filteredValue, i);
    scatterData.push({ time: avgTime, val: avgVal, category: "Avg Cat" + i });

    let medTime = getMedian(filteredValue, i);
    let medVal = getMedian(filteredValue, i);
    scatterData.push({ time: medTime, val: medVal, category: "Med Cat" + i });
  }

  let totalSumTime = 0;
  let totalSumVal = 0;

  arr["data"].map(([time, val, cat]) => {
    totalSumTime += time;
    totalSumVal += val;
  });

  let totalTimeAvg = totalSumTime / arr["data"].length;
  let totalValAvg = totalSumVal / arr["data"].length;

  scatterData.push({
    time: totalTimeAvg,
    val: totalValAvg,
    category: "Total Avg",
  });

  return scatterData;
}

export { getChartData, getScatterData };
