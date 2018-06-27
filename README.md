
## Angular Tutorial
<sub>Updated : 27-Jun-2018</sub>

###### Ref : Example for the below details : https://github.com/mdparthi/angular4-demo


<sub> Ref : chrome extension : augury : https://augury.angular.io/ </sub> <br>
<sub> Ref : observable pattern : http://reactivex.io/ </sub> <br>
<sub> Ref : angular book : https://legacy.gitbook.com/book/rangle-io/ngcourse2/details </sub> 

#### For typescript compiling
`npm install typescript`


#### install angular version 5

`npm install @angular/cli@1.7 -g`

#### create new angular project
`ng new angular4-demo`

#### navigate to angular4-demo and run the app 
`ng serve`

* it launches the app here http://localhost:4200/

#### package.json
* use community developed project
* also to expose self developed code to the community
* dependencies
	 needed at the time of deployment
* dev dependencies
	needed only for development
	
#### example of versioning https://semver.org/

```
x.y.z
1.0.0
| | |
| | |__ patching
| | 
| |____ backward compatible
|
|______ major version and do not support previous
```



#### angular-cli.json
* index.html will be the only file served 
* main.ts to load the modules using the library platformBrowserDynamic
* style - global stylesheet

#### Two modes dev mode and production mode
* dev - angular cycle run twice
* prod - angular cycle run once

* AppModule - RootModule usually loads the root component to the application
* Each module can have own directive, services and pipes


* NgModule
	* declarations
		* Pipe
		* Directive
		* Component
	* imports
		* Modules
	* providers
		* register the 
	* bootstrap
		* load the component for which the selector is avilable over the index
		
#### create new component

`ng generate component user`

```
  create src/app/user/user.component.html (23 bytes)
  create src/app/user/user.component.spec.ts (614 bytes)
  create src/app/user/user.component.ts (261 bytes)
  create src/app/user/user.component.css (0 bytes)
  update src/app/app.module.ts (390 bytes)
```
  
## Components

* controls a patch of screen
* Passing data into components
	* property binding - syntax - [] also {{}} expression binding
	* event binding - syntax - ()
	* two way data binding - no default support 
	* to achieve two way binding we club both [] ()

#### Add bootstrap library
`npm install bootstrap@3 --save`

* use angular-cli.json to include bootstrap 

```
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ]
```

* Example of attribute one way binding fromt the user model
	* <img [src]="user.image" class="img-responsive img-rounded">

#### Explicit property binding + event binding
	
```
<input type="number" 
              [value]="user.votes"
              (change)="user.votes=$event.target.value">
```

#### [(ngModel)] - syntax known as banana in the box
	* property binding + event binding

#### Two way binding can be achieved using ngModel

```
<input type="number" [(ngModel)]="user.votes">
```

## Nested Components
* Data Projection -> Parent Component to Child Component
* @Input + Property Binding

* Data Projection
	* <ng-content> </ng-content> child componenet will receive parent component data
	
	```
	<app-user>
	  <header> Header Info </header>
	  <main> Main Info</main>
	  <footer class="footer-sec">Footer Info</footer>
   </app-user>
	```
	
	```
	<div class="container">
    <ng-content select=".footer-sec" ></ng-content>
	</div>
	```
* @Input
	
	* app.component.ts
	
	```
	<app-user [title]="title">
	```
	
	* user.component.ts
	
	``` 
	import { Component, OnInit, `Input` } from '@angular/core';
	```
	
	```
	export class UserComponent implements OnInit {
	@Input('title') title : string;
	```
	
	* user.component.html
	```
	 User {{title}} works
	```
	
* Smart Componet - root component sends to child component
* Dump Component / Presentational component - for populating the UI

#### Component lifecycle

* ngOnChanges - whenever changes in input data property, which will accept parameter of changes
* ngOnInit - when components loaded  initalized in the browser only once
* ngDoCheck  - when change in data binding
* ngAfterContentInit - when it recieves content using ng-content
* ngAfterContentChecked - 
* ngAfterViewInit - 
* ngAfterViewChanged - 

#### Digest Cycle

* whenever a class is changed it invokes the detector class which trigger the digest cycle

#### Child to Parent Communication

* @Output + Event Binding
* Services
* By Creating object of parent class

## Directive
* Components are directives

* Component Directives
	* Templates associated
	* Business Logic
	* Style
* Attribute Directives
	* do not make anychange in the DOM
	* they may give color style
	* add or remove classes from the element
	```
	for eg.  ngStyle, ngClass
	```
* Structural Directive
	* ngIf, ngFor, ngSwitch
	* manipulate DOM
	* all structural are prefixed with asterisk like *ngFor 
	
	* ngClass and ngStyle can be binded
	


#### ngClass example 

* user.component.html
	
	```
	<p [ngClass]="{'feature' : false, 'transform' :true}" >Date of Birth : {{ user.dob}} </p>
	
	```
	
* user.component.css
	
	```
	.feature {
		border : 2px red solid;
	}
	.transform {
		text-decoration: underline;
	}
	```
	
* dynamic style
* user.component.ts
	
	```
		myClasses = {
		'feature' : true,
		'transform': false
	  }
	```
	
* user.component.html
	
	```
	<p [ngClass] = "myClasses">Date of Birth : {{ user.dob}} </p>
	```

	
* examples of attribute directive
	

	
	```
	 constructor(private elementRef : ElementRef,
                private renderer : Renderer2){
        // this.elementRef.nativeElement.style.backgroundColor = "green";
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //                         'background-color', this.defaultColor)
    }
	```
	
	```
	OR
	```
	
	```
	@HostBinding('style.backgroundColor') bgColor : any;
	```
	
* user.component.html
	
	```
	<h1 appHighlight [defaultColor]="'yellow'">{{user.firstName}} {{user.lastName}} </h1>
	```
	
* command to generate directive without test
	
	```
	ng g d directive/unless --spec false
	```

## Pipes

* It does not change the data, it does change only the view of the data
* Currency, Date, Uppercase, Lowercase, Number, JSON, Percent, Async
* Custom Pipes
	* Pure
	* Impure
* Aysnc : ability for the asynchronisaztion 

* new pipe component
```
 ng g c pipe-demo --spec false
 ng g p pipes/filter --spec false
```

```
@Pipe({
  name: 'filter',
  pure : false
})
```

## Forms

* Template driven form
	* validation logic inside the template
	* represented as ngForm
	* Eg : login form 
* Module driven form
	* app logic resies inside component
	* also known as reactive forms
	* angular validation logic
	* Eg register form
	
```
ng g c auth/login --spec false

ng g c auth/register --spec false
```

## Services && DI

* Angular DI is controlled  through @NgModule

#### Hierarchical Injection

* Root Module - Same instance of service is available app-wide
* Root Component - Same instance of service is available for all componenets ( but not for other services)
* Other component - Same instance of service is avialble for the component and it's own child components

## Firebase

```
npm install firebase --save

ng g s services/auth -spec false

```

## Observables

```
                     Data stream 
-------------------------------------------------------->
       |                 |                    |
   Handle Data     Handle Error        Handle Completion
  
     ---------------- Observer ------------------
```

* page navigation, input, ..etc generates observable
* angular mainly depends on two things observable and decorator
* diff b/w promise & observable
	* in promise it recieves always the full data 
	* in observable it can partially subscribe and rest it can unsubscribe
	* power of 

* Ref for learning observable pattern http://reactivex.io/ 

```
ng g c obs-demo --spec false
```

* subscribe
	* data handler
	* error handler
	* complete function 

* interceptors ( belongs to common http module)
	* inteceptors are services

## Routing

* Two strategy

```
	# - Hash notation
	/ - Html 5 notation
```

* Deep linking is possible

* check base href tag in index file - index.html
* configure routes with components - app.route.ts
* mention about route app (include Router module)
* set route links
* provide space on template to load the component

```
ng g s services/login-gaurd --spec false

ng g c product --spec false
```

* child route
	* nested routes
	
```
ng g c product/overview --spec false

ng g c product/specification --spec false

```

## Module

* to group components, directives , pipes and services
* it can be instantiated lazily ( on demand)

* Module Types
	* Root Module 
		- this imports Browser Module
	* Feature Module 
		- import Common Module and should not have Bootstrap array and Module Decorator

```
ng g m employee
```

##### Lazy Module

* need not to load in the root module

```
ng g m lazy --spec false

ng g c lazy/lazy --spec false
```

## Debugginh Angular Apps

* prevent bugs with Typescript
* Inspect data with json pipe
* using Augury chrome extension

## Securing Angular Apps

* prevent cross-site scripting
* use compiled template

## Testing

```
ng test
```

## Build And Deploy

```
ng build --prod --aot
```


<sub> Ref Also : https://github.com/synergy2411/sg3-demo </sub>