import angular from 'angular';

import { Azure } from './azure';
import { ContainerGroup } from './container-group';
import { Provider } from './provider';
import { ResourceGroup } from './resource-group';
import { Subscription } from './subscription';

export default angular
  .module('portainer.azure.rest', [])
  .service('Azure', Azure)
  .service('ContainerGroup', ContainerGroup)
  .service('Provider', Provider)
  .service('ResourceGroup', ResourceGroup)
  .service('Subscription', Subscription).name;
