
function menor2(a,b){

    if (a<b){
        return a;
    }
    else{
        return b;
    }
}

console.log(menor2(1,5));

function menor4(a,b,c,d){

    let m1 = menor2(a,b);
    let m2 = menor2(c,d);

    return menor2(m1,m2);

}

console.log(menor4(-1,5,3,7));

function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,p);

    return menor4(m1,m2,m3,m4);
}

console.log(menor16(-12,1,6,3,523,-123,23,35,-66,645,64,2,4,-99,666,-777));

//opción 1 de menor15

function menor3(a,b,c){
    let m1 = menor2(a,b);
    return menor2(m1,c);
}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){

    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor3(m,n,o);

    return menor4(m1,m2,m3,m4);
}

console.log(menor15(-12,1,6,3,523,-123,23,35,-66,645,64,2,4,-99,-977));


//opción 2 de menor15

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){

    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,m3);

    return menor4(m1,m2,m3,m4);
}

console.log(menor15(-12,1,6,3,523,-123,23,35,-66,645,64,2,4,-99,-977));