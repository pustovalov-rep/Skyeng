
Espo.define('skyeng:controllers/spam', 'controller', function (Dep) {

    return Dep.extend({

        defaultAction: 'method',

        method: function () {
            this.main('skyeng:views/spam', {}, function (view) {
                view.render();
            });
        }
    });

});
