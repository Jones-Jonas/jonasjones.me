<script lang="ts">
  import FontAwesome from "../../components/FontAwesome.svelte";
  import Footer from "../../components/Footer.svelte";
  import NavBar from "../../components/NavBar.svelte";
  import ParallaxBg from "../../components/ParallaxBg.svelte";
  import Padding from "../../components/padding.svelte";

  import projects from "./projects.json";

  var searchResults = projects;

  var searchtext = '';
  var searchcategory = '';
  var searchlanguage = '';
  var searchstatus = '';

  function handleSearchText(event) {
    searchtext = event.target.value.toLowerCase();
    handleSearch()
  }

  function handleSearchCategory(event) {
    searchcategory = event.target.value.toLowerCase();
    handleSearch()
  }

  function handleSearchLang(event) {
    searchlanguage = event.target.value.toLowerCase();
    handleSearch()
  }

  function handleSearchStatus(event) {
    searchstatus = event.target.value.toLowerCase();
    handleSearch()
  }


  function handleSearch() {
    // set searchResults by filtering with searchtext, searchcategory, and searchlanguage
    searchResults = projects.filter(project => {
      var text = project.title.toLowerCase() + project.description.toLowerCase();
      var category = project.categories.join(' ').toLowerCase();
      var language = project.languages.join(' ').toLowerCase();
      var status = project.status.toLowerCase();
      return text.includes(searchtext) && category.includes(searchcategory) && language.includes(searchlanguage) && status.includes(searchstatus);
    });
  }
</script>

<style>
  /* Import Font Awesome for social media icons */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  .container {
    width: 90%;
  }

  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 20px;
    width: 100%;
  }

  .project {
    transition: background-color 0.3s;
    transition: filter 0.3s;
    position: relative;
    padding: 20px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    padding-bottom: 50px;
  }

  .project-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: black;
  }

  .project-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0.918), rgba(0, 0, 0, 0));
    transition: 0.3s;
  }

  .project:hover img {
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }

  .project-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
  }

  .project-status {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    border: 3px solid #dcdcdc;
    border-radius: 3px;
  }

  .project-version {
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -4px;
    padding: 2px;
    border: 3px solid #dcdcdc;
    border-radius: 100px;
    float: right;
  }

  .project-description {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 12px;
    text-align: right;
  }

  .project-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 20px;
  }

  .project-link {
    display: inline-block;
    margin-left: 10px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
  }

  .project-link:hover {
    color: #666;
  }

  .download-button {
    margin-left: 10px;
    color: white;
    transition: color 0.3s;
    background-color: rgb(25, 25, 100);
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    border: 3px solid rgb(0, 0, 100);
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .search-bar {
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.678);
  padding: 10px;
  border-radius: 5px;
  }

  .search-bar input {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
  }

  .search-bar select {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .smaller-screen {
    display: none;
  }

  @media only screen and (max-width: 620px) {
    .project-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .container {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    .smaller-screen {
      display: block;
    }
  }
</style>

<FontAwesome />
<ParallaxBg>
    <title>Projects</title>
    <div class="container">
        <Padding />
        <NavBar />
        <h1>Projects</h1>
        <div class="search-bar">
          <input type="text" placeholder="Search projects" on:input={handleSearchText} />
          <i class="fa fa-folder-open" aria-hidden="true"></i>
          <select name="category" id="category" on:change={handleSearchCategory}>
            <option value="">All</option>
            <optgroup label="Minecraft">
              <option value="minecraft">Minecraft</option>
              <option value="mcmodding">Modding</option>
              <option value="fabric">FabricMC</option>
              <option value="quilt">QuiltMC</option>
              <option value="forge">Forge</option>
            </optgroup>
            <optgroup label="WebDev">
              <option value="webdev">WebDev</option>
              <option value="website">Website</option>
            </optgroup>
          </select>
          <i class="fa fa-globe" aria-hidden="true"></i>
          <select name="language" id="language" on:change={handleSearchLang}>
            <option value="">All</option>
            <option value="clang">C</option>
            <option value="c++">C++</option>
            <option value="py">Python</option>
            <option value="java">Java</option>
            <option value="rslang">Rust</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="jslang">Javascript</option>
            <option value="svelte">Svelte</option>
            <option value="sh">Shell</option>
            <option value="lualang">Lua</option>
            <option value="ps2">PowerShell 2</option>
          </select>
          <i class="fa fa-tasks" aria-hidden="true"></i>
          <select name="status" id="status" on:change={handleSearchStatus}>
            <option value="">All</option>
            <option value="planned">Planned</option>
            <option value="dev">In Development</option>
            <option value="alpha">Alpha</option>
            <option value="beta">Beta</option>
            <option value="release">Release</option>
            <option value="discontinued">Discontinued</option>
          </select>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a style="float: right;margin-right: 10px;margin-top: 10px;">{searchResults.length} results</a>
        </div>
        <div class="project-container">
          {#each searchResults as project}
          <div class="project">
              <!-- svelte-ignore a11y-missing-attribute -->
              <h2 class="project-title">{project.title}<br class="smaller-screen"><br class="smaller-screen"><a class="project-status" style="color: {project.statuscolor};border-color:{project.statuscolor}">{project.status}</a><a class="project-version">{project.version}</a></h2>
              <p class="project-description">{project.description}</p>
              <div class="project-bg">
                <img src="/project-banners/{project.backgroud}" alt=" " />
              </div>
              <Padding />
              <Padding />
              <div class="project-links">
                <div>
                  {#each Object.entries(project.links) as [platform, link]}
                  <a
                    class="project-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {#if platform === "GH"}
                  <i class="fa fa-github" aria-hidden="true"></i>
                  {:else if platform === "WB"}
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  {:else if platform === "YT"}
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                  {:else if platform === "TW"}
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  {:else if platform === "DC"}
                  <i class="fa fa-discord" aria-hidden="true"></i>
                  {:else if platform === "PT"}
                  <i class="fa fa-patreon" aria-hidden="true"></i>
                  {:else if platform === "SP"}
                  <i class="fa fa-spotify" aria-hidden="true"></i>
                  {:else if platform === "IG"}
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  {:else}
                  {platform}
                  {/if}
                  </a>
                  {/each}
                </div>
              </div>
              <div>
                <a class="download-button" href="/projects/{project.title}">More Info</a>
            </div>
          </div>
          {/each}
        </div>
      <Padding />
    </div>
  <Footer />
</ParallaxBg>
