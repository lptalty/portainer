/* @ngInject */
export function Azure($http, API_ENDPOINT_ENDPOINTS, EndpointProvider) {
  return { delete: deleteItem };

  function deleteItem(id, apiVersion) {
    const endpointId = EndpointProvider.endpointID();
    const url = `${API_ENDPOINT_ENDPOINTS}/${endpointId}/azure${id}?api-version=${apiVersion}`;
    return $http({
      method: 'DELETE',
      url,
    });
  }
}
