//// Recipes 

//import CinnamonRolls from '../assets/CinnamonRolls.jpg';
//import PumpkinPie from '../assets/PumpkinPie.jpg';
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';

const recipeCollection = [
    {
        id: 0,
        title: 'Cinnamon Rolls',
        image: cinnRols,
        alt: 'Cinnamon rolls',
        attribution: '',
        ingredients: [
            {
                ing: 1,
                name: 'All purpose flour',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 2,
                name: 'Bread flour',
                quantity: 2,
                unit: 'Cups'
            },
            {
                ing: 3,
                name: 'Salt',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 4,
                name: 'Yeast',
                quantity: 1,
                unit: 'Package'
            },
            {
                ing: 5,
                name: 'Oat milk',
                quantity: 0.75,
                unit: 'Cups'
            },
            {
                ing: 6,
                name: 'Plant-based butter',
                quantity: 0.25,
                unit: 'Cups'
            },
            {
                ing: 7,
                name: 'Eggs',
                quantity: 2,
                unit: '1 egg plus 1 yolk',
                notes: '1 egg, plus 1 egg yolk.'
            },
            {
                ing: 8,
                name: 'Vanilla extract',
                quantity: 1,
                unit: 'Teaspoon',
                notes: ''
            },
            {
                ing: 9,
                name: 'Cane sugar',
                quantity: 0.33,
                unit: 'Cups',
                notes: ''
            },
            {
                ing: 10,
                name: 'Dark brown sugar',
                quantity: 0.66,
                unit: 'Cups',
                notes: ''
            },
            {
                ing: 11,
                name: 'Cinnamon',
                quantity: 1,
                unit: 'Tablespoon',
                notes: ''
            },
        ],
        instructions: [
            'Add package of yeast to warm milk, ~105-115°F and let activiate approxximately 5min',
            'Once yeast actives - stir in melted butter, eggs, sugar. Add a dash of vanilla and/or orange extract.',
            'Add the flour mixture and give it a good knead.',
            'Allow dough to rise for 1-2 hrs',
            'Once dough is proofed, roll into 13x9 rectangle and spread soft butter followed by brown sugar and cinnamon mixture. ',
            'Roll into a log and cut into individual pieces (should get about 10',
            'Place into pan and allow for a second rise, about one hour.',
            'Heat oven to 350°F. Bake rolls for ~30 minutes or ubtil golden brown.'
        ]
    },
    {
        id: 1,
        title: 'Blueberry Muffins',
        image: bbMuffin,
        alt: 'Pumpkin pie',
        attribution: '',
        ingredients: [
            {
                ing: 1,
                name: 'All purpose flour',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 2,
                name: 'Cake four',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 3,
                name: 'Baking powder',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 4,
                name: 'Baking soda',
                quantity: 0.5,
                unit: 'Teaspoon'
            },
            {
                ing: 5,
                name: 'Salt',
                quantity: 0.5,
                unit: 'Teaspoon'
            },
            {
                ing: 6,
                name: 'Vegetable oil',
                quantity: 1,
                unit: 'Tablespoons'
            },
            {
                ing: 7,
                name: 'Applesauce',
                quantity: 0.30,
                unit: 'Cup'
            },
            {
                ing: 8,
                name: 'Cane sugar',
                quantity: 0.5,
                unit: 'Cup'
            },
            {
                ing: 9,
                name: 'Honey',
                quantity: 1,
                unit: 'Tablespoon'
            },
            {
                ing: 10,
                name: 'Eggs',
                quantity: 2,
                unit: '',
                //notes: '1 egg, plus 1 egg yolk.'
            },
            {
                ing: 11,
                name: 'Vanilla extract',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 12,
                name: 'Orange extract',
                quantity: 0.25,
                unit: 'Teaspoon'
            },
            {
                ing: 13,
                name: 'Oat milk',
                quantity: 0.5,
                unit: 'Cup',
            },
            {
                ing: 14,
                name: 'Sour cream',
                quantity: 1,
                unit: 'Tablespoon',
            },
            {
                ing: 15,
                name: 'Blueberries',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 16,
                name: 'Lemon zest',
                quantity: 0.5,
                unit: 'Tablespoon'
            },
        ],
        instructions: [
            'Preheat the oven to 450°F',
            'Combine flour, baking powder, baking soda, and salt in a bowl and whisk them together.',
            'In a separate bowl, beat plant-based butter, applesauce, and sugar until well combined. ',
            'Add eggs, vanilla, and honey, and continue beating.',
            'Using a wooden spoon or spatula, gently fold in the flour mixture. Avoid overmixing.',
            'Mix in milk and yogurt, and finally, fold in the blueberries.',
            'Bake at 450°F for 10 minutes. Then, reduce the temperature to 370°F and continue baking until done. Use a toothpick to check for doneness.'
        ]
    },
]


export { recipeCollection };