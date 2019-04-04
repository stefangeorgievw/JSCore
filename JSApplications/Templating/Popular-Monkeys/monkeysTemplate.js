$(() => {
    async function template(){
       let monkeysTemplate = await $.ajax({
        url: './monkeys.html'
       });
       let monkeyTemplate = await $.ajax({
        url: './monkey.html'
       });

       let context = {
           monkeys : monkeys
       };

      Handlebars.registerPartial('monkey',monkeyTemplate);
      let compiledMonkeysTemplate = Handlebars.compile(monkeysTemplate);
      let renderedMonkeysTemplate = compiledMonkeysTemplate(context);

       $('.monkeys').append(renderedMonkeysTemplate);

       $('button').on('click', function (e){
           $(e.target).next().toggle();
       })

    }
    template();
})