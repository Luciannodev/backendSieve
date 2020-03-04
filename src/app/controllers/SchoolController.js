import School from '../models/School'
import * as Yup from 'yup';
class SchoolController{
    async store(req,res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            institution_id: Yup.number().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:"validation Fails"})
        }
 
        const {name,limit_age,choice_gender,limit_nota,institution_id} = await School.create(req.body)
 
        res.json({name,limit_age,limit_nota,choice_gender,institution_id})
    }
    async index(req,res){
      const schools = await School.findAll({
        include:{association:'Owner'},
      })

        res.json(schools)
    }
}

export default new SchoolController()