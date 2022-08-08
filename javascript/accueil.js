let searchParam = new URLSearchParams(window.location.search);

let c_uuid = searchParam.get('c_uuid');
//  e90b7413-77da-406a-ac0c-d20dc46db5e2
let body = document.querySelector("table")
let requestURL = 'https://127.0.0.1:8000/api/comptes/'+c_uuid+'/ecritures';


window.onload = function() {

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            let tbody = document.createElement('tbody');

            for (let i = 0; i < data.items.length; i++) {
                let ecritures = data.items[i]
                pbody(ecritures);

                function pbody(jsonObj){
                    let row = document.createElement('tr');

                    let uuid = jsonObj['uuid'];
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let td4 = document.createElement('td');
                    let td5 = document.createElement('td');
                    let td6 = document.createElement('td');
                    let td7 = document.createElement('td');
                    let td8 = document.createElement('td');
                    let button1 = document.createElement('button')
                    let button2 = document.createElement('button')

                    td1.textContent = jsonObj['uuid'];
                    td2.textContent = jsonObj['label'];
                    td3.textContent = jsonObj['date'];
                    td4.textContent = jsonObj['amount'];
                    td5.textContent = jsonObj['type'];
                    td6.textContent = jsonObj['created_at'];
                    td7.textContent = jsonObj['updated_at'];
                    button1.textContent = 'Modifier';
                    button1.onclick = function(){
                        document.location.href='modifier.html?c_uuid='+c_uuid+'&uuid='+uuid;
                    }
                    button2.textContent = 'Supprimer';
                    button2.style.marginLeft = '10px';
                    button2.onclick = function (){
                        const Url = 'https://127.0.0.1:8000/api/comptes/'+c_uuid+'/ecritures/'+uuid;

                            fetch(Url,{
                                method: "DELETE",
                                headers :{
                                    'Content-Type' : 'application-json'
                                },
                            })
                                .then(res => {
                                    if (res.status ===204){
                                        window.location.reload();
                                    }
                                })
                                .catch(err => console.log(err))

                        }




                    for (let j = 0; j < 6;j++){
                        row.appendChild(td1);
                        row.appendChild(td2);
                        row.appendChild(td3);
                        row.appendChild(td4);
                        row.appendChild(td5);
                        row.appendChild(td6);
                        row.appendChild(td7);
                        td8.appendChild(button1)
                        td8.appendChild(button2)
                        row.appendChild(td8);
                        tbody.appendChild(row)
                    }
                    body.appendChild(tbody);
                    document.getElementById('table').appendChild(tbody);

                }
            }
        })}