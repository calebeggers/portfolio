import angular    from 'angular';
import 'angular-ui-router';
import { config } from './utilities/config';

import { LayoutController }   from './controllers/layout.controller';
import { HomeController }     from './controllers/home.controller';
import { ProjectsController } from './controllers/projects.controller';
import { ContactController }  from './controllers/contact.controller';

import { LayoutService }   from './services/layout.service';
import { HomeService }     from './services/home.service';
import { ProjectsService } from './services/projects.service';
import { ContactService }  from './services/contact.service';

angular
	.module('app', ['ui.router'])
	.config(config)
	.controller('LayoutController',   LayoutController)
	.controller('HomeController',     HomeController)
	.controller('ProjectsController', ProjectsController)
	.controller('ContactController',  ContactController)
	.service('LayoutService',   LayoutService)
	.service('HomeService',     HomeService)
	.service('ProjectsService', ProjectsService)
	.service('ContactService',  ContactService)
;