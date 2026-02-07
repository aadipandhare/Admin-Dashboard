import {userModel} from './../model/userModel.js';

export const loginUser = async (req,res) =>{

    
    try{
        const {email,password} = req.body;

        const user = await userModel.findOne({email, password});
        console.log("User",user)

        // if(user === req.body.email){
        //     return res.json({success: true, message:"User exits"})
            
        // }else{
        //      return res.json({success: false, message:"User doesn't exits"})
        // }

        if(!user){
            return res.json({success: false, message:"User doesn't exits"})
        } else{
            return res.json({success: true, message:"Valid user"})
            // navigate('/')
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        
        // if(isMatch){
        //     const token = createToken(user._id)
        //    return res.json({success:true, token})
        // }
        // else{
        //     return res.json({success: false, message:"Invalid credentials"})
        // }

    

    }catch(error){
        console.log(error);
        return res.json({success: false, message:error.message})
    }

}


export const registerUser = async (req,res) =>{

    try {
        console.log(req.body)

        const register = new userModel(req.body)
        await register.save();

        res.json({message:"User Register Successfully"})
    } catch (error) {
        res.json({error: error.message})
    }


}


