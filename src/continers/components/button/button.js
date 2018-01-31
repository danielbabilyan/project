require('./button.less');

const template = require('./button.html');

module.exports = {
    template,
    props: ['text', 'icon', 'disabled'],
    methods: {
        onClick: function () {
            this.$emit('click');
        },
    },
}