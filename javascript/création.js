let searchParam = new URLSearchParams(window.location.search);

let c_uuid = searchParam.get('c_uuid');
const requestURL = 'https://127.0.0.1:8000/api/comptes/'+c_uuid+'/ecritures';

const form = document.getElementById('form');

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const payload = new FormData(form);

    console.log([...payload]);

    const plainFormData = Object.fromEntries(payload.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        body: formDataJsonString,
    };

    fetch(requestURL,fetchOptions)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    window.location.href ='ecritures.html?c_uuid='+c_uuid

    window.alert('Création éffectuée')

});
