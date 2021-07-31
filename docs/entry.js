
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/Book.js';
reactComponents['Book'] = Component0;

import Component1 from '../src/App.js';
reactComponents['BooksApp'] = Component1;

import Component2 from '../src/Bookshelf.js';
reactComponents['Bookshelf'] = Component2;

import Component3 from '../src/Dashboard.js';
reactComponents['Dashboard'] = Component3;

import Component4 from '../src/SearchBook.js';
reactComponents['SearchBook'] = Component4;

import Component5 from '../src/ToggleSearchPage.js';
reactComponents['ToggleSearchPage'] = Component5;

import Component6 from '../src/UpdateBook.js';
reactComponents['UpdateBook'] = Component6;