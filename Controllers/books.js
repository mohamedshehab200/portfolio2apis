const bookschema = require("../Schemas/book")


exports.getAllBooks = async function(req,res){

    try{ 
        const books =  await  bookschema.find()
        res.json({message: "done" , data: books})
    
    } catch(error){
        res.status(400).json({message: "something went wrong", error:err})
    
    
    }

}

exports.getOneBook = async function(req,res){
try{
     const book = await bookschema.find({_id: req.params.id})
     res.json({message: "done" , data: book})

} catch(error){

    res.status(400).json({message: "something went wrong", error:err})

}


    
}


exports.deleteBook = async function(req,res){

    try{
        if(req.user.role === "admin") {
            await bookschema.findByIdAndDelete(req.params.id)
        res.json({message: "done" , data: []})

            }else{
                res.status(403).json({ message: "you dont have permatron" });
            }
        
    } catch(error){
    
        res.status(400).json({message: "something went wrong", error:err})

    }
}

exports.updateBook = async function(req,res){
    try{

        await bookschema.findByIdAndUpdate(req.params.id , req.body)
        res.json({message: "done" , data: []})



    } catch(error){
    
        res.status(400).json({message: "something went wrong", error:err})

    }
    

    
}

exports.cerateBook = async function (req, res) {
    try {
        if(req.user.role === "admin") {
        const createBook = await bookschema.create(req.body);  
        res.json({ message: "Book created successfully", data: createBook });

        }else{
            res.status(403).json({ message: "you dont have permatron" });
        }
    } catch (error) {


        console.error("Error creating book:", error);  
        res.status(400).json({ message: "Something went wrong", error: error.message });

    }
  };