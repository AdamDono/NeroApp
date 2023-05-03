const poolConnection = require("../databaseconnect/database");
const pool = poolConnection;




exports.register = async (req, res)=>{ 

    const { email , password ,name ,} = req.body;
   
   
    const sql = 'SELECT * FROM users WHERE email = $1';

   
            
            pool.query('INSERT INTO users (email,password,name) VALUES ($1,$2,$3)',[email,password,name ],(error, results) => 
            {
                if (error) 
                        {
                            res.status(400).json({message:'Query failed'});
                        }else
                        {
                            res.status(200).json({message: name+' has been registered, Please login'});
                        }
                          
            })
        

   

  }