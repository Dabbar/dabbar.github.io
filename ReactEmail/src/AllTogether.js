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


var MailApp = React.createClass({

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


                    <div>
                        <div onClick={self.toggleClicked.bind(self, i)} className={style + ' mailNavigation'}>
                            <ul className="mailListItem">
                                <li><strong>Date:</strong> {date}</li>
                                <li><strong>From:</strong> {mail.from}</li>
                            </ul>

                        </div>

                        <div className={'mailContainer ' + style }>
                            <table className="mailHeader ">
                                <tr>
                                    <td><strong>From:</strong> {mail.from}</td>
                                </tr>
                                <tr>
                                    <td><strong>To:</strong> {mail.to}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date:</strong> {date}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tags:</strong> {mail.tags.join(', ')}</td>
                                </tr>
                            </table>
                            <p dangerouslySetInnerHTML={{__html: text}} className="mailBody"></p>
                        </div>

                    </div>



                )

            }.bind(this)
        );

        return <div className="navigationContainer ">{mailData}</div>

    }
});


ReactDOM.render(<div className="wrapper">
         <h1>Your Mail</h1>

         <main className="reactContainer">

        <MailApp mails={emailsObj}/>
             </main>
</div>,

document.body);


