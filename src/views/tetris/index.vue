<template>
    <div id="tetris"
         class="container">
        <div class="row" v-for="row in field">
            <div class="cell" :class="{active: cell}" v-for="cell in row"></div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapState([
                'field',
            ]),
        },
        methods: {
            ...mapActions([
                'down',
                'left',
                'right',
            ]),
        },
        created() {
            addEventListener('keydown', (event) => {
                if (event.keyCode === 40) {
                    this.down()
                }
                if (event.keyCode === 37) {
                    this.left()
                }
                if (event.keyCode === 39) {
                    this.right()
                }
            })

            setInterval(() => this.down(), 1000)
        },
    }
</script>

<style scoped  lang="scss" src="./tetris.scss"></style>
