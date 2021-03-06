const url = "https://daleka.herokuapp.com/users";
const vn = new Vue({
    el:"#app",
    data:{
        results:[],
        obj: {
            first_name: null,
            last_name: null,
            avatar: null,
            email:null,
            password:null
        },
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
            await axios.delete("https://daleka.herokuapp.com/users/" + id)}
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
            await axios.post("https://daleka.herokuapp.com/users",{"first_name":`${first_n.value}`,"last_name":`${last_n.value}`,"avatar":`${avatarka.value}`,"email":`${email.value}`,"password":`${password.value}`})
            alert("пользователь создан")
            first_n.value=null;
            last_n.value=null;
            avatarka.value=null;
            email.value=null;
            password.value=null;
            check.checked=false;
            }
        },
        async edit(index){
            let id = this.results[index].id
            let newObj = this.results[index]
            if(editName.value === "" || editSurname.value === "" || editAvatar.value === "" || editEmail.value === "" || editPassword.value === "") alert("Заполните все данные")

            newUser = {
                first_name: newObj.first_name,
                last_name: newObj.last_name,
                password: newObj.password,
                email:  newObj.email,
                avatar: newObj.avatar
            };
            await axios.put(url + "/" + id, newUser)
            alert("User edited id:" + id);
        }
    }
});
