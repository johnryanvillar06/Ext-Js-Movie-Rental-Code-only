Ext.define('MyApp.model.ReturnMovie',{
    extend: 'Ext.data.Model',

    fields: [
        {name: 'Id', type: 'int'},
        {name: 'CustomerName', type: 'string'},
        {name: 'MovieTitle', type: 'string'},
        {name: 'PenaltyFee', type: 'number'},
        {name: 'ReturnDate', type: 'date'},
        {name: 'Status', type: 'string'}
    ]

});