const userInfo = {
    name: "Daisy",
    email: "dyi@gmail.com",
};

const submitData = {
    method : "POST",
    headers : {
        "Content-Type" : "applcation/json",
        "Accept" : "application/json",
    },
    body : JSON.stringify(userInfo),
};

fetch ("http://localhost:3000/users", submitData)
.then(function(response) {
    return response.json();
})
.then(function(id) {
    console.log(id);
})
.catch(function(error) {
    alert("uh-oh");
    console.log(error.messagE);
});

