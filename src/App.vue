<template>
  <center>
   
    <div class="header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <a id="home" href="/"><img id="logo" src="./assets/logo_vector.svg"></a>
      <span class="card-header">⠀Twitch BR Tracker</span>
    </div>
    
    

    <p id="about">Em tempo real.<br>Todos os canais que utilizam a tag <a id="tag" href="https://www.twitch.tv/directory/all/tags/39ee8140-901a-4762-bfca-8260dea1310f" target="_blank">Português</a> são considerados.</p>

    
    <div class="telegram-card">
      <a href="https://t.me/TwitchBrTrackerBot" target="_blank" id="telegram">
        <h1 id="telegram-icon"><i class="fa-brands fa-telegram"></i></h1>
        <p id="telegram-desc">
          Agora temos um bot no Telegram!<br>
          Clique para experimentar.
        </p>
      </a>
    </div>
   

    <div class="panel">
    <h1>Com mais <span class="detail">espectadores</span></h1>
    <span id="timestamp">{{ time }}</span>
    <a href="/" style="float: right;"><button id="refresh">Atualizar</button></a>
    </div>

    <div class="users">

      <div class="user">
        <a id="userId" v-bind:href="'https://twitch.tv/'+ primeiro.user_login" target="_blank">
        <h1 id="position" style="float:left;">#1</h1>
        
        <img id="creatorLogo" v-bind:src="primeiroFoto">
            <h3 id="username">{{ primeiro.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ primeiro.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(primeiro.viewer_count) }} </span></span></p>
        </a>
      </div>

      


      
      <div class="user">
      <a id="userId" v-bind:href="'https://twitch.tv/'+ segundo.user_login" target="_blank">
        <h1 id="position" style="float:left;">#2</h1>
        
        <img id="creatorLogo" v-bind:src="segundoFoto">
        
            <h3 id="username">{{ segundo.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ segundo.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(segundo.viewer_count) }}</span></span></p>
       </a>  
      </div>
    

    
      <div class="user">
      <a id="userId" v-bind:href="'https://twitch.tv/'+ terceiro.user_login" target="_blank">
      <h1 id="position" style="float:left;">#3</h1>
      
      <img id="creatorLogo" v-bind:src="terceiroFoto">
        
            <h3 id="username">{{ terceiro.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ terceiro.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(terceiro.viewer_count) }}</span></span></p>
         </a>
      </div>
    

    
      <div class="user">
      <a id="userId" v-bind:href="'https://twitch.tv/'+ quarto.user_login" target="_blank">
      <h1 id="position" style="float:left;">#4</h1>
      <img id="creatorLogo" v-bind:src="quartoFoto">
        
            <h3 id="username">{{ quarto.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ quarto.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(quarto.viewer_count) }}</span></span></p>
        </a>      
      </div>
    

    
      <div class="user">
      <a id="userId" v-bind:href="'https://twitch.tv/'+ quinto.user_login" target="_blank">
      <h1 id="position" style="float:left;">#5</h1>
      
      <img id="creatorLogo" v-bind:src="quintoFoto">
        
            <h3 id="username">{{ quinto.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ quinto.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(quinto.viewer_count) }}</span></span></p>
        
        </a>
      </div>
    

    
       <div class="user">
       <a id="userId" v-bind:href="'https://twitch.tv/'+ sexto.user_login" target="_blank">
       <h1 id="position" style="float:left;">#6</h1>
        
       <img id="creatorLogo" v-bind:src="sextoFoto">
       
            <h3 id="username">{{ sexto.user_name }}</h3>
        
       <p id="livestreamInfo">
        <span id="gameName">
          <i class="fas fa-gamepad"></i>⠀{{ sexto.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(sexto.viewer_count) }}</span></span></p>
          </a>
      </div>
    

    
       <div class="user">
       <a id="userId" v-bind:href="'https://twitch.tv/'+ setimo.user_login" target="_blank">
       <h1 id="position" style="float:left;">#7</h1>
       
       <img id="creatorLogo" v-bind:src="setimoFoto">
        
            <h3 id="username">{{ setimo.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ setimo.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(setimo.viewer_count) }}</span></span></p>
        </a>   
      </div>
    


    
       <div class="user">
       <a id="userId" v-bind:href="'https://twitch.tv/'+ oitavo.user_login" target="_blank">
       <h1 id="position" style="float:left;">#8</h1>
        
       <img id="creatorLogo" v-bind:src="oitavoFoto">
       
            <h3 id="username">{{ oitavo.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ oitavo.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(oitavo.viewer_count) }}</span></span></p>
         </a>
      </div>
    


    
       <div class="user">
       <a id="userId" v-bind:href="'https://twitch.tv/'+ nono.user_login" target="_blank">
       <h1 id="position" style="float:left;">#9</h1>
        
       <img id="creatorLogo" v-bind:src="nonoFoto">
       
            <h3 id="username">{{ nono.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ nono.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(nono.viewer_count) }}</span></span></p>
        </a>
      </div>
    


    
       <div class="user">
       <a id="userId" v-bind:href="'https://twitch.tv/'+ decimo.user_login" target="_blank">
       <h1 id="position" style="float:left;">#10</h1>
       
       <img id="creatorLogo" v-bind:src="decimoFoto">
        
            <h3 id="username">{{ decimo.user_name }}</h3>
        
        <p id="livestreamInfo">
          <span id="gameName">
            <i class="fas fa-gamepad"></i>⠀{{ decimo.game_name }}</span><span id="space">⠀</span><span id="breakLine"><br></span><span id="specAll"><span id="spectators"><i class="fas fa-user"></i>⠀{{ new Intl.NumberFormat().format(decimo.viewer_count) }}</span></span></p>
        </a>
      </div>
    

    </div>
    <div class="share">
      Compartilhe nas redes sociais:<br>
      <a v-bind:href="'https://api.whatsapp.com/send?text=*Top 3 streamers da Twitch BR/PT com mais espectadores neste momento (' + minutes + '):*%0A%0A1. '
      + primeiro.user_name
      + ' (' + new Intl.NumberFormat().format(primeiro.viewer_count) + ')%0A2. '
      + segundo.user_name
      + ' (' + new Intl.NumberFormat().format(segundo.viewer_count) + ')%0A3. '
      + terceiro.user_name
      + ' (' + new Intl.NumberFormat().format(terceiro.viewer_count) + ')%0A%0ADados por https://brtwitchtracker.vercel.app.'" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>⠀

      <a v-bind:href="'https://twitter.com/intent/tweet?text=Top 3 streamers da Twitch BR/PT com mais espectadores neste momento (' + minutes + '):%0A%0A1. '
      + primeiro.user_name
      + ' (' + new Intl.NumberFormat().format(primeiro.viewer_count) + ')%0A2. '
      + segundo.user_name
      + ' (' + new Intl.NumberFormat().format(segundo.viewer_count) + ')%0A3. '
      + terceiro.user_name
      + ' (' + new Intl.NumberFormat().format(terceiro.viewer_count) + ')%0A%0ADados por https://brtwitchtracker.vercel.app.'" target="_blank"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <br>
    
    <div class="footer">
    Feito por Luis Gabriel &copy; 2022 <br>
    <a href="https://github.com/luisgbr1el/brtwitchtracker-website" target="_blank"><i class="fa-brands fa-github"></i></a>⠀
    <a href="https://twitter.com/luisgbr1el" target="_blank"><i class="fa-brands fa-twitter"></i></a>⠀<a href="mailto:harrycorpmail@gmail.com" target="_blank"><i class="fa-brands fa-google"></i></a>
    </div>
  </center>
</template>

<script>
import axios from "axios";

export default {
  name: "get-request-set-headers",
  data() {
    return {
      primeiro: null,
      segundo: null,
      terceiro: null,
      quarto: null,
      quinto: null,
      sexto: null,
      setimo: null,
      oitavo: null,
      nono: null,
      decimo: null,
      primeiroFoto: null,
      segundoFoto: null,
      terceiroFoto: null,
      quartoFoto: null,
      quintoFoto: null,
      sextoFoto: null,
      setimoFoto: null,
      oitavoFoto: null,
      nonoFoto: null,
      decimoFoto: null,
      time: null,
      minutes: null
    };
  },
  created() {
    // GET request using axios with set headers
    const headers = {
      "Authorization": "Bearer <Auth-token>",
      "Client-Id": "<Client-Id>",
    };
    axios
      .get("https://api.twitch.tv/helix/streams?first=10&language=pt", {
        headers,
      })
      .then((response) => {
          this.primeiro = response.data['data'][0];
          this.segundo = response.data['data'][1];
          this.terceiro = response.data['data'][2];
          this.quarto = response.data['data'][3];
          this.quinto = response.data['data'][4];
          this.sexto = response.data['data'][5];
          this.setimo = response.data['data'][6];
          this.oitavo = response.data['data'][7];
          this.nono = response.data['data'][8];
          this.decimo = response.data['data'][9];


          
          var d = new Date();
          this.time = "Atualizado às " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
          this.minutes = "às " + ("0" + d.getHours()).slice(-2) + "h" + ("0" + d.getMinutes()).slice(-2) + "m";


          const url = "https://api.twitch.tv/helix/users?login=" + response.data['data'][0]['user_login'];
          axios
           .get(url, {
           headers,
           })
           .then(response => {
           this.primeiroFoto = response.data['data'][0]['profile_image_url'];

           })

          const url2 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][1]['user_login'];
          axios
           .get(url2, {
           headers,
           })
           .then(response => {
           this.segundoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url3 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][2]['user_login'];
          axios
           .get(url3, {
           headers,
           })
           .then(response => {
           this.terceiroFoto = response.data['data'][0]['profile_image_url'];

           })

           const url4 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][3]['user_login'];
          axios
           .get(url4, {
           headers,
           })
           .then(response => {
           this.quartoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url5 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][4]['user_login'];
          axios
           .get(url5, {
           headers,
           })
           .then(response => {
           this.quintoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url6 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][5]['user_login'];
          axios
           .get(url6, {
           headers,
           })
           .then(response => {
           this.sextoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url7 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][6]['user_login'];
          axios
           .get(url7, {
           headers,
           })
           .then(response => {
           this.setimoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url8 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][7]['user_login'];
          axios
           .get(url8, {
           headers,
           })
           .then(response => {
           this.oitavoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url9 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][8]['user_login'];
          axios
           .get(url9, {
           headers,
           })
           .then(response => {
           this.nonoFoto = response.data['data'][0]['profile_image_url'];

           })

           const url10 = "https://api.twitch.tv/helix/users?login=" + response.data['data'][9]['user_login'];
          axios
           .get(url10, {
           headers,
           })
           .then(response => {
           this.decimoFoto = response.data['data'][0]['profile_image_url'];

           })


      })
  },
};

</script>
