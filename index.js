function receivesAFunction(spy){
     spy();
}

function returnsANamedFunction(){
    return function name(){
        console.log(`Hi`)
    }
}

function returnsAnAnonymousFunction(){
    return() =>
    console.log(`Hey`)
};






