import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
            created_at: Sequelize.NOW,
            updated_at: Sequelize.NOW
        }, {
            sequelize,
        })

    }
   
}

export default User;