import { Model, DataTypes } from 'sequelize';

import sequelize from '@app/config/db';

class News extends Model {}

News.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    type: {
      type: DataTypes.BIGINT,
      field: 'tipo',
    },
    title: {
      type: DataTypes.STRING(50),
      field: 'titulo',
    },
    content: {
      type: DataTypes.STRING(5000),
      field: 'texto',
    },
    status: {
      type: DataTypes.BIGINT,
      field: 'estado',
    },
    createdBy: {
      type: DataTypes.BIGINT,
      field: 'creado_por',
    },
    updateBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_user',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  },
  {
    sequelize,
    tableName: 'sa_noticias',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default News;
