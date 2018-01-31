require('./log-in.less');

const template = require('./log-in.html');
const md_input = require('../components/md-input/md-input');

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
        'md-input': md_input,
    },
}