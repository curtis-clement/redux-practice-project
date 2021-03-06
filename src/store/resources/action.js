export function addResource(name, type, url) {
  return {
    type: "ADD_RESOURCE",
    payload: {
      id: Math.round(Math.random() * 1000000),
      name: name,
      type: type,
      url: url,
      tags: []
    }
  };
}

export function deleteResource(resourceId) {
  return {
    type: 'DELETE_RESOURCE',
    payload: resourceId
  }
}