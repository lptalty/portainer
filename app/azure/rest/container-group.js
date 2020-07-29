/* @ngInject */
export function ContainerGroup($resource, API_ENDPOINT_ENDPOINTS, EndpointProvider) {
  const base = $resource(
    `${API_ENDPOINT_ENDPOINTS}/:endpointId/azure/subscriptions/:subscriptionId/providers/Microsoft.ContainerInstance/containerGroups`,
    {
      endpointId: EndpointProvider.endpointID,
      'api-version': '2018-04-01',
    },
    {
      query: { method: 'GET', params: { subscriptionId: '@subscriptionId' } },
    }
  );

  const withResourceGroup = $resource(
    `${API_ENDPOINT_ENDPOINTS}/:endpointId/azure/subscriptions/:subscriptionId/resourceGroups/:resourceGroupName/providers/Microsoft.ContainerInstance/containerGroups/:containerGroupName`,
    {
      endpointId: EndpointProvider.endpointID,
      'api-version': '2018-04-01',
    },
    {
      create: {
        method: 'PUT',
        params: {
          subscriptionId: '@subscriptionId',
          resourceGroupName: '@resourceGroupName',
          containerGroupName: '@containerGroupName',
        },
      },
      get: {
        method: 'GET',
      },
    }
  );

  return { query: base.query, create: withResourceGroup.create, get: withResourceGroup.get };
}
