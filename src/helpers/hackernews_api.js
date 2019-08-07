require('fetch')
const base_url = "https://news.ycombinator.com";
const proxy_url = "https://immense-garden-15042.herokuapp.com"

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

export function signup(username, password, go_to) {
	return 0;
	// TODO: implement
}

// POST request to hackernews login endpoint
export function login(username, password, go_to) {
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Access-Control-Allow-Origin': '*'
	})

	return fetch(`${proxy_url}/${base_url}`, {
		method: 'POST',
		body: `acct=${username}&pw=${password}&goto=${go_to}`
	})

}

export function getItem(id) {
	return get(hn.ref("v0").child("item").child(id))
}

export function topstories() {
	return get(hn.ref("v0/topstories"))
}