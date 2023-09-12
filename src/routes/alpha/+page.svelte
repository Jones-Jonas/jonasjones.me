<script>
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ParallaxBg from "../../components/ParallaxBg.svelte";
    import Padding from "../../components/padding.svelte";
</script>

<ParallaxBg>
    <NavBar />
    <title>Alpha</title>
    <div class="container">
        <Padding />
        <h1>There currently is no Alpha.</h1>
        <p>Can't believe I actually managed to release this website in under a year.</p>
        <p>Go to <a href="/">Home</a></p>
    </div>
    <Footer />
</ParallaxBg>
