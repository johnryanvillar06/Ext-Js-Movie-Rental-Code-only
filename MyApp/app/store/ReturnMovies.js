Ext.define('MyApp.store.ReturnMovies', {
    extend: 'Ext.data.Store',
    alias: 'store.returnmovies',
    model: 'MyApp.model.ReturnMovie',

    constructor: function(config) {
        var me = this;

        config = config || {};

        config.proxy = {
            type: 'rest',
            url: 'http://localhost:55434/api/returnmovie',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        };

        me.callParent([config]);

        me.load();
    }
});
