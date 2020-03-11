export const resourceState = state => {
  return state.resources;
}

export function selectResourceById(resourceId) {
  return function(reduxState) {
    //console.log('DATA IN SELECTOR', resourceId, reduxState)
    return reduxState.resources.find(
      resource => resource.id === resourceId
    )
  }
}