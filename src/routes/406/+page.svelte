<script>
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ParallaxBg from "../../components/ParallaxBg.svelte";
    import Padding from "../../components/padding.svelte";
</script>

<ParallaxBg>
    <NavBar />
    <title>406</title>
    <div class="container">
        <Padding />
        <h1>This is not acceptable. You must be a robot</h1>
        <h1>
            Please visit <a href="https://jonasjones.dev/I-am-a-robot"
                >https://jonasjones.dev/I-am-a-robot</a
            >
        </h1>
    </div>
    <Footer />
</ParallaxBg>
