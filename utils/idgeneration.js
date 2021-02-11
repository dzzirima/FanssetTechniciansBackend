import UUID from'uuid-int';

var utils = {}

//  generation of unique ids 
utils.generateId = () =>{
    
    
    // number  0 <= id <=511
    const id = 1;

    const generator = UUID(id);

    const uuid = generator.uuid();

    return uuid;
}



export default utils;