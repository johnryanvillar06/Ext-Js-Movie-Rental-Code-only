Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'Phone', type: 'string' },
        { name: 'Address', type: 'string' }
    ]
});
