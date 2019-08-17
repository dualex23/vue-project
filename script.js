
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

var UserList = {
    template: '#userlist',
    props: {
        list: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        capitalized: {
            type: Function,
            required: true
        }
    }
}

// ================


var app = new Vue({
    el: '#app',
    components: {
        'user-list': UserList
    },
    data: function(){
        return {
            tableIsShown: true,
            invisText: '',
            tooltipHide: 'Скрыть список',
            tooltipShow: 'Показать список',
            users: [],
            defaultAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    computed: {
        showTitle: function(){
            return 'Всего человек: ' + ' ' + this.users.length;
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
        fullName: function(user) {
            return user.firstName + ' ' + user.secondName;
        }
    }
    
});