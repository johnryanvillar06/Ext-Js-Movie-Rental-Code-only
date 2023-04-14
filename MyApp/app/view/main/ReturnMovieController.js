Ext.define('MyApp.view.ReturnMovieController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.returnmovie',

    onSaveClick1: function() {
        var form = this.lookupReference('form');
        var viewModel = this.getViewModel();
        var selectedReturnMovie = viewModel.get('selectedReturnMovie');
        if (form.isValid()) {
            form.updateRecord(selectedReturnMovie);
            selectedReturnMovie.commit();
            form.reset();
        } else {
            Ext.Msg.alert('Error', 'Please fill all the required fields');
        }
    },

    onSelectionChange: function(grid, selected) {
        var viewModel = this.getViewModel();
        if (selected.length > 0) {
            viewModel.set('selectedReturnMovie', selected[0]);
        } else {
            viewModel.set('selectedReturnMovie', null);
        }
    }
});
