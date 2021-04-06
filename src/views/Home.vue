<template>
  <div class="home text-center mb-5">
    <img alt="Vue logo" class="mt-5 mb-5" src="../assets/logoLagoaNova.png">
    <div><h1 id="data"></h1></div>
    <div><h1 id="hora"></h1></div>
  </div>
</template>

<style scoped>
h1{
  font-size: 80px;
  color: #111f5e;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

<script>
setInterval(function(){
    
    let novaHora = new Date();
    let dia = novaHora.getDate();
    let mes = novaHora.getMonth();
    let ano = novaHora.getFullYear();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    if(minuto<10){
      minuto = "0"+minuto
    }
    if(dia < 10){
       dia = "0"+dia
    }
    if(mes<10){
      mes = "0"+mes
    }
    document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
    document.getElementById('data').textContent = dia+'/'+mes+'/'+ano;
},1000)

</script>

