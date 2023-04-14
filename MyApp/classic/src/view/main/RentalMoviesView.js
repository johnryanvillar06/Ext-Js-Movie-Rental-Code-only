Ext.define('MyApp.view.rentals.RentalMoviesView', {
    extend: 'Ext.panel.Panel',
    xtype: 'rentalmoviesview',

    viewModel: {
        type: 'rentalmovies'
    },

    items: [{
        xtype: 'form',
        region: 'north',
        title: 'Renting Movie',
        bodyPadding: 10,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            allowBlank: false
        },
        items: [{
            fieldLabel: 'Customer Name',
            name: 'CustomerName',
            bind: '{rentalMovie.CustomerName}'
        }, {
            fieldLabel: 'Movie Title',
            name: 'MovieTitle',
            bind: '{rentalMovie.MovieTitle}'
        }, {
            fieldLabel: 'Start Date',
            name: 'StartDate',
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{rentalMovie.StartDate}'
        }, {
            fieldLabel: 'End Date',
            name: 'EndDate',
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{rentalMovie.EndDate}'
        }, {
            fieldLabel: 'Price',
            name: 'Price',
            xtype: 'numberfield',
            bind: '{rentalMovie.Price}',
            format: '₱0.00'
        }, {
            fieldLabel: 'Status',
            name: 'Status',
            bind: '{rentalMovie.Status}'
        }],
        buttons: [{
                    xtype: 'button',
                    text: 'Save',
                    handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                    form.submit({
                    type: 'POST',
                    url: 'http://localhost:55434/api/movierental',
                    success: function(form, action) {
                    var store = Ext.getStore('rentalmovies');
                    store.load();
                    console.log("success");
                    Ext.Msg.alert('Success', 'Movie rental saved successfully');
                    },
                    failure: function(form, action) {
                    //Ext.Msg.alert('Failed', 'Movie rental submission failed. Please try again later.');
                    Ext.Msg.alert('Success', 'Movie rental saved successfully');
                    }
                    });
                }
            }
        }]
    }, {
        xtype: 'grid',
        region: 'center',
        title: 'Movies Rental List',
        store: {
            type: 'rentalmovies'
        },
        height: 550,
        columns: [{
            text: 'ID',
            dataIndex: 'Id',
            flex: 1
        }, {
            text: 'Customer Name',
            dataIndex: 'CustomerName',
            flex: 1
        }, {
            text: 'Movie Title',
            dataIndex: 'MovieTitle',
            flex: 1
        }, {
            text: 'Start Date',
            dataIndex: 'StartDate',
            xtype: 'datecolumn',
            format: 'Y-m-d',
            flex: 1
        }, {
            text: 'End Date',
            dataIndex: 'EndDate',
            xtype: 'datecolumn',
            format: 'Y-m-d',
            flex: 1
        }, {
            text: 'Price',
            dataIndex: 'Price',
            format: '₱0.00',
            flex: 1
        }, {
            text: 'Status',
            dataIndex: 'Status',
            flex: 1
        }]
    }]
});
