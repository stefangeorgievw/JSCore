function solve(arrayOfStrings) {
    let regexStart = /<\w+?>/gm;
    let regexEnd = /<\/\w+?>/gm;
    let matches;
    let result = '';
    let startTags = [];
    let endTags = [];
    let startTagIndex = 0;

      arrayOfStrings.forEach(x=> {
          while((matches = regexStart.exec(x)) !== null){
              startTags.push(matches[0]);

          }
          while((matches = regexEnd.exec(x)) !== null){
              endTags.push(matches[0]);

          }

          if (startTags.length !== endTags.length){
              startTags = [];
              endTags = [];

          }else{
              for (let i = endTags.length - 1; i >= 0; i--) {

                  if(endTags[i].replace('/', '') === startTags[startTagIndex]){

                     x = x.replace(startTags[startTagIndex], "");
                      x = x.replace(endTags[i], '');
                      if (!x.split('').includes('<')){
                          result += x + ' ';
                      }


                  }else {

                  }
                  startTagIndex = startTagIndex + 1;
              }
              startTagIndex = 0;

              startTags = [];
              endTags = [];

          }




      });

      
console.log(result);


}

solve(['<div><p>This</p> is</div>',

    '<div><a>perfectly</a></div>',

    '<divs><p>valid</p></divs>',

    '<div><p>This</div></p>',

    '<div><p>is not</p><div>']);

