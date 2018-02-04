require('./button.less');

const template = require('./button.html');

module.exports = {
    template,
    props: ['text', 'icon', 'disabled', 'loading'],
    methods: {
        onClick: function () {
            if (!this.loading) {
                this.$emit('click');
            }
        },
    },
}