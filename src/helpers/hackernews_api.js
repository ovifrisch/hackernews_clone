var firebase = require('firebase');
require('firebase/database');
var firebaseConfig = {
        apiKey: "AIzaSyDCjJsgmr3XGoxDWoSP2KEk10mIy7D0od4",
        authDomain: "hackernews-f6d0b.firebaseapp.com",
        databaseURL: "https://hacker-news.firebaseio.com",
        projectId: "hackernews-f6d0b",
        storageBucket: "",
        messagingSenderId: "959104546516",
        appId: "1:959104546516:web:081348fd81064443"
};

firebase.initializeApp(firebaseConfig);
var hn = firebase.database();

function get(endpoint) {
	return new Promise((resolve, reject) => {
		endpoint.once("value", data => {
			resolve(data.val())
		})
	})
}

export function getItem(id) {
	return get(hn.ref("v0").child("item").child(id))
}

export function topstories() {
	return get(hn.ref("v0/topstories"))
}