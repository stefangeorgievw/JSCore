function solve(obj){
    let methodValid = isMethodValid(obj);
    if(methodValid === false){
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriValid = isUriValid(obj);
    if(uriValid === false){
        throw new Error('Invalid request header: Invalid URI');
    }

    let versionValid = isVersionValid(obj);
    if(versionValid === false){
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageValid = isMessageValid(obj);
    if(messageValid === false){
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;

    function isMethodValid(obj){
       if(!obj.hasOwnProperty('method')){
           return false;
       }else if(obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT'){
           return false;
       }else {
           return true;
       }

    }

    function isVersionValid(obj){
        if(!obj.hasOwnProperty('version')){
            return false;
        }else if(obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0'){
            return false;
        }else {
            return true;
        }
 
     }

     function isUriValid(obj){
        if(!obj.hasOwnProperty('uri')){
            return false;
        }
        
        let regex = /^[A-Za-z\.0-9]+$/g; 
        let match = obj.uri.match(regex);
        if(!match && obj.uri !== "*"){
            return false;
        }

        return true;
     }

     function isMessageValid(obj){
        if(!obj.hasOwnProperty('message')){
            return false;
        }
        
        let regex = /^[^\<\>\\&\'\"]*$/g; 
        let match = obj.message.match(regex);
        if(!match && obj.message !== ""){
            return false;
        }

        return true;
     }


}


solve({
    method: 'GET',
    uri: '...aaa666',
    version: 'HTTP/1.1',
    message: ''
});