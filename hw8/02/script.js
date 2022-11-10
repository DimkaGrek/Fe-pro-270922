window.onload = () => {
    let images = [
        {
            imgPath:'img/coffee-7567749__340.webp',
            alt:'Кофе Чашка Компьютер Дом Ноутбук Macbook',
            href:'https://pixabay.com/ru/photos/%d0%ba%d0%be%d1%84%d0%b5-%d1%87%d0%b0%d1%88%d0%ba%d0%b0-%d0%ba%d0%be%d0%bc%d0%bf%d1%8c%d1%8e%d1%82%d0%b5%d1%80-%d0%b4%d0%be%d0%bc-%d0%bd%d0%be%d1%83%d1%82%d0%b1%d1%83%d0%ba-7567749/'
        },
        {
            imgPath:'img/venice-7572877__340.jpg',
            alt:'венеция италия остров',
            href:'https://pixabay.com/ru/photos/%d0%b2%d0%b5%d0%bd%d0%b5%d1%86%d0%b8%d1%8f-%d0%b8%d1%82%d0%b0%d0%bb%d0%b8%d1%8f-%d0%be%d1%81%d1%82%d1%80%d0%be%d0%b2-7572877/'
        },
        {
            imgPath:'img/trees-7541217__340.jpg',
            alt:'Деревья Лес Осень Природа Пейзаж',
            href:'https://pixabay.com/ru/photos/%d0%b4%d0%b5%d1%80%d0%b5%d0%b2%d1%8c%d1%8f-%d0%bb%d0%b5%d1%81-%d0%be%d1%81%d0%b5%d0%bd%d1%8c-%d0%bf%d1%80%d0%b8%d1%80%d0%be%d0%b4%d0%b0-%d0%bf%d0%b5%d0%b9%d0%b7%d0%b0%d0%b6-7541217/'
        },
        {
            imgPath:'img/storm-clouds-7526102__340.jpg',
            alt:'Грозовые Тучи Парусное Судно Марина Яхты',
            href:'https://pixabay.com/ru/photos/%d0%b3%d1%80%d0%be%d0%b7%d0%be%d0%b2%d1%8b%d0%b5-%d1%82%d1%83%d1%87%d0%b8-%d0%bf%d0%b0%d1%80%d1%83%d1%81%d0%bd%d0%be%d0%b5-%d1%81%d1%83%d0%b4%d0%bd%d0%be-%d0%bc%d0%b0%d1%80%d0%b8%d0%bd%d0%b0-7526102/'
        },
        {
            imgPath:'img/italy-7290977__340.jpg',
            alt:'Италия Доломит Лошадь Лес Природа Животное Осень',
            href:'https://pixabay.com/ru/photos/%d0%b8%d1%82%d0%b0%d0%bb%d0%b8%d1%8f-%d0%b4%d0%be%d0%bb%d0%be%d0%bc%d0%b8%d1%82-%d0%bb%d0%be%d1%88%d0%b0%d0%b4%d1%8c-%d0%bb%d0%b5%d1%81-%d0%bf%d1%80%d0%b8%d1%80%d0%be%d0%b4%d0%b0-7290977/'
        },
        {
            imgPath:'img/baby-7540912__340.jpg',
            alt:'Детка Спать Новорожденный Вьетнам Люди',
            href:'https://pixabay.com/ru/photos/%d0%b4%d0%b5%d1%82%d0%ba%d0%b0-%d1%81%d0%bf%d0%b0%d1%82%d1%8c-%d0%bd%d0%be%d0%b2%d0%be%d1%80%d0%be%d0%b6%d0%b4%d0%b5%d0%bd%d0%bd%d1%8b%d0%b9-%d0%b2%d1%8c%d0%b5%d1%82%d0%bd%d0%b0%d0%bc-7540912/'
        }
    ];
    console.log(images[0].href);
    //let galary = document.querySelector('.galary');
    for (let i=0; i < images.length; i+=3) {
        let body = document.querySelector('body');
        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row p-3 text-center');
        body.appendChild(divRow);
        for (let j=i; j < i+3; j++) {
            let divColmd = document.createElement('div');
            divColmd.setAttribute('class', 'col-md-4');
            divRow.appendChild(divColmd);
            let divThumbnail = document.createElement('div');
            divThumbnail.setAttribute('class', 'thumbnail');
            divColmd.appendChild(divThumbnail);
            let a = document.createElement('a');
            a.setAttribute('href', images[j].href);
            a.setAttribute('target', '_blank');
            let img = document.createElement('img');
            img.setAttribute('src', images[j].imgPath);
            img.setAttribute('alt', images[j].alt);
            img.setAttribute('class', 'img-thumbnail');
            divThumbnail.appendChild(a);
            a.appendChild(img);
        }
        
    }
}