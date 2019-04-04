function attachEvents(){
    $('#btnLoadTowns').on('click', loadTowns);

    function loadTowns(){
        let towns = $('#towns').val().split(', ');
        let template = $("#towns-template").html();
        let compiledTemplate = Handlebars.compile(template);
        let renderedHtml = compiledTemplate({towns});

        $('#root').append(renderedHtml);

    }
}