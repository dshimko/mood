'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Keeps track of the length of the 'likes' child list in a separate property.
exports.countlikechange = functions.database.ref('/rest/mood').onWrite(event => {
  const collectionRef = event.data.ref;
const lastTenRef = collectionRef.orderByKey().limitToLast(10);
  const countRef = collectionRef.parent.child('mood_count');
  const currentRef = collectionRef.parent.child('mood_current');
  
  // Return the promise from countRef.transaction() so our function 
  // waits for this async event to complete before it exits.
  return countRef.transaction(current => {
    if (event.data.exists() && !event.data.previous.exists()) {
      return (current || 0) + 1;
    }
    else if (!event.data.exists() && event.data.previous.exists()) {
      return (current || 0) - 1;
    }
  }).then(() => {
        // Return the promise from counterRef.set() so our function
    // waits for this async event to complete before it exits.
    return lastTenRef.once('value')
        .then(lastTen => {
console.log(lastTen.val());

                console.log('current updated.');
        });
  }).then(() => {
	// Return the promise from counterRef.set() so our function
    // waits for this async event to complete before it exits.
    return collectionRef.once('value')
        .then(messagesData => {
		currentRef.set(3);
		countRef.set(messagesData.numChildren());
		console.log('Counter updated.');
	});
  }).then(() => {
    console.log('Count update function is done.');
  });

});

