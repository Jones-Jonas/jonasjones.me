<ParallaxBg>
<Navbar />
<title>Jonas_Jones</title>

  <div class="image-wrapper">
    <div class="card-front">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="/icon_800x800_transparent.webp" alt="My Picture" class="picture">
    </div>
    <div class="card-back">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="/root_logo.webp" alt="My Picture" class="picture">
    </div>
  </div>
  
    <div class="line">
      <hr>
    </div>
    <div class="line-content">
      <p>Idk how this dott got here but im leaving it.</p>
    </div>
    <div class="social-media">
    <div class="row">
        <a href="https://github.com/J-onasJones"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/channel/UCVIxvKBIMSMgurYS8pK7fSg"><i class="fab fa-youtube"></i></a>
        <a href="https://discord.gg/V2EsuUVmWh"><i class="fab fa-discord"></i></a>
    </div>
    <div class="row">
        <a href="https://www.reddit.com/u/Jonas_Jones_"><i class="fab fa-reddit"></i></a>
        <a href="https://twitter.com/Jonas_Jones_"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/_jonas_jones_"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</ParallaxBg>
<Footer />
  
  <script>
    import Navbar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
    import ParallaxBg from '../components/ParallaxBg.svelte';
  </script>
  

  <style>
    @import '+page.css';
  </style>