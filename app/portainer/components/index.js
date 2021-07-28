import angular from 'angular';

import gitFormModule from './forms/git-form';
import porAccessManagementModule from './accessManagement';
import sidebarModule from './sidebar';

export default angular.module('portainer.app.components', [gitFormModule, porAccessManagementModule, sidebarModule]).name;
