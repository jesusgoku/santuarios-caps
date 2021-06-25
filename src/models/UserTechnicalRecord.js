import { Model, DataTypes } from 'sequelize';

import sequelize from '@app/config/db';

class UserTechnicalRecord extends Model {}

UserTechnicalRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      field: 'id_user',
      type: DataTypes.INTEGER,
      unique: true,
    },
    training: {
      field: 'curso_capa',
      type: DataTypes.STRING(300),
    },
    trainingDescription: {
      field: 'det_curso_capa',
      type: DataTypes.STRING(300),
    },
    club: {
      field: 'club',
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize,
    tableName: 'sa_members_ftecnica',
    timestamps: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default UserTechnicalRecord;
