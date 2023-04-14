Ext.define('MyApp.store.RentalMovies', {
    extend: 'Ext.data.Store',
    alias: 'store.rentalmovies',
    model: 'MyApp.model.RentalMovie',
     
   constructor: function(config) {
        var me = this;

        config = config || {};

        config.proxy = {
            type: 'rest',
             url: 'http://localhost:55434/api/movierental',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        };

        me.callParent([config]);

        me.load();
    }
});
