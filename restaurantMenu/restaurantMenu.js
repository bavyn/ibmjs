// menu arrays
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak - $29', 'Pasta - $19', 'Burger - $12', 'Salmon - $24'];
const dessertMenu = ['Cake - $6', 'Ice Cream - $3', 'Pudding - $2', 'Fruit Salad - $1'];

// breakfast menu
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// main course menu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// dessert menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
};
document.getElementById('dessertMenuItems').innerHTML = dessertItem;