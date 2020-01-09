var apresentacao = Vue.component('apresentacao',{
    template: '#apresentacao'
});
var skills = Vue.component('skills',{
    template: '#skills'
});
var exp = Vue.component('exp',{
    template: '#exp'
});
var jobs = Vue.component('jobs',{
    template: '#jobs'
});

var router = new VueRouter({
    routes: [
        {path: '/', component: apresentacao},
        {path: '/habilidades', component: skills},
        {path: '/experiencia-profissional', component: exp},
        {path: '/trabalhos-feitos', component: jobs}
    ]
})

var app = new Vue({
    el: '#app',
    router,
    data:{

    },
    mounted: function(){
        
    }
})