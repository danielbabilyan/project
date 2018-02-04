require('./input.less');

const template = require('./input.html');

module.exports = {
    template,
    data: function () {
        return {
            input_msg: null,
            dirty: false,
            is_focused: false,
            invalid_regex: [],
        }
    },
    props: ['value', 'submitButtonIsClicked', 'inputDataName', 'checkRegex', 'type', 'placeholder', 'icon'],
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
        inputType: function () {
            if (this.type) {
                return this.type;
            }
            else {
                return 'text'; 
            }
        },
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
            else {
                this.checkInput(true);
            }
        },
        onBlur: function () {
            this.is_focused = false;
            this.dirty = true;
            this.checkInput();
        },
        checkInput: function (silent_error) {
            if (this.checkRegex) {
                for (var i = 0; i < this.checkRegex.length; i++) {
                    var regex = new RegExp(this.checkRegex[i].regex);
                    if (regex.test(this.value)) {
                        if (this.invalid_regex.includes(i)) {
                            this.invalid_regex.splice(this.invalid_regex.indexOf(i), 1);
                        }
                        if (!this.invalid_regex.length > 0) {
                            this.input_msg = null;
                            this.updateInvalidInputsList(false);
                        }
                    }
                    else {
                        if (!this.invalid_regex.includes(i)) {
                            this.invalid_regex.push(i);
                        }
                        if (!silent_error) {
                            this.input_msg = this.checkRegex[i].regex_msg;
                        }
                        this.updateInvalidInputsList(true);
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