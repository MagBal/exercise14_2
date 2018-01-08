var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://i.imgur.com/0JuDj1k.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://i.imgur.com/CgApJfh.jpg'
    },
    {
        id: 3,
        title: 'The Lord of the ring',
        desc: 'Film drogi o wycieczce pierścienia',
        image: 'https://i.imgur.com/t686ZZJ.jpg'
    },
    {
        id: 4,
        title: 'Złoty kompas',
        desc: 'Film o dajmonach i ich panach',
        image: 'https://i.imgur.com/vpvYf1o.jpg'
    },
    {
        id: 5,
        title: 'Eternal Sunshine of the Spotless Mind',
        desc: 'Film o wymazywaniu pamięci',
        image: 'https://i.imgur.com/3Qaz1qv.jpg'
    },
    {
        id: 6,
        title: 'Inglourious Basterds',
        desc: 'Film o wojnie według Tarantino',
        image: 'https://i.imgur.com/VbfjkWO.jpg'
    }

];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.image
        }, )
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));