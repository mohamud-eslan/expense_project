//document.getElementById("output").innerHTML = "navbar";
document.getElementById("send").onclick = function(){
    const salary =  document.getElementById("salary").value;
    const rent = document.getElementById("rent").value;
    const food = document.getElementById("food").value;
    const data = document.getElementById("data").value;

    const intSalary =parseInt(salary);
    const intRent = parseInt(rent);
    const intFood = parseInt(food);
    const intData = parseInt(data);

    const balance = intSalary - intRent - intFood - intData;
    document.getElementById("output").innerHTML = `your balance is ${balance}`;
    
    
}
