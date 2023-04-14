Ext.define('MyApp.model.RentalMovie', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'CustomerName', type: 'string' },
        { name: 'MovieTitle', type: 'string' },
        { name: 'StartDate', type: 'date' },
        { name: 'EndDate', type: 'date' },
        { name: 'Price', type: 'number' },
        { name: 'Status', type: 'string' }
    ]
});
