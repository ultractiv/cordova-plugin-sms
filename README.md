# cordova-plugin-sms #

This plugin is forked from the `cordova-plugin-sms` originally created and maintained by [Raymond Xie](https://github.com/floatinghotpot). Some functionality have been dropped in this fork. Please use the original [cordova-plugin-sms](https://github.com/floatinghotpot/cordova-plugin-sms) if you need the full features of the plugin in your project.

This fork extends the `listSMS` functionality to use more advanced filters, like list messages from multiple addresses, and also combining with `RegExp` to match the body of the messages to list.

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
```

### Dropped/Deprecated Methods ###

The following methods are not supported in this fork of the plugin. Use the original [cordova-plugin-sms](https://github.com/floatinghotpot/cordova-plugin-sms) if you need to use these features.

```javascript
sendSMS(addresses, text, successCallback, failureCallback);
deleteSMS(filter, successCallback, failureCallback);
restoreSMS(msg_or_msgs, successCallback, failureCallback);
setOptions(options, successCallback, failureCallback);
```

### Credits ###

Contributions to this fork of `cordova-plugin-sms` by [Yemi Agbetunsin](https://github.com/temiyemi).

`cordova-plugin-sms` is originally authored by [Raymond Xie](https://github.com/floatinghotpot) and maintained at the  [cordova-plugin-sms](https://github.com/floatinghotpot/cordova-plugin-sms) repo.
