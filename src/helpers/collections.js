/**
 * MakeIndex
 *
 * @param {Array} collection - the collection for make index
 * @param {string} keyField - the field name for use as key
 *
 * @returns {Object} the index by keyField
 */
function makeIndex(collection, keyField) {
  return collection.reduce((acc, item) => {
    acc[item[keyField]] = item;

    return acc;
  }, {});
}

export {
  makeIndex, //
};
