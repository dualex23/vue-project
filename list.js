
var users = [
    {
        id: 0,
        firstName: "Александр",
        secondName: "Македонский",
        middleName: "Цезаревич",
        avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png"
    },
    {
        id: 1,
        firstName: "Максим",
        secondName: "Авросский",
        middleName: "Наимович",
        avatar: ""
    },
    {
        id: 2,
        firstName: "Платон",
        secondName: "Планетный",
        middleName: "Меркурович",
        avatar: "https://s017.radikal.ru/i427/1303/35/85bea17b0018.gif"
    },
    {
        id: 3,
        firstName: "Карл",
        secondName: "Фиджеральд",
        middleName: "Карлович",
        avatar: ""
    },
    {
        id: 4,
        firstName: "Морис",
        secondName: "Бирюза",
        middleName: "Агапович",
        avatar: ""
    }
];

// ============== Components =================

var UserList = {
    template: '#userlist',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    computed: {
        showTitle: function(){
            return 'Всего человек: ' + ' ' + this.list.length;
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        fullName: function(user) {
            return user.firstName + ' ' + user.secondName;
        }
    }
};

// ================

var app = new Vue({
    el: '#app',
    components: {
        'user-list': UserList
    },
    data: function(){
        return {
            users: []
        }
    },
    mounted: function() {
        console.log('Данные подгружены');
        return this.users = users;
    }
});