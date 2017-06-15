
# cordova-plugin-sms #

Plugin to operate SMS, send / list / intercept / delete / restore.

### How to Use? ###

Use the plugin with Cordova CLI:

```bash
cordova plugin add https://github.com/ultractiv/cordova-plugin-sms.git
```

# API Overview #

### Methods ###

```javascript
listSMS(filter, successCallback, failureCallback);

startWatch(successCallback, failureCallback);
stopWatch(successCallback, failureCallback);

enableIntercept(on_off, successCallback, failureCallback);

setOptions(options, successCallback, failureCallback);
```

### Events ###

```javascript
'onSMSArrive'
```

# API Reference #

### listSMS ###

* listSMS(filter, successCallback, failureCallback);

Example Code:

```javascript
        	var filter = {
        		box : 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

        		// following 4 filters should NOT be used together, they are OR relationship
        		read : 0, // 0 for unread SMS, 1 for SMS already read
        		_id : 1234, // specify the msg id
        		address : '+8613601234567', // sender's phone number
        		body : 'This is a test SMS', // content to match

        		// following 2 filters can be used to list page up/down
        		indexFrom : 0, // start from index 0
        		maxCount : 10, // count of SMS to return each time
        	};
        	if(SMS) SMS.listSMS(filter, function(data){
    			updateStatus('sms listed as json array');
    			updateData( JSON.stringify(data) );

        		if(Array.isArray(data)) {
        			for(var i in data) {
        				var sms = data[i];
        			}
        		}
        	}, function(err){
        		updateStatus('error list sms: ' + err);
        	});
```

### startWatch ###

* startWatch(successCallback, failureCallback);

start observing and send following events to javascript:

* onSMSArrive
* onBluetoothConnected
* onBluetoothDisconnected

```javascript
        	if(SMS) SMS.startWatch(function(){
        		update('watching', 'watching started');
        	}, function(){
        		updateStatus('failed to start watching');
        	});
```

### stopWatch ###

* stopWatch(successCallback, failureCallback);

```javascript
        	if(SMS) SMS.stopWatch(function(){
        		update('watching', 'watching stopped');
        	}, function(){
        		updateStatus('failed to stop watching');
        	});
```

### enableIntercept ###

When intercept in ON, other SMS app will not receive when SMS incoming.

* enableIntercept(on_off, successCallback, failureCallback);

```javascript
        var interceptEnabled = false;

        function toggleIntercept() {
        	interceptEnabled = ! interceptEnabled;

        	if(interceptEnabled) { // clear the list before we start intercept
        		smsList.length = 0;
        	}

        	if(SMS) SMS.enableIntercept(interceptEnabled, function(){}, function(){});

        	$('span#intercept').text( 'intercept ' + (interceptEnabled ? 'ON' : 'OFF') );
        	$('button#enable_intercept').text( interceptEnabled ? 'Disable' : 'Enable' );
        }
```

### setOptions ###

* setOptions( options, successCallback, failureCallback);

Example Code:

```javascript
	if(SMS) SMS.setOptions({
		license: 'you@gmail.com/xxxxxxxxx'
	});
```

# Events #

### onSMSArrive ###

Triggered when a new SMS is incoming. Need call startWatch() first.

```javascript
            document.addEventListener('onSMSArrive', function(e){
            	var sms = e.data;

            	smsList.push( sms );
            	updateStatus('SMS arrived, count: ' + smsList.length );

            	// sms.address
            	// sms.body

            	var divdata = $('div#data');
            	divdata.html( divdata.html() + JSON.stringify( sms ) );

            });
```
