const url = "https://daleka.herokuapp.com/users";
const vn = new Vue({
    el:"#app",
    data:{
        results:[]
    },
    mounted(){
        axios.get(url).then(res=>{
            this.results=res.data
        })
    },
    methods:{
        async deleteById(index) {
            let id = this.results[index].id
            if(confirm('delete '+id+'?')){
            this.results.splice(index,1)
            await axios.delete("http://localhost:3000/users/" + id)}
        },
        async register(){
            if(first_n.value === "" || last_n.value === "" || avatarka.value === "" || email.value === "" || password.value === ""){
                alert("Заполните все данные")
                return
            }
            if(check.checked===false){
                alert("Согласитесь с нашими условиями!")
                return
            }
            else{
            await axios.post("http://localhost:3000/users",{"first_name":`${first_n.value}`,"last_name":`${last_n.value}`,"avatar":`${avatarka.value}`,"email":`${email.value}`,"password":`${password.value}`})
            alert("пользователь создан")
            first_n.value=null;
            last_n.value=null;
            avatarka.value=null;
            email.value=null;
            password.value=null;
            check.checked=false;
            }
        }
        
    }
});
