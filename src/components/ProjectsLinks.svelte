<script>
  export let project;
</script>

<div class="project-links">
  {#each Object.entries(project.links) as [platform, link]}
    <a
      class="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {#if platform === "GH"}
        <i class="fa fa-github" aria-hidden="true" />
      {:else if platform === "WB"}
        <i class="fa fa-globe" aria-hidden="true" />
      {:else if platform === "YT"}
        <i class="fa fa-youtube" aria-hidden="true" />
      {:else if platform === "TW"}
        <i class="fa fa-twitter" aria-hidden="true" />
      {:else if platform === "DC"}
        <i class="fa fa-discord" aria-hidden="true" />
      {:else if platform === "PT"}
        <i class="fa fa-patreon" aria-hidden="true" />
      {:else if platform === "SP"}
        <i class="fa fa-spotify" aria-hidden="true" />
      {:else if platform === "IG"}
        <i class="fa fa-instagram" aria-hidden="true" />
      {:else}
        {platform}
      {/if}
    </a>
  {/each}
</div>

<style>
  .project-links {
    display: inline-block;
    align-items: right;
    text-align: right;
    align-content: right;
    margin-right: 10px;
  }
  .project-link {
    display: inline-block;
    margin-left: 10px;
    color: var(--project-link-color);
    text-decoration: none;
    transition: color 0.3s;
    margin-top: 3px;
    font-size: 25px;
  }

  .project-link:hover {
    color: var(--project-link-color-hover);
  }
</style>
