export default {
    methods: {
        getImgUrl(img) {
            console.log('getImgUrl() wordt aangeroepen vanuit de mixin.');
            return require('../assets/countries/' + img);
        }
    },
    created() {
        console.log(`create`);
    },
    updated() {
        console.log(`updated`);
    },
    mounted() {
        console.log(`mounted`);
    },
    unmouted() {
        console.log(`unmouted`);
    }
}