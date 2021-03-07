const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


(async () => {
  const postRef = db.collection("posts");
  // Add a new document in collection "cities"
  await postRef.add({
    title: "Title 2",
    body: "this is a body"
  })
})();
