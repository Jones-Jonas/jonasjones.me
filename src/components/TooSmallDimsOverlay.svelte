<style>
  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  @media (min-width: 299.99px) {
    .overlay {
      display: none;
    }
  }

  .notice {
    background-color: #1f1f1f;
    padding: 20px;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
</style>

<div class="overlay">
  <div class="notice">
  <p>Your screen resolution isn't supported by this website. if You're on a computer, try zooming out or resizing the window.</p>
  </div>
</div>
  