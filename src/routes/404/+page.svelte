<script>
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ParallaxBg from "../../components/ParallaxBg.svelte";
    import Padding from "../../components/padding.svelte";
</script>

<ParallaxBg>
    <NavBar />
    <title>404</title>
    <div class="container">
        <Padding />
        <h1>405</h1>
        <p>This is not the 404 page.</p>
        <p>This is the 405 page.</p>
        <p>how dare you visit this page -_-</p>
    </div>
    <Footer />
</ParallaxBg>
