import { Model, DataTypes } from 'sequelize';

import sequelize from '@app/config/db';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    roleId: {
      field: 'id_rol',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(128),
    },
    salt: {
      type: DataTypes.STRING(128),
    },
    name: {
      type: DataTypes.STRING(50),
    },
    lastname: {
      type: DataTypes.STRING(50),
    },
    rut: {
      type: DataTypes.STRING(50),
    },
    phone: {
      field: 'telefono',
      type: DataTypes.STRING(14),
      allowNull: true,
    },
    city: {
      field: 'ciudad',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    commune: {
      field: 'comuna',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address: {
      field: 'direccion',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    birthday: {
      field: 'fecha_nacimiento',
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    nationality: {
      field: 'nacionalidad',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    occupation: {
      field: 'ocupacion',
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    infoStatus: {
      field: 'estado_info',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      field: 'fecha_creacion',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'fecha_modificacion',
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: 'sa_members',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default User;
