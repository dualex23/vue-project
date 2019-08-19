
var UserForm = {
    template: '#userform',
    props: {
        person: {
            type: Object,
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
            users: []
        }
    },
    mounted: function() {
        console.log('Данные подгружены');
        return this.users = users;
    }
    
});