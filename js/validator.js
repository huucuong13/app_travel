function validator(options) {

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate (inputElement,rule) {

        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);

            if (errorMessage) break;
        }

            if (errorMessage) {
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid');
            } else {
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }

            return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {});

                    options.onSubmit(formValues);
                }
            }
        }

        // Lặp lại mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)

        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dung nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

validator.isRequired = function (selector,message ) {
    return {

        selector: selector,
        test: function (value) {
            return value.trim() ? undefined :message || 'Vui lòng nhập trường này'
        },
    }
}

validator.isEmail = function (selector, message) {
    return {

        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined :message || 'Trường này phải là email';
        }


    }
}

validator.minLength = function (selector, min, message) {
    return {

        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }


    }
}

validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {

        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }


    }
}

