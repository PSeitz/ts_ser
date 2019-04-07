

class Halde{
    seen: Map<any, string>
    data: {[index:string]: any} // object id to object
}


function deser(obj:{}){
    _deser(obj, new Halde())
}

function _deser(obj:{[index:string]: any}, halde:Halde){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];

            console.log(element.constructor.name)
            console.log(element.name)
            
        }
    }
}


class Elem{
    name: string;
    related?: Elem; 
    constructor(name: string, related?: Elem){
        this.name = name
        this.related = related
    }
}

let test = new Elem("fred", new Elem("herbert"))

deser(test)