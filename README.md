## THARA User Interface
User Interface for Web Dashboard (referred as *Portal*). This interface is used within Thara software.

The interface is embedded in the system (TOS) where it serve as a dashboard to the accompanied device(s).

### Core Dependencies
1. VueJS 2.x - JS Framework (https://vuejs.org)
2. Bulma - CSS Framework (http://bulma.io/)
3. FontAwesome - CSS Icons (http://fontawesome.io/)

#### Compatible with Desktop, Tablet, Mobile

### Plugins
All dynamic interface are built with custom directives (*see Vue*) for testability and deployment. Not all interface will be included in a build unless instructed to do so.

### Features
1. Search Navigation
2. Fullscreen Overlay
3. TALK
4. Dashboard

### Naming Convention

> ##### Filenaming reference
> For spacing, folders uses hyphen `-`, files use underscore `_`.  
> No camelcase, just use the name convention below.

TUI have strict naming for sanity. This is to prevent duplicates of elements and overriding styles.  
Naming is like so.. `[element]`/`[location]`/`[descriptive_label]` (as in folder hierarchy).  

`element` could be one of the following:

1. `layout`
2. `button` 
3. `form`
3. `brand` - *or logo*

`location` could be one of the following:

1. `header`
2. `sidebar`
3. `navigation`
4. `component_full`
5. `component_half`
6. `component_quarter`
7. Could also be recursive `location`\_`location`

`label` is common sense but unique.

#### Example..

1. `layout/header`
2. `button/sidebar/selection`
3. `button/sidebar/selection_vertical`

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### License
MIT
