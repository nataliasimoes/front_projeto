<script>
import Axios from 'axios'
export default {
  methods: {
    async removerEquipamento(){
        var url = window.location.href;
              url = url.split('removerperiferico/');
              url = url[1];
           var id = parseInt(url)
       await Axios.delete('http://localhost:3000/periferico/'+id);
       this.$router.push('/perifericos');
    }
  },

  async created() {
    this.removerEquipamento();


  }
}
</script>