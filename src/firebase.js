import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "#YourKey",
    authDomain: "#YourDomain",
    databaseURL: "#YourDatabase",
    projectId: "#YourProjectId",
    storageBucket: "#YourStorageBucket",
    messagingSenderId: "#YourId",
    appId: "#YourAppId",
    measurementId: "#YourId"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
}