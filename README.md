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

See full list of filters further below.

```typescript
import SmsInbox from "@ionic-native/sms-inbox";

export class MyApp {

  messages = []

  constructor(private sms_inbox: SmsInbox) {
    this.getMessages();
  }

  ...

  getMessages(): void {

    let filter: object = {
      indexFrom: 299,      // Filter from messages with _ids > 299
      maxCount:  5,        // Return only 5 messages  
      addresses:['Facebook', 'Google'] // Sent by Facebook and/or Google
    }

    // List messages from Facebook and Google
    this.sms_inbox.listSMS(filter)
      .then((messages) => {
        console.log(`Fetched ${messages.length} messages sent by Facebook and Google`);
        this.messages = messages;
        // do anything with messages
      })
      .catch(error => console.log('Error fetching messages:', error));
  }

}
```

### More on listSMS filter ###

See below for the full list of options to set in the listSMS filter.
Best practice: set only the options you require to match and list sms messages.

```typescript

let filter: object = {
  // Get the sms with the specified _id
  // NOTE: this returns only the message and disregards all other filters
  _id: 0, // defaults to 0 (if not specified to ignore matching by _id)

  // Filter sms by read status
  read: 1, // defaults to 0 (if not specified to ignore matching by read status)

  // NOTE: You may use the following filters together
  // provided you have not specified _id or read options above
  // otherwise these are always overridden by _id or read when specified together

  // Filter sms from message with _id > indexFrom
  // NOTE: Only messages with _id > indexFrom will be listed
  indexFrom: 0, // defaults to 0 (if not specified to ignore matching by message _id)

  // Specify the max number of sms to return
  maxCount: 500, // defaults to 100 (if not specified)

  // Filter sms from a single address
  // NOTE: addresses override address if you set both options together
  address: 'Facebook', // defaults to ''
  // Or from multiple addresses
  addresses: ['Facebook', 'Google', 'Instagram', 'Pinterest', 'Twitter'], // defaults to []

  // Filter sms by body content using RegEx patterns
  // NOTE: contents override body if you set both options together
  // To match a single body pattern, use
  body: "A java (?:reg|ex) expression\\.*", // defaults to ''
  // or use contents for a combination of body patterns to match
  contents: [
    "A java (?:reg|ex) expression\\.*",
    "The [0-9]+(?:th|nd) java regex pattern\\.*",
    "\\.*Yet another java regex pattern to match\\.*"
  ] // defaults to []
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
