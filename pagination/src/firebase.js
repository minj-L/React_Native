import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDafdlSF4CP6-vtMLs4hTgleDdLUw6lO3w",
  authDomain: "pagnation-36b09.firebaseapp.com",
  projectId: "pagnation-36b09",
  storageBucket: "pagnation-36b09.appspot.com",
  messagingSenderId: "1045873390695",
  appId: "1:1045873390695:web:73a520f3dd0d3226b5d0c2",
  measurementId: "G-0HBX450GZG",
};

export default firebase.initializeApp(firebaseConfig);
//웹과 파이어베이스 연동은 프로젝트 생성후 뜬 위의 것을 이렇게 작성후,
//console.log(firebase);를 쓰면 된다.