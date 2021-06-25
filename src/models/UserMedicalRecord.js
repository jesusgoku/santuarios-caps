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
      unique: true,
    },
    bloodType: {
      field: 'grupo_sangre',
      type: DataTypes.STRING(30),
    },
    lesion: {
      field: 'pat_lesion',
      type: DataTypes.STRING(300),
    },
    lesionDescription: {
      field: 'det_pat_lesion',
      type: DataTypes.STRING(300),
    },
    trauma: {
      field: 'traumas',
      type: DataTypes.STRING(300),
    },
    traumaDescription: {
      field: 'det_traumas',
      type: DataTypes.STRING(300),
    },
    allergy: {
      field: 'alergias',
      type: DataTypes.STRING(300),
    },
    allergyDescription: {
      field: 'det_alergias',
      type: DataTypes.STRING(300),
    },
    anotherDisease: {
      field: 'otra_enfermedad',
      type: DataTypes.STRING(300),
    },
    takeMedications: {
      field: 'consume_medicamento',
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize,
    tableName: 'sa_members_fmedica',
    timestamps: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default UserEmergency;
