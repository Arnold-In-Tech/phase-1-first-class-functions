
function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    let fn = function name(){};
    return fn;
}


function returnsAnAnonymousFunction(){
    return () => {};
}
