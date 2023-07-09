<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import ParallaxBg from "../components/ParallaxBg.svelte";
</script>
<ParallaxBg>
    <NavBar />
    <title>404 - Page not found</title>
    <center>
        <h1>ERROR 404</h1>
        <h2>Page not found</h2>
        <div style="height:300px;width:600px">
            <img src="http://cdn.jonasjones.me/uploads/homepage/slime-teal.gif" alt="Teal Slime" class="picture">
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
