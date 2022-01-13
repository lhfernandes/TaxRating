# TaxRating
DotNet Core API + Angular 13

- Install last version .netframework
- Install last version nodeJs
- npm install -g @angular/cli
- execute npm -i inside angular root project
- In DotNet project open Package Manager Console, and with Infrastructure project selected execute Migration

I used 2 differents players to get rating information, https://openexchangerates.org and http://api.exchangeratesapi.io , in my tests the openexchange was better, because was must more faster and use https by default and had header option eTag.
