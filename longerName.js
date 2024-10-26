const longerName =(friends) =>{
    let f =friends[0];
    for(let i=0;i<friends.length;i++){
        if(friends[i].length>f.length){
            f=friends[i];
        }
    }
    return f;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(longerName(friends));
