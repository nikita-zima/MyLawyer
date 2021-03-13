$(function () {
    $('#contact-form').submit(function(e) {
        console.warn('here');

        var $form = $(this);

        // чистим ошибки
        $form.find('.error').remove();
        // проверяем поле с именем пользователя
        if ($form.find('input[name=number]').val() === '') {
            // добавляем текст ошибки
            $form.find('input[name=number]')
                .after('<div class="error">Введите номер телефона</div>');
            // прерываем дальнейшую обработку
            return false;
        }

        const values  = $form.serializeArray();
        const data = {};
        $.each(values, function(i, field){
            data[this.name] = this.value;
        });

        let message = 'Новое сообщение 🥳 \n\n<strong>' +
            'Имя:</strong> ' + data.name +
            '\n<strong>Номер телефона:</strong> ' + data.number;

        console.warn(message);
        axios.post('https://api.telegram.org/bot1401667245:AAGOloPJlrsNKG_Cvwq9EkkyAA1LEQo0nHE/sendMessage', {
            chat_id: "-431057208",
            text: message,
            parse_mode: 'HTML'
        }).catch(error => {
            console.error(error);
        });

        // success
        $form[0].reset();
        $form.find('button')
            .before('<div class="success">Спасибо! Мы скоро свяжемся с вами</div>');
        $("#btnSubmit").attr("disabled", true);

        // отключаем действие по умолчанию
        return false;
    });
});