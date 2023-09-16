<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import ParallaxBg from "../components/ParallaxBg.svelte";
    import Padding from "../components/padding.svelte";

    let isGif1 = true;

    function toggleGif() {
        isGif1 = !isGif1;
    }

    function toggleTaeyong() {
        const taeyong = document.querySelector(".taeyong");
        taeyong.style.display = "block";
    }

    function toggleTaeyongoff() {
        const taeyong = document.querySelector(".taeyong");
        taeyong.style.display = "none";
    }
</script>

<ParallaxBg>
    <NavBar />
    <Padding />
    <title>404 - Page not found</title>
    <center>
        <h1>ERROR 404</h1>
        <h2>Page not found</h2>
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a on:click={toggleTaeyong}>오류다</a>
        <div style="height:300px;width:600px">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
                src={isGif1 ? "/johnrefs1.gif" : "/johnrefs2.gif"}
                alt="Toggle GIF"
                on:click={toggleGif}
            />
        </div>
    </center>
    <Footer />
</ParallaxBg>
<div class="taeyong">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
        src="/taeyong.gif"
        alt="taeyong"
        on:click={toggleTaeyongoff}
        height="100%"
        width="100%"
    />
</div>

<style>
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

    .taeyong {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: none;
    }
</style>
