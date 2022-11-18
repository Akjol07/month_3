const btn = document.querySelector("button");

btn.addEventListener("click", () => {
   const request = new XMLHttpRequest();
   request.open("GET", "data.json");
   request.setRequestHeader("Content-type", "application/json");
   request.send();
   request.addEventListener("load", () => {
       console.log(JSON.parse(request.response));
       const data = JSON.parse(request.response);
       document.querySelector(".name").innerHTML = data.name;
       document.querySelector(".age").innerHTML = data.age;
       document.querySelector(".address").innerHTML = data.address;
       document.querySelector(".number").innerHTML = data.number;
   });
});

