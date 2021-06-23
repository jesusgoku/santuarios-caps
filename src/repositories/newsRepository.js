import News from '@app/models/News';

/**
 * @typedef {Array} OrderOptionEntry
 * @property {string} column - the columns by order
 * @property {ASC|DESC} direction - the direction of order
 */

/**
 * @typedef {Object} FindAllOptions
 * @property {number} offset - the offset of rows
 * @property {number} limit - the limit off rows
 * @property {OrderOptionEntry[]} order - the order
 */

/**
 * FindAll
 *
 * @param {FindAllOptions} options - the query options
 *
 * @returns {Promise<News[]>}
 */
async function findAll({ limit, offset, order } = {}) {
  return News.findAll({ offset, limit, order });
}

/**
 * FindOneByID
 *
 * @param {number} id - the id for query
 *
 * @returns {Promise<News>}
 */
async function findOneById(id) {
  return News.findOne({ where: { id } });
}

export { findAll, findOneById };
