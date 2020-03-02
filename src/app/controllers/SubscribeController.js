import User from "../models/User"
import School from "../models/School"


class SubscribeCotnroller{
    async store(req,res){
        const {name} = req.body 
        const user = await User.findByPk(req.userId)
        
        const [school] = await School.findOrCreate({
            where:{name},
        })

        await user.addSchool(school)

        res.json({
            user,
            school
        }) 
    }
}

export default new SubscribeCotnroller