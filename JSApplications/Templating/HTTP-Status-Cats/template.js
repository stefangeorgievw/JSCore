$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let template = await $.ajax({
            url: './catTemplate.html'
        });

        let context = {
            cats : window.cats
        }
        let compiled = Handlebars.compile(template);
        let renderedHtml = compiled(context);

        $('#allCats').append(renderedHtml);

        $('button').on('click',function(e){
            let additionalInfo = $(e.target).next();
            additionalInfo.toggle();
        }); 
    }
})


