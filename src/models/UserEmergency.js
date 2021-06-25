import { Model, DataTypes } from 'sequelize';

import sequelize from '@app/config/db';

class UserEmergency extends Model {}

UserEmergency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      field: 'id_user',
      type: DataTypes.INTEGER,
    },
    contactPhone: {
      field: 'telefono',
      type: DataTypes.STRING(30),
    },
    contactName: {
      field: 'nombre',
      type: DataTypes.STRING(300),
    },
    contactRelationship: {
      field: 'parentesco',
      type: DataTypes.STRING(300),
    },
    medicalSystem: {
      field: 'prevision',
      type: DataTypes.STRING(300),
    },
    medialAgreement: {
      field: 'convenio',
      type: DataTypes.STRING(300),
    },
    medicalInsurance: {
      field: 'seguro',
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize,
    tableName: 'sa_members_emergencia',
    timestamps: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default UserEmergency;
