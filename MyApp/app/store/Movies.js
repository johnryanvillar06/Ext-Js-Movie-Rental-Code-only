Ext.define('MyApp.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',
    model: 'MyApp.model.Movie',
    url: 'http://localhost:55434/api/movies',

    constructor: function(config) {
        var me = this;

        config = config || {};

        config.proxy = {
            type: 'rest',
            url: 'http://localhost:55434/api/movies',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        };

        me.callParent([config]);

        me.load();
    }
});

    
   
