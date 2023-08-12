const getItem = async (req, res) =>{
    let item={
        "name" : "book",
        "id" : 1
    }
    res.json(item);
}
export {getItem};