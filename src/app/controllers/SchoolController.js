import School from '../models/School'
import * as Yup from 'yup';
class SchoolController{
    async store(req,res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            id_institution: Yup.number().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:"validation Fails"})
        }
 
        const {name,limit_age,choice_gender,limit_nota,id_institution} = await School.create(req.body)
 
        res.json({name,limit_age,limit_nota,choice_gender,id_institution})
    }
}

export default new SchoolController()