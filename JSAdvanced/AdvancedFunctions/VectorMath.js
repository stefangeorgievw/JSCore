(() => {
    return {
        add : function add(vec1, vec2){
            return [vec1[0] + vec2[0],vec1[1] + vec2[1]];
         
         },
      
         multiply : function multiply(vec1, scalar){
             let result = [];
             result[0] = vec1[0] * scalar;
             result[1] = vec1[1] * scalar;

             return result;
         },

         length : function lenght(vec1){
             return Math.sqrt(vec1[0] * vec1[0] + vec1[1] * vec1[1]);
         },

         dot : function dot(vec1, vec2){
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
         },

         cross : function cros(vec1, vec2){
             return vec1[0] * vec2[1] - vec1[1] * vec2[0];
         }
     
    }

})();