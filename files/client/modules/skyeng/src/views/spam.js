
Espo.define('skyeng:views/spam', 'view', function (Dep) {

    return Dep.extend({

        template: 'skyeng:spam',

        el: '#main',

        data: function () {
            return {
                version: this.getConfig().get('version')
            };
        },
        events: {
            'submit #spam': function (e) {
                this.handler();
                return false;
            }
        },
        handler: function () {
                this.notify('Please wait...');

                $.ajax({
                    url: 'Spam',
                    type: 'POST',
                    data: JSON.stringify({id: $('#field-email').val()}),
                    success: function (data) {
                        this.notify('Отправлено', 'success');
                        alert(JSON.stringify(data));
                    }.bind(this),
                    error: function (xhr) {
                        this.notify('Не отправлено', 'error');
                        $submit.removeClass('disabled');
                    }.bind(this)
                });
        },
    });
});
