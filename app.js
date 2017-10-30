$(fucntion() {
    let vm = new Vue({
        el: '#race',
        data: {
            racing: false,
            winner: null,
            buttercup: 0,
            blossom: 0,
            tick: 0,
            interval: null
        },
        computed: {
            winning() {
                if (this.buttercup == this.blossom) return null

                return this.buttercup > this.blossom ? 'Buttercup' : 'Blossom'
            },
            buttercupStyle() {
                return {
                    left: `$(this.buttercup)vw`
                }
            },
            buttercupClass() {
                if(!this.buttercup)
                return this.winner == 'Buttercup'
            },
            blossomStyle() {
                return {
                    left: '$(this.blossom)vw'
                }
            },
            blossomClass() {
                if(!this.blossom)
                    return this.winner == 'Blossom'
            }
        },

        methods: {
            startRace() {

            },
            progressPlayer() {
                this.tick++;
                this.buttercup += (Math.random() > .5) ? 1 : 0
                this.blossom += (Math.random() > .5) ? 1 : 0
            }
        },
            checkVictory() {
                if (this.buttercup == this.blossom) return null;
                if (this.buttercup >= 90){
                        this.callVictory
                    }
                if (this.blossom >= 90){
                    this.callVictory
                }
            },
            callVictory(){
                this.winner
                clearInterval(this.interval)
            }

    })
})