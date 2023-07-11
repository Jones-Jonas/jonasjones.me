<script>
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ParallaxBg from "../../components/ParallaxBg.svelte";
    import Padding from "../../components/padding.svelte";
</script>
<ParallaxBg>
    <NavBar />
    <title>For the Based</title>
    <div class="container">
        <Padding />
        <h1>Coming Soonish</h1>
        <div class="terminal_user">
                <span class="terminal_user__name__text">based</span>
                <span class="terminal_user__at__text">@</span>
                <span class="terminal_user__host__text">jonasjones.dev</span>
                <span class="terminal_user__colon__text">:</span>
                <span class="terminal_user__path__text">/home/jonasjones</span>
                <span class="terminal_user__dollar__text">$</span>
            <input title="terminal-input" type="text" id="terminal-input" autocomplete="off" spellcheck="false" autocapitalize="none" class="sc-ilhmMj iNZnsg" value="">
        </div>
        
    </div>
    <Footer />
</ParallaxBg>



<style>
    @import '+page.css';
    .terminal_user {
        display: none;
    }
</style>