importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function () {
  console.log("fcm service worker가 실행되었습니다.");
});

const firebaseConfig = {
  apiKey: "AIzaSyCLpl4R5gK-yWINZXV34LQU82VR6WeEMrA",
  authDomain: "api-key-timer.firebaseapp.com",
  projectId: "api-key-timer",
  storageBucket: "api-key-timer.firebasestorage.app",
  messagingSenderId: "780445662599",
  appId: "1:780445662599:web:f8e7b62d1e3653bdd36722",
  measurementId: "G-DMZNVD7CDM",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { data } = payload;

  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    // icon: payload.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
