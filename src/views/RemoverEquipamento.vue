<script>
import Axios from "axios";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["removerEquipamento"]),
    async removerEquipamento() {
      var url = window.location.href;
      url = url.split("removerequipamento/");
      url = url[1];
      var tombo = parseInt(url);

      var r = confirm("Deseja remover este equipamento?");
      if (r == true) {
        await Axios.delete("http://localhost:3000/equipamento/" + tombo);
        this.$router.push("/equipamentos");
      } else {
        this.$router.push("/equipamentos");
      }
    },
  },

  async created() {
    this.removerEquipamento();
  },
};
</script>
