console.log("running backgorund");

class Apple {
	static Request_sessionID() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://itunesconnect.apple.com/olympus/v1/session", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

		console.log("hello world");
	}
	static Request_csv() {
		console.log("hellooooo world!");
	}
	static Request_txt() {
		console.log("hewwo");
	}
}

console.log(Apple.Request_sessionID());
console.log(Apple.Request_csv());
