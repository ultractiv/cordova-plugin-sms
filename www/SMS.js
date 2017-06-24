
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var safesmsExport = {};

/*
 * Methods
 */

safesmsExport.startWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'startWatch', [] );
};

safesmsExport.stopWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'stopWatch', [] );
};

safesmsExport.enableIntercept = function(on_off, successCallback, failureCallback) {
	on_off = !! on_off;
	cordova.exec( successCallback, failureCallback, 'SMS', 'enableIntercept', [ on_off ] );
};

safesmsExport.listSMS = function(filter, successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'listSMS', [ filter ] );
};

module.exports = safesmsExport;
