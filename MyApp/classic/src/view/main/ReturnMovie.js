Ext.define('MyApp.view.ReturnMovie', {
    extend: 'Ext.panel.Panel',
    xtype: 'returnmovieview',

    viewModel: {
        type: 'returnmovie'
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        title: 'Return Movie Details',
        bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            name: 'CustomerName',
            fieldLabel: 'Customer Name',
            bind: '{selectedReturnMovie.CustomerName}'
        }, {
            xtype: 'textfield',
            name: 'MovieTitle',
            fieldLabel: 'Movie Title',
            bind: '{selectedReturnMovie.MovieTitle}'
        }, {
            xtype: 'numberfield',
            name: 'PenaltyFee',
            fieldLabel: 'Penalty Fee',
            bind: '{selectedReturnMovie.PenaltyFee}'
        },
        {
            xtype: 'datefield',
            name: 'ReturnDate',
            fieldLabel: 'Return Date',
            bind: '{selectedReturnMovie.ReturnDate}'
        },
        {
            xtype: 'textfield',
            name: 'Status',
            fieldLabel: 'Status',
            bind: '{selectedReturnMovie.Status}'
        }, {
            xtype: 'button',
            text: 'Save',
            handler: function(button) {
                var form = button.up('form');
                var record = form.getRecord();
                var values = form.getValues();
        
                Ext.Ajax.request({
                    url: 'http://localhost:55434/api/returnmovie',
                    method: 'POST',
                    jsonData: values,
                    success: function(response) {
                        // Handle success
                        var message = ('Successfully Return Movie');
                        Ext.Msg.alert('Success', message);
                        console.log(response.responseText);
                    },
                    failure: function(response) {
                        // Handle failure
                        console.log(response.responseText);
                    }
                });
            }
        }
        ]
    }, {
        xtype: 'grid',
        bind: '{returnMovies}',
        title: 'Return Movies List',
        store: {
            type: 'returnmovies'
        },
        height: 550,
        columns: [{
            text: 'Id',
            dataIndex: 'Id'
        }, {
            text: 'Customer Name',
            dataIndex: 'CustomerName',
            flex: 1
        }, {
            text: 'Movie Title',
            dataIndex: 'MovieTitle',
            flex: 1
        }, {
            text: 'Penalty Fee',
            dataIndex: 'PenaltyFee',
            flex: 1
        }, {
            text: 'Return Date',
            dataIndex: 'ReturnDate',
            format: 'm/d/Y',
            xtype: 'datecolumn',
            flex: 1
        }, {
            text: 'Status',
            dataIndex: 'Status',
            flex: 1
        }],
       
    }]
});
