require('./input.less');

const template = require('./input.html');

module.exports = {
    template,
    data: function () {
        return {
            value: null,
            input_msg: null,
            dirty: false,
            is_focused: false,
        }
    },
    props: ['submitButtonIsClicked', 'inputDataName', 'regex', 'regexError', 'placeholder', 'icon'],
    created: function () {
        this.checkInput(true);
    },
    watch: {
        submitButtonIsClicked: function (value) {
            if (value) {
                this.dirty = true;
                this.checkInput();
            }
        },
    },
    computed: {
        labelLocationUp: function () {
            if ((this.is_focused) || (this.value)) {
                return true;
            }
        },
    },
    methods: {
        onFocus: function () {
            this.is_focused = true;
        },
        onInput: function () {
            this.updateInputData();
            if (this.dirty) {
                this.checkInput();
            }
        },
        onBlur: function () {
            this.is_focused = false;
            this.dirty = true;
            this.checkInput();
        },
        checkInput: function (silent_error) {
            if (this.regex) {
                if (!this.value) {
                    if (!silent_error) {
                        this.input_msg = 'Required field!';
                    }
                    this.updateInvalidInputsList(true);
                }
                else {
                    var regex = new RegExp(this.regex);
                    if (!regex.test(this.value)) {
                        if (!silent_error) {
                            this.input_msg = this.regexError;
                        }
                        this.updateInvalidInputsList(true);
                    }
                    else {
                        this.input_msg = null;
                        this.updateInvalidInputsList(false);
                    }
                }
            }
        },
        updateInputData: function () {
            this.$emit('update-input-data', this.inputDataName, this.value);
        },
        updateInvalidInputsList: function(value) {
            this.$emit('update-invalid-inputs-list', this.inputDataName, value);
        },
    },
}