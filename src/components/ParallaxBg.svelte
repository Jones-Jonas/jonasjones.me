<script>
  let mouseX = 0;
  let mouseY = 0;

  /**
   * @param {{ clientX: number; clientY: number; }} event
   */
  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
</script>

<main class="container" on:mousemove={handleMouseMove}>
  <div
    class="parallax-background"
    style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
  >
    <img
      src="/ricky.webp"
      width="102%"
      height="101%"
      alt="Parallax Background"
      class="parallax-image"
    />
  </div>
  <!-- Your main content goes here -->
  <slot />
</main>

<style>
  @import "../routes/+page.css";
  .container {
    min-height: 100vh;
    position: relative;
    overflow: hidden; /* Ensure the background image does not overflow */
  }

  .parallax-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/ricky.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media only screen and (min-width: 768px) {
      transform: translateX(calc(-1 * var(--mouse-x) / 50))
        translateY(calc(-1 * var(--mouse-y) / 50));
    }
    z-index: -1; /* Place the background behind other content */
  }
</style>
