function main(array) {
    array.sort((word1,word2) => {
        if (word1.length < word2.length){
            return -1;
        }else if (word2.length < word1.length){
            return 1;
        } else{
            if (word1.toLowerCase() < word2.toLowerCase()) {
                return -1;
            } else if (word2.toLowerCase() < word1.toLowerCase()) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });

    array.forEach(x=> console.log(x));

}

main(['alpha','beta', 'gamma']);