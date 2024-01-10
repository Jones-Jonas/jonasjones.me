<script>
  import Navbar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
  import ParallaxBg from "../components/ParallaxBg.svelte";
  import Padding from "../components/padding.svelte";
</script>

<ParallaxBg>
  <Navbar />
  <title>Jonas_Jones</title>
  <Padding />
  <div class="image-wrapper">
      <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src="/icon_800x800_transparent.webp"
      alt="My Picture"
      class="picture"
    />
  </div>
  <div class="line">
    <hr />
  </div>
  <div class="line-content">
    <p>Idk how this dot got here but im leaving it.</p>
  </div>
  <div class="social-media">
    <div class="row">
      <a href="https://github.com/JonasunderscoreJones"><i class="fab fa-github" /></a>
      <a href="https://www.youtube.com/channel/UCVIxvKBIMSMgurYS8pK7fSg"
        ><i class="fab fa-youtube" /></a
      >
      <a href="https://discord.gg/V2EsuUVmWh"><i class="fab fa-discord" /></a>
      <a href="mailto:me@jonasjones.dev"><i class="fas fa-envelope" /></a>
    </div>
  </div>
</ParallaxBg>
<Footer />
