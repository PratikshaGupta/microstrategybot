var request = require("request"),
  Q = require("q")

var http = "https://mstr-botpress-skype-api.herokuapp.com/"

exports.getRegionRevenue = function(region) {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http+ 'revenue?region=' + region
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}

exports.getFuncRevenue = function(value) {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http+'revenue?func=' + value
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}

exports.getCompareRevenue = function() {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http+'comparison/revenue'
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}

exports.getCompareCost = function() {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http+'comparison/cost'
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}

exports.getFuncCost = function(value) {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http+'cost?func=' + value
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}

exports.getRegionCost = function(region) {
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: http + 'cost?region=' + region
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}