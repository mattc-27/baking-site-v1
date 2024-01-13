//// Ingredients 

const ingredients = [
   {
    id: 1,
    cateogry: 'Flours',
    flourTypes: [
        { name: 'All purpose flour' },
        { name: 'Bread flour' },
        { name: 'Yeast' },
    ]
},
   {
    id: 2,
    cateogry: 'Sugars and sweeteners',
    sweetenerTypes: [
        { name: 'Dark brown sugar' },
        { name: 'Cane sugar' },
        { name: 'Confectioners sugar' },
        { name: 'Honey' },
        { name: 'Maple syrup' },
        { name: 'Agave' },
    ]
   },
   {
    id: 3,
    cateogry: 'Fats',
    fatTypes: [
        { name: 'Butter' },
        { name: 'Vegan butter' },
        { name: 'Oil' },
        { name: 'Applesauce' },
        { name: 'Maple syrup' },
        { name: 'Agave' },
    ]
   },
   {
    id: 4,
    cateogry: 'Flavorings',
    flavoringTypes: [
        { name: 'Vanilla extract' },
        { name: 'Orange extract' },
        { name: 'Peppermint extract' },
        { name: 'Almond extract' },
        { name: 'Cinnamon' },
        { name: 'Ceyon* cinnamon' },
        { name: 'Nutmeg' },
        { name: 'Allspice' },
        { name: 'Ginger' },
        { name: 'Cloves' },
    ]
   },
   {
    id: 5,
    cateogry: 'Dairy',
    milkTypes: [
        { name: 'Milk' },
        { name: 'Whole milk' },
        { name: 'Half and half'},
       
    ],
    nonDairyMilk: [
        { name: 'Oat milk' },
        { name: 'Almond milk'}
       
    ],
    name: 'Cream cheese',
    name: 'Eggs'
   },
]

const measurements = [
    {
        name: 'Quantity',
        ingredientAmount: 1
    },
    {
        name: 'Unit',
        unitTypes: [
            'Cup',
            'Teaspoon',
            'Tablespoon'
        ]
    }
]


export { ingredients, measurements };


/* 
const recipeExample = {
    title: 'Cinnamon Rolls',
    attribution: '',
    ingredients: [
        {
            ing: 1,
            name: '',
            quantity: 1,
            unit: 'Teaspoon'
        },

    ],
    instructions: ''

}



ing #
name
quantity

{
    ing: 1,
    name: '',
    quantity: 1,
    unit: 'Teaspoon'
},
{
    ing: {
        id: 2,
        name: ''
    },
    quantity: 1,
    unit: 'Cup'
}

*/

