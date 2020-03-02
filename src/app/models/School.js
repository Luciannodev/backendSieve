import Sequelize,{Model} from 'sequelize'

class School extends Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,

        },
        {
            sequelize,
        }
        )
        return this;
    }
    static associate(models){
        this.belongsToMany(models.User,{foreignKey:'id_studant',through:'school_users', as: 'alunos'})
        this.belongsTo(models.User,{foreignKey:'id_institution',as: 'instituicao'})
    }

}
export default School;