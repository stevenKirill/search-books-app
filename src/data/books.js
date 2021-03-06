import {generateId} from '../utils/utilsFunctions';

const booksArray = [
    {
        name: 'Код',
        author: 'Чарльз Петцольд',
        pages: '350',
        publisher: 'Манн, Иванов и Фербер',
        year: '2019',
        issueData: '01.01.2019',
        image: 'code.jpg',
    },
    {
        name: 'Грокаем алгоритмы',
        author: 'Бхаргава Адитья',
        pages: '200',
        publisher: 'Питер',
        year: '2019',
        issueData: '04.03.2019',
        image: 'grokaem.jpg',
    },
    {
        name: 'Самурай без меча',
        author: 'Масао Китами',
        pages: '150',
        publisher: 'Попурри',
        year: '2020',
        issueData: '05.10.2020',
        image: 'samurai.jpeg',
    },
    {
        name: 'Подсознание может все',
        author: 'Джон Кехо',
        pages: '120',
        publisher: 'Попурри',
        year: '2020',
        issueData: '14.10.2020',
        image: 'podsoznanie.jpg',
    },
    {
        name: 'Гении и Аутсайдеры',
        author: 'Гладуэлл Малкольм',
        pages: '265',
        publisher: 'Манн, Иванов и Фербер',
        year: '2017',
        issueData: '19.05.2017',
        image: 'genii.jpg',
    },
    {
        name: 'Магия утра. Как первый час дня определяет ваш успех',
        author: 'Элрод Хэл',
        pages: '177',
        publisher: 'Манн, Иванов и Фербер',
        year: '2015',
        issueData: '11.06.2015',
        image: 'morning.png',
    },
    {
        name: 'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
        author: 'Мэнсон Марк',
        pages: '188',
        publisher: 'Альпина Паблишер',
        year: '2020',
        issueData: '03.02.2020',
        image: 'pofig.jpg',
    },
    {
        name: 'Кармический менеджмент: эффект бумеранга в бизнесе и в жизни',
        author: 'Роуч Майкл',
        pages: '234',
        publisher: 'АСТ',
        year: '2018',
        issueData: '18.09.2018',
        image: 'karma.jpg',
    },
    {
        name: 'Думай как чемпион. Откровения магната о жизни и бизнесе ',
        author: 'Дональд Трамп',
        pages: '199',
        publisher: 'Бомбора',
        year: '2016',
        issueData: '05.11.2016',
        image: 'trump.jpg',
    },
    // {
    //     name: 'Код',
    //     author: 'Чарльз Петцольд',
    //     pages: '350',
    //     publisher: 'Манн, Иванов и Фербер',
    //     year: '2019',
    //     issueData: '01.01.2019',
    //     image: 'code.jpg',
    // },
    // {
    //     name: 'Грокаем алгоритмы',
    //     author: 'Бхаргава Адитья',
    //     pages: '200',
    //     publisher: 'Питер',
    //     year: '2019',
    //     issueData: '04.03.2019',
    //     image: 'grokaem.jpg',
    // },
    // {
    //     name: 'Cамурай без меча',
    //     author: 'Масао Китами',
    //     pages: '150',
    //     publisher: 'Попурри',
    //     year: '2020',
    //     issueData: '05.10.2020',
    //     image: 'samurai.jpeg',
    // },
    // {
    //     name: 'Подсознание может все',
    //     author: 'Джон Кехо',
    //     pages: '120',
    //     publisher: 'Попурри',
    //     year: '2020',
    //     issueData: '14.10.2020',
    //     image: 'podsoznanie.jpg',
    // },
    // {
    //     name: 'Гении и Аутсайдеры',
    //     author: 'Гладуэлл Малкольм',
    //     pages: '265',
    //     publisher: 'Манн, Иванов и Фербер',
    //     year: '2017',
    //     issueData: '19.05.2017',
    //     image: 'genii.jpg',
    // },
    // {
    //     name: 'Магия утра. Как первый час дня определяет ваш успех',
    //     author: 'Элрод Хэл',
    //     pages: '177',
    //     publisher: 'Манн, Иванов и Фербер',
    //     year: '2015',
    //     issueData: '11.06.2015',
    //     image: 'morning.png',
    // },
    // {
    //     name: 'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
    //     author: 'Мэнсон Марк',
    //     pages: '188',
    //     publisher: 'Альпина Паблишер',
    //     year: '2020',
    //     issueData: '03.02.2020',
    //     image: 'pofig.jpg',
    // },
    // {
    //     name: 'Кармический менеджмент: эффект бумеранга в бизнесе и в жизни',
    //     author: 'Роуч Майкл',
    //     pages: '234',
    //     publisher: 'АСТ',
    //     year: '2018',
    //     issueData: '18.09.2018',
    //     image: 'karma.jpg',
    // },
    // {
    //     name: 'Думай как чемпион. Откровения магната о жизни и бизнесе ',
    //     author: 'Дональд Трамп',
    //     pages: '199',
    //     publisher: 'Бомбора',
    //     year: '2016',
    //     issueData: '05.11.2016',
    //     image: 'trump.jpg',
    // },
];

export const booksWithId = booksArray.map(book => {
    const tmp = {
        ...book,
        id : generateId()
    };
    return tmp;
});