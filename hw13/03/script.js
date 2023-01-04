window.onload = () => {
    async function getData() {
        let responce = await fetch('https://swapi.dev/api/planets');
        if (responce.status == 200) {
            return await responce.json();
        }
        else {
            //console.log('Error Connection');
            throw 'Error Connection';
        }
    }

    getData().then(function(data){
        const planets = document.querySelector('.planets');
        const btnSize = document.querySelector('.size');
        const btnPop = document.querySelector('.population');
        const colors = ['#964B00', '#79553D', '#755C48', '#BC987E', '#4D220E', '#A25F2A', '#B15124', '#C19A6B', '#4C2F27', ' #95500C'];
        const loading = document.querySelector('.loading');
        
        let isSizeSort = true;
        let isPopSort = true;
        
        function showPlanets(result) {
            let count = 0;
            result.forEach(element => {
                //console.log(element.diameter);
                let divPL = document.createElement('div');
                let textPL = document.createElement('div');
                divPL.classList.add('planet');
                divPL.setAttribute('id', count);
                const coef = 0.01;
                const width = element.diameter / 2 * coef;
                divPL.style.width = width+'px';
                divPL.style.height = width+'px';
                divPL.style.borderRadius = '50%';
                divPL.style.border = '1px solid black'; 
                divPL.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
                textPL.innerText = element.name;
                textPL.setAttribute('pl-id', count);
                let fontsize = Math.ceil(width / element.name.length);
                textPL.style.fontSize = fontsize+'px';
                textPL.style.marginTop = width/2-fontsize/2 + 'px';
                divPL.appendChild(textPL);
                                
                planets.appendChild(divPL);
                count++;
            })
        }
        showPlanets(data.results);
        loading.remove();
        btnSize.onclick = function(e) {
            e.preventDefault();
            if(isSizeSort) {
                data.results.sort((x, y) => y.diameter - x.diameter);
                planets.replaceChildren();
                showPlanets(data.results);
                isSizeSort = false;
            }
            else {
                data.results.sort((x, y) => x.diameter - y.diameter);
                planets.replaceChildren();
                showPlanets(data.results);
                isSizeSort = true;
            }
        }
        btnPop.onclick = function(e) {
            e.preventDefault();
            if(isPopSort) {
                data.results.sort((x, y) => y.population - x.population);
                planets.replaceChildren();
                showPlanets(data.results);
                isPopSort = false;
            }
            else {
                data.results.sort((x, y) => x.population - y.population);
                planets.replaceChildren();
                showPlanets(data.results);
                isPopSort = true;
            }
        }
        document.addEventListener('mouseover', function(e){
            let id = null;
            if (e.target.getAttribute('pl-id')) {
                id = e.target.getAttribute('pl-id');
            }
            if (e.target.id) id = e.target.id;
            if(id) {
                let planet = data.results[id];
                let information = '<table>';
                information += `<tr><td class="left"><b>Name</b></td><td class="right">${planet.name}</td></tr>`;
                information += `<tr><td class="left"><b>Population</b></td><td class="right">${planet.population}</td></tr>`;
                information += `<tr><td class="left"><b>Diameter</b></td><td class="right">${planet.diameter}</td></tr>`;
                information += `<tr><td class="left"><b>Climate</b></td><td class="right">${planet.climate}</td></tr>`;
                information += `<tr><td class="left"><b>Gravity</b></td><td class="right">${planet.gravity}</td></tr>`;
                information += `<tr><td class="left"><b>Orbital_period</b></td><td class="right">${planet.orbital_period}</td></tr>`;
                information += `<tr><td class="left"><b>Rotation_period</b></td><td class="right">${planet.rotation_period}</td></tr>`;
                information += `<tr><td class="left"><b>Surface_water</b></td><td class="right">${planet.surface_water}</td></tr>`;
                information += `<tr><td class="left"><b>Terrain</b></td><td class="right">${planet.terrain}</td></tr>`;
                information += '</table>';
                info = document.createElement('div');
                info.classList.add('info');
                info.innerHTML = information;
                let width = 250;
                let left = e.clientX + 20;
                if (e.clientX + width > planets.offsetWidth) left = e.clientX - width - 20;
                info.style.left = left +'px';
                info.style.top = e.clientY + 20 + 'px';
                planets.appendChild(info);
            }
            
        })
        document.addEventListener('mouseout', function(e){
            if (e.target.id || e.target.getAttribute('pl-id')) {
                info.remove();
            }
        })

    }).catch(function(err){
        console.log('Error: ' + err);
    })
}