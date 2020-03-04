import Sequelize,{Model} from 'sequelize'

class School extends Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            content:Sequelize.STRING,

        },
        {
            sequelize,
        }
        )
        return this;
    }
    static associate(models){
        this.belongsTo(models.User,{foreignKey:'institution_id',as:'Owner'})
        this.belongsToMany(models.User,{foreignKey:'school_id',through:'user_schools',as:'users'})
    }

}
export default School;