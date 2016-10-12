export const asArray = (obj) => Object.keys(obj).map((key) => obj[key]);

export const deleteItem = (obj, collection) => {
  const newCollection = [];
  collection.forEach((object) => {
    if (object.id !== obj.id) {
      newCollection.push(object);
    }
  });
  return newCollection;
};
