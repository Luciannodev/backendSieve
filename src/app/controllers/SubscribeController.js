import User from "../models/User"
import School from "../models/School"


class SubscribeController{
    async store(req,res){
        const {name} = req.body 
        const user = await User.findByPk(req.userId)
        
        const [school] = await School.findAll({
            where:{name},
        })
   
        await school.addUser(user)

        res.json({message:`O aluno ${user.name} se inscreveu no curso ${school.name}`}) 
    }
}

export default new SubscribeController