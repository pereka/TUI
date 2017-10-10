## THARA User Interface
User Interface for Web Dashboard (referred as *Portal*). This interface is used within Thara software.

The interface is embedded in the system (TOS) where it serve as a dashboard to the accompanied device(s).

### Dependencies
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

**Folders uses hyphen `-`, files use underscore `_`.**

TUI have strict naming for sanity. This is to prevent duplicates of elements and overriding styles. Naming is like so..
`[element]`\_`[location]`\_`[label]`

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

1. `layout_header`
2. `button_sidebar_selection`
3. `button_sidebar_selection_vertical`

### Installation
...

### Preview

### License
MIT
