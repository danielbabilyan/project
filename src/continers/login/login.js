require('./login.less');

const template = require('./login.html');
const input = require('../components/input/input');
const button = require('../components/button/button');

module.exports = {    
    template,
    data: function () {
        return {
            input: {
                username: null,
                password: null,
            },
            invalid_inputs_list: [],
            submit_button_is_clicked: false,
        }
    },
    methods: {
        click: function () {
            this.submit_button_is_clicked = true;
            
            if (!this.invalid_inputs_list.length > 0) {
                console.log('done clicked');
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
    },
}