var emailsObj = [
    {
        "from": "petr.osipov@yandex.ru",
        "to": "uolegovich@yandex.ru",
        "time": "2016-06-20T13:52:10.966Z",
        "text": "Добрый день, <entity type=\"person\">Юрий Олегович</entity>!\nДва студента с курса по МО <entity type=\"time\">2014 г.</entity> поинтересовались вопросом о том, можно ли писать у <entity type=\"person\">Виктора</entity> диплом в <entity type=\"organisation\">МГИМО</entity>. Просто ради интереса -- а можно?\n\nС уважением, <entity type=\"person\">Осипов Пётр</entity>\nглавный прокрастинатор <entity type=\"organisation\">ООО \"Госконтора\"</entity>\n+7-915-323-54-56",
        "tags": ["дипломное проектирование", "внутренняя переписка"]
    },
    {
        "from": "uolegovich@yandex.ru",
        "to": "petr.osipov@yandex.ru",
        "time": "2016-08-20T14:13:12.137Z",
        "text": "<entity type=\"person\">Петя</entity>, было можно, но <entity type=\"person\">Авойкина</entity> издала какой-то документ, что только штатные преподаватели кафедры №405 <entity type=\"organisation\">МГИМО</entity>, рангом не ниже старшего преподавателя, смогут преподавать.\nЯ так и не разобрался, ввёдён ли этот документ в действие. Пишите дипломника на <entity type=\"person\">Дмитрия Валентинова</entity>, будете консультантом.\n\nС уважением, <entity type=\"person\">Юрий Олегович Сотейников</entity>\nведущий инженер-программист кафедры №505, ТИУ, <entity type=\"place\">ул. Зорка, д. 76</entity>",
        "tags": ["внутренняя переписка", "гуманитарные ВУЗы", "деловая переписка"]
    },
    {
        "from": "yarka@yandex.ru",
        "to": "kipesh@yandex.ru",
        "time": "2016-09-20T10:56:38.234Z",
        "text": "Ребят, предлагаю встретиться <entity type=\"time\">завтра</entity> в <entity type=\"time\">12:00</entity> в <entity type=\"place\">кафе Грог</entity>",
        "tags": ["внутренняя переписка", "корпоративы"]
    },
    {
        "from": "kipesh@yandex.ru",
        "to": "petr.osipov@yandex.ru",
        "time": "2016-10-20T10:56:38.234Z",
        "text": "Добрый день! Можете мне диплом написать по римскому праву? Тему предлагаю по телефону обсудить. Звать <entity type=\"person\">Коля</entity>, <entity type=\"phone\">+7-925-246-23-13</entity>",
        "tags": ["переписка с клиентами", "дипломное проектирование"]
    },
    {
        "from": "trasnscend@yandex.ru",
        "to": "petr.osipov@yandex.ru",
        "time": "2016-09-20T12:43:02.341Z",
        "text": "Уважаемые! Мне нужна курсовая по сопромату. Предлагаю <entity type=\"money\">2000 руб</entity>. А вы сколько хотите?",
        "tags": ["переписка с клиентами", "заказ курсовых"]
    },
    {
        "from": "trasnscend@yandex.ru",
        "to": "devka18_1998@bk.ru",
        "time": "2016-10-14T09:56:15.126Z",
        "text": "Приветик! Ну как, пойдём завтра гулять? Я тебе курсовую сделаю, идеальная будет, на пятерочку ;)",
        "tags": ["личная переписка"]
    }
];


var MailApp = React.createClass({displayName: "MailApp",

    getInitialState: function () {
        return {clicked: -1}
    },


    toggleClicked: function (i) {
        this.setState({
            clicked: i
        });
    },


    render: function () {

        var self = this;


        var mailData = this.props.mails.map(function (mail, i) {

                var date = (new Date(mail.time)).toLocaleString();

                var re = /\n/g;

                var text = mail.text.replace(re, '<br/>');

                var style = '';

                if (self.state.clicked == i) {
                    style = 'active';

                }


                return (


                    React.createElement("div", null, 
                        React.createElement("div", {onClick: self.toggleClicked.bind(self, i), className: style + ' mailNavigation'}, 
                            React.createElement("ul", {className: "mailListItem"}, 
                                React.createElement("li", null, React.createElement("strong", null, "Date:"), " ", date), 
                                React.createElement("li", null, React.createElement("strong", null, "From:"), " ", mail.from)
                            )

                        ), 

                        React.createElement("div", {className: 'mailContainer ' + style}, 
                            React.createElement("table", {className: "mailHeader "}, 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, React.createElement("strong", null, "From:"), " ", mail.from)
                                ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, React.createElement("strong", null, "To:"), " ", mail.to)
                                ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, React.createElement("strong", null, "Date:"), " ", date)
                                ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, React.createElement("strong", null, "Tags:"), " ", mail.tags.join(', '))
                                )
                            ), 
                            React.createElement("p", {dangerouslySetInnerHTML: {__html: text}, className: "mailBody"})
                        )

                    )



                )

            }.bind(this)
        );

        return React.createElement("div", {className: "navigationContainer "}, mailData)

    }
});


ReactDOM.render(React.createElement("div", {className: "wrapper"}, 
         React.createElement("h1", null, "Your Mail"), 

         React.createElement("main", {className: "reactContainer"}, 

        React.createElement(MailApp, {mails: emailsObj})
             )
),

document.body);


