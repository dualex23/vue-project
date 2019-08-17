
var users = [
    {
        id: 0,
        firstName: "Александр",
        secondName: "Македонский",
        thirdName: "Цезаревич",
        avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png"
    },
    {
        id: 1,
        firstName: "Максим",
        secondName: "Авросский",
        thirdName: "Наимович",
        avatar: ""
    },
    {
        id: 2,
        firstName: "Платон",
        secondName: "Планетный",
        thirdName: "Меркурович",
        avatar: "https://s017.radikal.ru/i427/1303/35/85bea17b0018.gif"
    },
    {
        id: 3,
        firstName: "Карл",
        secondName: "Фиджеральд",
        thirdName: "Карлович",
        avatar: ""
    },
    {
        id: 4,
        firstName: "Морис",
        secondName: "Бирюза",
        thirdName: "Агапович",
        avatar: ""
    }
];

var app = new Vue({
    el: '#app',
    data: function(){
        return {
            tableIsShown: false,
            invisText: '',
            tooltipHide: 'Скрыть список',
            tooltipShow: 'Показать список',
            users: [],
            defaultAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    computed: {
        showText: function() {
            return this.tableIsShown ? 'Скрыть' : 'Показать';
        },
        title: function(){
            return 'Всего человек: ' + this.users.length;
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    mounted: function() {
        return this.users = users;
    },
    methods: {
        tableVisibility: function() {
            return this.tableIsShown = !this.tableIsShown;
        },
        fullName: function(user) {
            return user.firstName + ' ' + user.secondName;
        }
    }
    
});