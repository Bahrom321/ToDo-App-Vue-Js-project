const app = Vue.createApp({

    data(){
        return{
            name:'',
            email:'',
            job:'',
            users:[
                {id:1, name:"Bahrom", email:"bahromkarimov321@gmail.com", job:"frontend devoloper"}
            ],
            errorHandler:'',
            error:false
        }
    },


    methods:{
        addUser(){
            if(this.name && this.email && this.job){
                console.log(this.name, this.email, this.job);
                let newUser={
                    id:this.users.length+1,
                    name:this.name,
                    email:this.email,
                    job:this.job
                }
                this.users.push(newUser)
                this.name=''
                this.email=""
                this.job=''
            }
            else{
                // alert('Input is empty')
                this.error=true
                this.errorHandler='Input is empty'
            }
        },
        deleteUser(id) {
            console.log(id);
            this.users=this.users.filter((user)=>user.id!=id)
        },
        updateUser(id){
            let findUserId = this.users.find((user)=>user.id==id)
            this.name=findUserId.name,
            this.email=findUserId.email,
            this.job=findUserId.job
        }
    }

}).mount('#main')