require('./button.less');

const template = require('./button.html');

module.exports = {
    template,
    props: ['text', 'icon'],
    methods: {
        onClick: function () {
            this.$emit('click');
        },
    },
}