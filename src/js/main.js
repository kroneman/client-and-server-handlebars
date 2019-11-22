
var axios = require('axios');
var listTemplate = require('../views/partials/list.handlebars');
var containerToRenderIn = document.querySelector('.js-target-container');
var renderTrigger = document.querySelector('.js-render-trigger');
var renderApiTrigger = document.querySelector('.js-render-api-trigger');


if(!renderTrigger) {
  return;
}

if(!renderApiTrigger) {
  return;
}

if(!containerToRenderIn) {
  return;
}

renderTrigger.addEventListener('click', renderClientSide, false);
renderApiTrigger.addEventListener('click', renderApiRequestClientSide, false)

/**
 * Renders Template Clientside with local data
 * @param {Event} e 
 * @returns {void}
 */
function renderClientSide(e) {
  axios.get('/api').then(function (response) {
    var data = response.data;

  });
  var data = {
    textItems: ['one', 'two', 'three']
  };
  
  var renderedTemplate = listTemplate(data);
  containerToRenderIn.innerHTML = renderedTemplate;
}

/**
 * Renders Template Clientside with local data
 * @param {Event} e 
 * @returns {void}
 */
function renderApiRequestClientSide(e) {
  axios.get('/api').then(function (response) {
    var data = response.data;
    if(data.textItems) {
      var renderedTemplate = listTemplate(data);
      containerToRenderIn.innerHTML = renderedTemplate;
    }
  });
}
