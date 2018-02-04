require('./login.less');

const $ = require('jquery');
const template = require('./login.html');
const input = require('../components/input/input');
const button = require('../components/button/button');
const copyright = require('../components/copyright/copyright');

module.exports = {
    template,
    data: function () {
        return {
            input: {
                username: '',
                password: '',
            },
            invalid_inputs_list: [],
            submit_button_is_clicked: false,
            loading: false,
            user_data: [],
        }
    },
    methods: {
        click: function () {
            this.submit_button_is_clicked = true;
            if (!this.invalid_inputs_list.length > 0) {
                this.loading = true;
                var self = this;
                $.ajax({
                    type: 'POST',
                    url: 'http://192.168.50.111:1234/login',
                    dataType: 'json',
                    data: {
                        username: self.input.username,
                        password: self.input.password,
                    },
                    success: function (data) {
                        if (data.length > 0) {
                            self.user_data = data;
                        }
                        else {
                            self.invalid_inputs_list = ['password'];
                            self.input.password = '';
                            self.loading = false;
                        }
                    }
                });
                this.submit_button_is_clicked = false;
            }
        },
        updateInputData: function (type, value) {
            this.input[type] = value;
        },
        updateInvalidInputsList: function(input_data_name, value) {
            if ((!this.invalid_inputs_list.includes(input_data_name)) && (value)) {
                this.invalid_inputs_list.push(input_data_name);
            }
            else if ((this.invalid_inputs_list.includes(input_data_name)) && (!value)) {
                this.invalid_inputs_list.splice(this.invalid_inputs_list.indexOf(input_data_name), 1);
            }
        },
    },
    components: {
        'input-': input,
        'button-': button,
        'copyright-': copyright,
    },
}