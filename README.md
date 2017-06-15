
# cordova-plugin-sms #

This plugin is forked from the `cordova-plugin-sms` originally created and maintained by [Raymond Xie](https://github.com/floatinghotpot/cordova-plugin-sms). Please use the original plugin if you need the full features.

This version extends the `list` SMS feature, and removes capabilities to `send / delete / restore` messages. This is used in a project where those aren't needed.

### How to Use? ###

Use the plugin with Cordova CLI (v5.x or above). Just run:

```bash
cordova plugin add https://github.com/ultractiv/cordova-plugin-sms.git
```

# API Overview #

### Available Methods ###

```javascript
listSMS(filter, successCallback, failureCallback);

startWatch(successCallback, failureCallback);
stopWatch(successCallback, failureCallback);

enableIntercept(on_off, successCallback, failureCallback);

setOptions(options, successCallback, failureCallback);
```

### Dropped/Deprecated Methods ###

Use the [original plugin](https://github.com/floatinghotpot/cordova-plugin-sms) if you need to use these features.

```javascript
sendSMS(address(s), text, successCallback, failureCallback);
deleteSMS(filter, successCallback, failureCallback);
restoreSMS(msg_or_msgs, successCallback, failureCallback);
```

### Credits ###

This plugin is originally created and maintained by [Raymond Xie](https://github.com/floatinghotpot/cordova-plugin-sms).
Please refer to his website for more information regarding licensing.
