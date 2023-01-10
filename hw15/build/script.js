window.onload = () => {
    async function getData() {
        let responce = await fetch('https://jsonplaceholder.typicode.com/users');
        if (responce.status == 200) {
            return await responce.json();
        }
        else {
            //console.log('Error Connection');
            throw 'Error Connection';
        }
    }

    getData().then(function(data){
        let cards = document.querySelector('.cards');
        console.log(data);
        data.forEach(element => {
            //console.log(element.address.city);
            const card = document.createElement('div');
            card.classList.add('card');
            const h2 = document.createElement('h2');
            h2.classList.add('company');
            h2.innerText = element.company.name;
            card.appendChild(h2);
            const divCatch = document.createElement('div');
            divCatch.innerHTML = `<span>CatchPhrase</span>: ${element.company.catchPhrase}`;
            card.appendChild(divCatch);
            const divBs = document.createElement('div');
            divBs.innerHTML = `<span>bs</span>: ${element.company.bs}`;
            card.appendChild(divBs);
            const h1 = document.createElement('h1');
            h1.classList.add('name');
            h1.innerText = element.name;
            card.appendChild(h1);

            const bottom = document.createElement('div');
            bottom.classList.add('bottom');

            const contacts = document.createElement('div');
            contacts.classList.add('contacts');
            let pPhone = document.createElement('p');
            pPhone.innerHTML = `<span>phone</span>: ${element.phone}`;
            contacts.appendChild(pPhone);
            let pUsername = document.createElement('p');
            pUsername.innerHTML = `<span>username</span>: ${element.username}`;
            contacts.appendChild(pUsername);
            let pEmail = document.createElement('p');
            pEmail.innerHTML = `<span>email</span>: ${element.email}`;
            contacts.appendChild(pEmail);
            let pWebsite = document.createElement('p');
            pWebsite.innerHTML = `<span>website</span>: ${element.website}`;
            contacts.appendChild(pWebsite);

            const address = document.createElement('div');
            address.classList.add('address');
            let pStreet = document.createElement('p');
            pStreet.innerHTML = `<span>street</span>: ${element.address.street}`;
            address.appendChild(pStreet);
            let pSuite = document.createElement('p');
            pSuite.innerHTML = `<span>suite</span>: ${element.address.suite}`;
            address.appendChild(pSuite);
            let pCity = document.createElement('p');
            pCity.innerHTML = `<span>city</span>: ${element.address.city}`;
            address.appendChild(pCity);
            let pZipcode = document.createElement('p');
            pZipcode.innerHTML = `<span>zipcode</span>: ${element.address.zipcode}`;
            address.appendChild(pZipcode);

            bottom.appendChild(contacts);
            bottom.appendChild(address);
            
            card.appendChild(bottom);

            const divGeo = document.createElement('div');
            divGeo.innerHTML = `<span>geo</span>: (<span>lat</span>: ${element.address.geo.lat}, <span>lng</span>: ${element.address.geo.lng})`;
            card.appendChild(divGeo);

            cards.appendChild(card);
        });
    }).catch(function(err){
        console.log(`Error: ${err}`);
    });

}