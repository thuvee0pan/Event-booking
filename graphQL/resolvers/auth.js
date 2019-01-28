const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


module.exports = {
    createUser: async (args) => {
        try {
            const existingUser  = await User.findOne({ email: args.UserCreate.email })
            if (existingUser ) {
                throw new Error('User exists already.')
            }
            const hashedPass = await bcrypt.hash(args.UserCreate.password, 12)
                const user = new User({
                    email: args.UserCreate.email,
                    name: args.UserCreate.name,
                    password:hashedPass
                })
                    const res = await user.save();
            
                return {...res._doc,password:null, _id: res._doc._id.toString()}
            
        } catch (error) {
            throw error
        }
      
                  
    },
    login: async ({ email, password }) => {
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error('User does not exist!' )
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('password is incorrect! ' )
        }
       const token = jwt.sign({ userID: user.id, email: user.email }, 'mykeyislifesucksbaby', {
            expiresIn:'1h'
        });

        return {
            userID: user.id,
            token: token,
            tokenExpiration:1
        }
    }
}