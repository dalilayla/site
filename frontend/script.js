const url = "http://localhost:3000/users";
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
            this.results.splice(index,1)
            alert('deleted ' + id)
            await axios.delete("http://localhost:3000/users/" + id)
        },
        async register(){
            
        }
    }
});
