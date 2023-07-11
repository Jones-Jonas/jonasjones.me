<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import ParallaxBg from "../components/ParallaxBg.svelte";
    import Padding from "../components/padding.svelte";

    let isGif1 = true;

    function toggleGif() {
        isGif1 = !isGif1;
    }

</script>
<ParallaxBg>
    <NavBar />
    <Padding />
    <title>404 - Page not found</title>
    <center>
        <h1>ERROR 404</h1>
        <h2>Page not found</h2>
        <div style="height:300px;width:600px">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
                src={isGif1 ? '/johnrefs1.gif' : '/johnrefs2.gif'}
                alt="Toggle GIF"
                on:click={toggleGif}
            />
        </div>
    </center>
    <style>
        @import '+page.css';
    </style>
    <Footer />
</ParallaxBg>

<style>
    @import '+page.css';
    h1 {
        font-size: 50px;
        color: rgb(0, 255, 0);
        margin: 0;
        margin-top: 20px;
    }
    h2 {
        font-size: 35px;
        color: rgb(0, 255, 0);
    }
</style>
