import angular from 'angular';

import { AzureService } from './azure.service';
import { ContainerGroupService } from './container-group.service';
import { ProviderService } from './provider.service';
import { ResourceGroupService } from './resource-group.service';
import { SubscriptionService } from './subscription.service';

export default angular
  .module('portainer.azure.services', [])
  .service('AzureService', AzureService)
  .service('ContainerGroupService', ContainerGroupService)
  .service('ProviderService', ProviderService)
  .service('ResourceGroupService', ResourceGroupService)
  .service('SubscriptionService', SubscriptionService).name;
