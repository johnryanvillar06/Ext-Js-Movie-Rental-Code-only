Ext.define('MyApp.store.Customers', {
    extend: 'Ext.data.Store',
    alias: 'store.customers',
    model: 'MyApp.model.Customer',
    
    constructor: function(config) {
        var me = this;

        config = config || {};

        config.proxy = {
            type: 'rest',
            url: 'http://localhost:55434/api/customer',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        };

        me.callParent([config]);

        me.load();
    }
});
