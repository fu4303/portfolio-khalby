<template>
    <footer>
        <a class="darkmode-ignore" href="//blog.khaleelgibran.com"><span>blog</span></a>&nbsp;·&nbsp;
        <a class="darkmode-ignore" href="//www.youtube.com/channel/UCXf1CMT59vnhMKi4nU0a9kQ"><span>also check out this cool youtube channel (not mine) 😉</span></a>
        <br>
        <p class="darkmode-ignore" @click="toggle" id="theme">{{theme}} theme (beta)</p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data: function() {
        return {
            theme: "dark",
            darkmode: new Darkmode()
        }
    },
    methods: {
        toggle: function() {
            this.darkmode.toggle();
            if (this.darkmode.isActivated() === true) {
                this.theme = "light"
            } else {
                this.theme = "dark"
            }
        }
    },
    mounted: function() {
        if (this.darkmode.isActivated() === true) {
            this.theme = "light"
        } else {
            this.theme = "dark"
        }
    }
}
</script>

<style scoped>
footer {
    text-align: center;
    margin-top: 60px;
}

#theme {
    cursor: pointer;
    color: #6b17e6;
    transition: opacity .2s;
    text-decoration: underline;
}
</style>