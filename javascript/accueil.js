const requestURL = 'https://127.0.0.1:8001/api/comptes';

let body = document.querySelector("table");

window.onload = function() {

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            let tbody = document.createElement('tbody');

            for (let i = 0; i < data.length; i++) {
                let comptes = data[i]
                pbody(comptes);

                function pbody(jsonObj) {
                    let row = document.createElement('tr');

                    let uuid = jsonObj['uuid'];
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');

                    td1.textContent = uuid;
                    td1.onclick = function () {
                        document.location.href = 'ecritures.html?c_uuid=' + uuid;
                    };
                    td2.textContent = jsonObj['login']

                    row.appendChild(td1);
                    row.appendChild(td2);

                    tbody.appendChild(row);

                    body.appendChild(tbody);
                    document.getElementById('table').appendChild(tbody);
                }
            }
        })
}