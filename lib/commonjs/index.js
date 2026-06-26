"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkHealthPermissionsGranted = checkHealthPermissionsGranted;
exports.initializeHealthStore = initializeHealthStore;
exports.readActiveCaloriesData = readActiveCaloriesData;
exports.readActiveTimeData = readActiveTimeData;
exports.readHeartRateData = readHeartRateData;
exports.readSleepData = readSleepData;
exports.readStepData = readStepData;
exports.requestHealthPermissions = requestHealthPermissions;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'rn-samsung-health-data-api' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const RnSamsungHealthDataApi = _reactNative.NativeModules.RnSamsungHealthDataApi ? _reactNative.NativeModules.RnSamsungHealthDataApi : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

// Define health data functions
function initializeHealthStore() {
  return RnSamsungHealthDataApi.initializeHealthStore();
}
function checkHealthPermissionsGranted(permissions) {
  return RnSamsungHealthDataApi.checkHealthPermissionsGranted(permissions);
}
function requestHealthPermissions(permissions) {
  return RnSamsungHealthDataApi.requestHealthPermissions(permissions);
}
function readStepData(option) {
  const {
    timeRangeFilter,
    ascendingOrder
  } = option;
  const {
    operator,
    groupBy = 'hourly',
    gap = 1
  } = timeRangeFilter;

  // Handle the properties based on operator type
  let startDate;
  let endDate;
  if (operator === 'between') {
    startDate = timeRangeFilter.startTime;
    endDate = timeRangeFilter.endTime;
  } else if (operator === 'after') {
    startDate = timeRangeFilter.startTime;
    endDate = undefined;
  } else if (operator === 'before') {
    startDate = undefined;
    endDate = timeRangeFilter.endTime;
  }

  // Convert your operator names to the ones used in Kotlin
  return RnSamsungHealthDataApi.readStepData(gap, operator, groupBy, startDate, endDate, ascendingOrder);
}
function readSleepData(filter) {
  const {
    operator
  } = filter;

  // Handle the properties based on operator type
  let startDate;
  let endDate;
  if (operator === 'between') {
    startDate = filter.startTime;
    endDate = filter.endTime;
  } else if (operator === 'after') {
    startDate = filter.startTime;
    endDate = undefined;
  } else if (operator === 'before') {
    startDate = undefined;
    endDate = filter.endTime;
  }

  // Convert your operator names to the ones used in Kotlin
  return RnSamsungHealthDataApi.readSleepData(operator, startDate, endDate);
}
function readHeartRateData(option) {
  const {
    timeRangeFilter,
    ascendingOrder
  } = option;
  const {
    operator
  } = timeRangeFilter;

  // Handle the properties based on operator type
  let startDate;
  let endDate;
  if (operator === 'between') {
    startDate = timeRangeFilter.startTime;
    endDate = timeRangeFilter.endTime;
  } else if (operator === 'after') {
    startDate = timeRangeFilter.startTime;
    endDate = undefined;
  } else if (operator === 'before') {
    startDate = undefined;
    endDate = timeRangeFilter.endTime;
  }

  // Convert your operator names to the ones used in Kotlin
  return RnSamsungHealthDataApi.readHeartRateData(operator, startDate, endDate, ascendingOrder);
}
function readActiveTimeData(option) {
  const {
    timeRangeFilter,
    ascendingOrder
  } = option;
  const {
    operator
  } = timeRangeFilter;

  // Handle the properties based on operator type
  let startDate;
  let endDate;
  if (operator === 'between') {
    startDate = timeRangeFilter.startTime;
    endDate = timeRangeFilter.endTime;
  } else if (operator === 'after') {
    startDate = timeRangeFilter.startTime;
    endDate = undefined;
  } else if (operator === 'before') {
    startDate = undefined;
    endDate = timeRangeFilter.endTime;
  }

  // Convert your operator names to the ones used in Kotlin
  return RnSamsungHealthDataApi.readActiveTimeData(operator, startDate, endDate, ascendingOrder);
}
function readActiveCaloriesData(option) {
  const {
    timeRangeFilter,
    ascendingOrder
  } = option;
  const {
    operator
  } = timeRangeFilter;

  // Handle the properties based on operator type
  let startDate;
  let endDate;
  if (operator === 'between') {
    startDate = timeRangeFilter.startTime;
    endDate = timeRangeFilter.endTime;
  } else if (operator === 'after') {
    startDate = timeRangeFilter.startTime;
    endDate = undefined;
  } else if (operator === 'before') {
    startDate = undefined;
    endDate = timeRangeFilter.endTime;
  }

  // Convert your operator names to the ones used in Kotlin
  return RnSamsungHealthDataApi.readActiveCaloriesData(operator, startDate, endDate, ascendingOrder);
}
//# sourceMappingURL=index.js.map