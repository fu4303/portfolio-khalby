<template>
    <div class="projects">
        <div class="block fixed project" v-for="(project) in projects" v-bind:key="project.id">
            <h2 class="project-name">{{ project.name }}</h2>
            <span class="project-description">{{ project.description }}</span><br />
            <a :href="'https://' + project.website"><button class="project-website block">Website</button></a>
            <a :href="'https://github.com/khalby786/' + project.github"><button class="project-github block">GitHub</button></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data: function() {
        return {
            projects: [
                {
                    "id": "1",
                    "name": "jsoning",
                    "github": "jsoning",
                    "website": "jsoning.js.org",
                    "description": "✨ A simple key-value JSON-based persistent lightweight database. ✨"
                },
                {
                    "id": "2",
                    "name": "MarkMe!",
                    "github": "markme",
                    "website": "markme.glitch.me",
                    "description": "A simple, lightweight and beautiful Markdown editor and viewer."
                },
                {
                    "id": "3",
                    "name": "REHeader",
                    "github": "REHeader",
                    "website": "reheader.glitch.me",
                    "description": "Generate beautiful header images for your GitHub profile READMEs. "
                },
                {
                    "id": "4",
                    "name": "GlitchyPastePen",
                    "github": "GlitchyPastePen",
                    "website": "glitchypastepen.glitch.me/",
                    "description": "Create simple front-end projects (mainly with HTML, CSS and JS) using an online code editor with instant hosting."
                },
                {
                    "id": "5",
                    "name": "GlitchyPastePen v2.0 - WIP",
                    "github": "GlitchyPastePen.v2",
                    "website": "glitchypastepen.me/",
                    "description": "Create and test HTML, CSS and Javascript code snippets with an online code editor & hosting."
                },
                {
                    "id": "6",
                    "name": "GETXKCD",
                    "github": "getxkcd",
                    "website": "getxkcd.now.sh/",
                    "description": "An XKCD API built using serverless functions with CORS enabled, hosted on Vercel. "
                },
                {
                    "id": "7",
                    "name": "MockFrame",
                    "github": "mockframe",
                    "website": "mockframe.glitch.me",
                    "description": "A JavaScript plugin that styles the <iframe> elements present in your webpage like a browser mockup!"
                },
                {
                    "id": "8",
                    "name": "smallurll - WIP",
                    "github": "smallurll",
                    "website": "s9.wtf",
                    "description": "A beautiful 😍 and simple 🎨 URL shortener."
                },
            ]
        }
    }
}
</script>

<style scoped>

.projects {
  display: grid;
  grid-template-columns: repeat(3, 23vw);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px; 
  text-align: center;
  word-wrap: break-word;
}

@media only screen and (max-width: 600px) {
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 30vw);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px; 
    text-align: center;
    word-wrap: break-word;
  }
}

@media only screen and (max-width: 500px) {
  .projects {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px; 
    text-align: center;
    word-wrap: break-word;
  }
}

.project {
    padding: 10px;
}

.block span {
    font-weight: normal;
}

.block h2 {
    margin-top: 0px;
}

.block button {
    margin-top: 20px;
    display: inline-block;
    font-weight: normal;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #6b17e6;
}

.block a {
    font-weight: normal;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>