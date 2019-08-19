
var UserForm = {
    template: '#userform',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            user: {
                id: 1,
                firstName: "Александр",
                secondName: "Дудинский",
                middleName: "Александрович",
                avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png" 
            }
        }
    }
};

var app = new Vue({
    el: '#app',
    components: {
        'user-form': UserForm
    },
    data: function(){
        return {
            users: [],
            defaultAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    mounted: function() {
        console.log('Данные подгружены');
        return this.users = users;
    }
    
});