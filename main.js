// Make a request for a user with a given ID
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

function randomMony() {
    return (Math.floor( Math.random() * (2000 )+ 100));
}



let dataRes ='';
function data() { 
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    dataRes = response.data;
  })
  .catch(function (error) {
    // handle error
    return (error);
  })
}
data();
console.log(dataRes);
window.addEventListener('load', function(){
    for (const info of dataRes) {
       let table= `
       <tr>
    <td>${info.id}</td>
    <td>${info.phone}</td>
    <td>${info.name}</td>
    <td>${info.address.city} , ${info.address.street}</td>
    <td>${randomMony()}</td>
    <td>${randomDate(new Date(2024, 7, 11), new Date())}</td>
    </tr>
    `
    document.getElementById("tBody").innerHTML+=table;
}

});






  

