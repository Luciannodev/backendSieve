import Sequelize,{Model} from 'sequelize'
import bcrypt from 'bcryptjs'
class User extends Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password:Sequelize.VIRTUAL,
            password_hash:Sequelize.STRING,
            age:Sequelize.INTEGER,
            gender:Sequelize.STRING,
            institution:Sequelize.BOOLEAN,
        },
        {
            sequelize,
        }
        )
        this.addHook('beforeSave', async(user)=>{
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password,8)
            }
        })

        return this;
    }
    checkPassword(password) {
        return bcrypt.compare(password,this.password_hash);
    }
    static associate(models){
        this.belongsTo(models.File,{foreignKey:'avatar_id' ,as:'avatar'})
        this.hasMany(models.School,{foreignKey:'institution_id',as:'process'})
        this.belongsToMany(models.School,{foreignKey:'candidate_id',through:'user_schools',as:'schools'})
    }
}

export default User;