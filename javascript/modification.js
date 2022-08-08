const form= document.querySelector("form")
let searchParam = new URLSearchParams(window.location.search);

let c_uuid = searchParam.get('c_uuid');
let uuid = searchParam.get('uuid');
console.log(c_uuid)
console.log(uuid)

const requestURL = 'https://127.0.0.1:8000/api/comptes/'+c_uuid+'/ecritures/'+uuid;

fetch(requestURL)
    .then(response =>response.json())
    .then(data =>{
        for (let i = 0; i < data.length; i++) {
            let ecriture = data[i]
            console.log(ecriture)

            let label1 = document.createElement("label");
            label1.setAttribute('for','uuid')

            let input1 = document.createElement("input");
            input1.setAttribute('type','text')
            input1.setAttribute('name','uuid')
            input1.setAttribute('id','uuid')

            label1.textContent = "Uuid : ";
            input1.value = ecriture['uuid'];

            form.appendChild(label1);
            form.appendChild(input1);

            let label2 = document.createElement("label");
            label2.setAttribute('for','label')

            let input2 = document.createElement("input");
            input2.setAttribute('type','text')
            input2.setAttribute('name','label')
            input2.setAttribute('id','label')

            label2.textContent = "Label : ";
            input2.value = ecriture['label'];

            form.appendChild(label2);
            form.appendChild(input2);

            let label3 = document.createElement("label");
            label3.setAttribute('for','amount')

            let input3 = document.createElement("input");
            input3.setAttribute('type','text')
            input3.setAttribute('name','amount')
            input3.setAttribute('id','amount')

            label3.textContent = "Amount : ";
            input3.value = ecriture['amount'];

            form.appendChild(label3);
            form.appendChild(input3);

            let label4 = document.createElement("label");
            label4.setAttribute('for','type')

            let input4 = document.createElement("input");
            input4.setAttribute('type','text')
            input4.setAttribute('name','type')
            input4.setAttribute('id','type')

            label4.textContent = "Type  : ";
            input4.value = ecriture['type'];

            form.appendChild(label4);
            form.appendChild(input4);

            let label5 = document.createElement("label");
            label5.setAttribute('for','date')

            let input5 = document.createElement("input");
            input5.setAttribute('type','text')
            input5.setAttribute('name','date')
            input5.setAttribute('id','date')

            label5.textContent = "Date : ";
            input5.value = ecriture['date'];

            form.appendChild(label5);
            form.appendChild(input5);

            let label6 = document.createElement("label");
            label6.setAttribute('for','created_at')

            let input6 = document.createElement("input");
            input6.setAttribute('type','text')
            input6.setAttribute('name','created_at')
            input6.setAttribute('id','created_at')
            input6.setAttribute('disabled',"")

            label6.textContent = "Created at : ";
            input6.value = ecriture['created_at'];

            form.appendChild(label6);
            form.appendChild(input6);

            let label7 = document.createElement("label");
            label7.setAttribute('for','uuid')


            let label8 = document.createElement("label");
            label8.setAttribute('for','compte_uuid')

            let input8 = document.createElement("input");
            input8.setAttribute('type','text')
            input8.setAttribute('name','compte_uuid')
            input8.setAttribute('id','compte_uuid')
            input8.setAttribute('disabled',"")

            label8.textContent = "Compte Uuid : ";
            input8.value = ecriture['compte_uuid'];

            form.appendChild(label8);
            form.appendChild(input8);

            let submit = document.createElement("input");
            submit.setAttribute('type','submit')

            submit.innerText = 'Modifier';

            form.appendChild(submit);


        }});

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const payload = new FormData(form);

    const plainFormData = Object.fromEntries(payload.entries());
    const formDataJsonString = JSON.stringify(plainFormData);


    const fetchOptions = {
        method: "PUT",
        headers :{
            'Content-Type' : 'application-json'
        },
        body: formDataJsonString,
    };

    fetch(requestURL,fetchOptions)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    window.location.href ='accueil.html?c_uuid='+c_uuid
    window.alert('Modification éffectuée')
});