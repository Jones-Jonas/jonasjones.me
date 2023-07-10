<div class="navbar">
  <div class="logo">
    <a href="/">
      <img src="/icon_80x80.webp" alt="Logo" class="logo">
    </a>
  </div>
  <div class="nav-links">
    <nav>
      <ul>
        {#each navLinks as link}
          <li><a href={link.url}>{link.name}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="lastfm">
    <a href="https://fm.jonasjones.dev">
      <span class="link"></span>
    </a>
    <div class="lastfmlogoclass" id="lastfm_logo">
      <img src="" alt=" " class="lastfmlogooverlay" id="lastfm_logo_overlay">
    </div>
    
    <div class="lastfm-text">
      <p id="lastfm_title"></p>
      <p id="lastfm_artist"></p>
    </div>
  </div>
</div>


<script>
    let navLinks = [
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects'},
      { name: 'For The Based™', url: '/based'},
      { name: 'Status', url: '/status'},
      { name: 'About', url: '/about' }
    ];

    // @ts-ignore
    let miscLinks = [
        { name: 'For The Based&trade;', url: '/based'}
    ]
  const fetch_url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Jonas_Jones&api_key=57c0ca64285c7ca676bb8c2acf320f41&format=json&limit=1"

  async function fetchLastFmData() {
  let response = await fetch(fetch_url);
  let data = await response.json();
  let album_cover = data.recenttracks.track[0].image[1]['\#text'];
  let song_title = data.recenttracks.track[0].name;
  let artist = data.recenttracks.track[0].artist['\#text'];
   console.log(data);

    try {
      // @ts-ignore
      document.getElementById("lastfm_title").innerHTML = song_title;
      // @ts-ignore
      document.getElementById("lastfm_artist").innerHTML = artist;
      // @ts-ignore
      document.getElementById("lastfm_logo").style.backgroundImage = `url(${album_cover})`;
      
    } catch (error) {
      console.log(error);
    }

    try {
        let is_playing = data.recenttracks.track[0]['\@attr'].nowplaying;
        if (is_playing == "true") {
        // @ts-ignore
        document.getElementById("lastfm_logo_overlay").src="/equalizer.gif";
      } else {
        // @ts-ignore
        document.getElementById("lastfm_logo_overlay").src="/pause-icon-256.png";
      }
      } catch (error) {
        try {
          // @ts-ignore
          document.getElementById("lastfm_logo_overlay").src="/pause-icon-256.png";
        } catch (error) {
          console.log(error);
        }
      }
  }
  fetchLastFmData();
  setInterval(fetchLastFmData, 15000);
  </script>

  
  <style>
    .navbar {
      background-color: #2023247c;
      padding: 10px;
      padding-top: 0;
      padding-bottom: 0;
      text-align: center;
      width: 100%;
      display: flex;
      position: fixed;
      top: 0;
      z-index: 1;
    }

    .logo {
      height: 45px;
      border-radius: 10px;
      margin-top: 2px;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }

    @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
    }

    .nav-links {
      margin-top: 10px;
    }
  }
    nav {
      padding: 10px;
      justify-content: center;
      width: 100%;
      display: table;
    }
    
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      display: inline;
      margin-right: 10px;
    }
    
    a {
      text-decoration: none;
      color: #ffffff;
      padding: 5px;
      font-size: 23px;
    }
    
    a:hover {
      color: #ddd;
    }

    .lastfm {
      padding: 3px;
      padding-right: 10px;
      margin: 0;
      justify-content: right;
      justify-self: right;
      align-items: right;
      float: right;
      display: flex;
      position: relative;
      right: 3px;
      top: 3px;
      border-radius: 5px;
    }
    .lastfm:hover {
      background-color: #202324;
    }
    .lastfm img {
      width: 30px;
      height: 30px;
      border-radius: 10%;
      margin-right: 10px;
    }
    .lastfm #lastfm_logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10%;
      align-items: center;
    }
    .lastfm #lastfm_artist {
      font-size: 13px;
      text-align: left;
      padding: 0;
      margin: 0;
    }
    .lastfm #lastfm_title {
      font-size: 19px;
      text-align: left;
      padding: 0;
      margin: 0;
    }
    .lastfm #lastfm_logo_overlay {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      opacity: 0.5;
      align-self: center;
    }
    .link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
  </style>
  