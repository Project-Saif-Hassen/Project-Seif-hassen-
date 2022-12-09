
var objPeople = [
	{ 
		username: "saif",
		password: "jaballah"
	},
	{ 
		username: "hassen",
		password: "barred"
	}

]
$("#clickme").click(function(){
	

	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!") 
			window.location.replace("file:///C:/Users/hasse/OneDrive/Bureau/Final%20version/home.html")

		}
	}
	console.log("incorrect username or password")
})
