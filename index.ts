import admin from "firebase-admin";

import serviceAccount from './key.json'

const serviceAccountObject = {
  projectId: serviceAccount.project_id,
  clientEmail: serviceAccount.client_email,
  privateKey: serviceAccount.private_key
};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountObject)
});

const message = {
  notification: {
    title: 'Bom dia',
    body: 'como vai vc ?'
  },
  token: 'cFShIZiSRE695V_Tfw06nk:APA91bFweRUHwf3siDZcL097KnZ0oNx0P5KF2-BDukqITWO1fxa7aMKK2BSWE8_EIYO8_8OjBW1dVq8A9Rl8oek6A0j4HjhOxnFAgxs7Ir4QPgChzd6T0xZRqiIDNia4wan3qu-sCOuf'

};

admin
  .messaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {

    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    console.log('Error details:', error.details);

    console.log('Error sending message:', error);
  });