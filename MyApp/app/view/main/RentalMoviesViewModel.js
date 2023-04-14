Ext.define('MyApp.view.rentals.RentalMoviesViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentalmovies',

    stores: {
        rentalMovies: {
            type: 'rentalmovies'
        }
    }, 
    data: {
        rentalMovie: {
            CustomerName: '',
            MovieTitle: '',
            StartDate: '',
            EndDate: '',
            Price: '',
            Status: ''
        }
    }
});
