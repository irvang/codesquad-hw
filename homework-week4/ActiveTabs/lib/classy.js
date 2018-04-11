/*
  addClass is a function that takes any css selector 
  as its first argument and the name of a class as 
  its second argument.  It will add the given class to
  every element on the page that is matched by the 
  css selector.
*/
function addClass(selector, className) {
  const elemsToChange = Array.from(document.querySelectorAll(selector));
  
  elemsToChange.forEach(function (elem) {
    elem.classList.add(className);
  });
}

/*
  removeClass is a function that takes any css selector 
  as its first argument and the name of a class as 
  its second argument.  It will remove the given class from
  every element on the page that is matched by the 
  css selector.  In the case where the matched elements don't
  have that class, it will do nothing.
*/

function removeClass(selector, className) {
  const elemsToChange = Array.from(document.querySelectorAll(selector));
  
  elemsToChange.forEach(function (elem) {
    elem.classList.remove(className);
  });
}