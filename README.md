# cordova-plugin-sms #

This plugin is forked from the `cordova-plugin-sms` originally created and maintained by [Raymond Xie](https://github.com/floatinghotpot/cordova-plugin-sms). Please use the original plugin if you need the full features.

This version extends the `listSMS` features to use more advanced filters, like list messages from multiple addresses, and also combine with `regex` in the body of the messages.

We dropped options to `send / delete / restore` messages. This is version is modified for, and used in a project where those options are not needed.

### How to Use? ###

Use the plugin with Cordova CLI (v5.x or above). Just run:

```bash
cordova plugin add https://github.com/ultractiv/cordova-plugin-sms.git

# To use with Ionic v3 apps, run this ionic-native plugin
npm install --save git+https://github.com/ultractiv/sms-inbox.git
```

# API Overview #

### How to Use ###

```typescript
import SmsInbox from "@ionic-native/sms-inbox";

export class MyApp {
  messages = []
  constructor(private sms_inbox: SmsInbox) { }

  ...

  // List messages from Facebook and Google
  this.sms_inbox.listSMS({ addresses:['Facebook', 'Google'] })
    .then((messages) => {
      console.log(`Fetched ${messages.length} messages sent by Facebook and Google`);
      this.messages = messages;
      // do anything with messages
    })
    .catch(error => console.log('Error fetching messages:', error));
}
```

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
sendSMS(addresses, text, successCallback, failureCallback);
deleteSMS(filter, successCallback, failureCallback);
restoreSMS(msg_or_msgs, successCallback, failureCallback);
```

### Credits ###

This plugin is originally created and maintained by [Raymond Xie](https://github.com/floatinghotpot/cordova-plugin-sms).
Please refer to his website for more information regarding licensing.
