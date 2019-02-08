function solve(){
  let inputText = document.getElementById('input').textContent;
  let paragraphs = [];
  let count = 0;
  let index = 0;

  for (let i=0;i<inputText.length;i++){
      if (inputText[i] === '.'){
          count++;
      }

      if (count == 3){
          paragraphs.push(inputText.slice(index, i + 1));
          count = 0;
          index = i + 1;
      }
  }

  let lastSentence = inputText.slice(index,inputText.length);
    paragraphs.push(lastSentence);

  for (let paragraph of paragraphs) {
      let p1 = document.createElement('p');
      document.getElementById('output').appendChild(p1);
      p1.textContent = paragraph;
  }

}