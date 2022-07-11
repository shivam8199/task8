var itemList=document.querySelector('#items');
//parent node

// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parent)

//parent element
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement) 

//childNodes
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor='yellow'
console.log(itemList.firstChild)
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1'
