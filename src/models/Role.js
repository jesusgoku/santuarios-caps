import { Model, DataTypes } from 'sequelize';

import sequelize from '@app/config/db';

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: {
      field: 'rol_name',
      type: DataTypes.STRING(50),
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
    },
  },
  {
    sequelize,
    tableName: 'sa_members_rol',
    timestamps: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default Role;
