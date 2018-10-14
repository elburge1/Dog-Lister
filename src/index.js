import React from "react";
import ReactDOM from "react-dom";

const https = new XMLHttpRequest();
const url = "https://dog.ceo/api/breeds/list/all"

https.open("GET", url);
https.send();

https.onreadystatechange = () => {
    console.log(typeof https.responseText, Object.keys(JSON.parse(https.responseText)["message"]));
}

const Index = () => {
    return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));