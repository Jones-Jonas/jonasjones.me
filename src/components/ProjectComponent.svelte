<script>
    export let project;
    import ProjectsLinks from "./ProjectsLinks.svelte";

    import "../routes/+page.css";
</script>

<div class="top">
    <img class="image" src="/project-banners{project.backgroud}" alt=" " />
</div>

<div class="bottom">
    <div class="content">
        <div class="project-topline">
            <div class="project-title">{project.title}</div>
            <div class="project-links">
                <ProjectsLinks {project} />
                <a
                    class="project-status"
                    style="color: {project.statuscolor};border-color:{project.statuscolor}"
                    >{project.status}</a
                ><a class="project-version">{project.version}</a>
            </div>
        </div>
        <div class="project-description">{project.description}</div>
    </div>
</div>

<style>
    .project-title {
        font-size: 24px;
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
        color: var(--project-version-color);
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: -4px;
        padding: 2px;
        border: 3px solid var(--project-version-color);
        border-radius: 100px;
        float: right;
    }

    .project-description {
        margin-top: 20px;
        margin-bottom: 10px;
        margin-right: 12px;
        text-align: left;
    }

    .project-links {
        display: flex;
        align-items: right;
        text-align: right;
        align-content: right;
    }

    .top {
        flex: 2;
        display: flex;
        align-items: center;
    }

    .bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .image {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .content {
        margin: 20px;
    }

    .project-topline {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
