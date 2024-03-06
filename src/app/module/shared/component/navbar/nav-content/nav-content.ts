export const navigation = {

    women:{
        id:'women',
        name:'women',
        featured:[],
        sections:[
            {
                id:'clothing',
                name:'clothing',
                items:[
                    {name:'Tops', id:'top', href:`{women/clothing/tops}`},
                    {name:'Dresses', id:'women_dress', href:'#'},
                    {name:'pants', id:'women_jeans'},
                    {name:'Lengha Choli', id:'lengha_choli'},
                    {name:'Sweters', id:'women_sweater'},
                    {name:'T-Shirts', id:'t-shirts'},
                    {name:'Jackets', id:'jacket'},
                    {name:'Gouns', id:'women_gouns'},
                    {name:'sarees', id:'women_saree'},
                    {name:'Kurtas', id:'women_kurtas'},
                ],
            },
            {
                id:'accessories',
                name:'Accessories',
                items:[
                    {name:'Watches', id:'watch'},
                    {name: 'Wallets', id:'wallet'},
                    {name:'Bags', id:'bag'},
                    {name:'Hats', id:'hat'},
                    {name:'Belts', id:'belt'},
                ],
            },
            {
                id:'brands',
                name:'Brands',
                items:[
                    {name:'Full Nelson', id:'#'},
                    {name:'My Way', id:'#'},
                    {name:'Re-Arranged', id:'#'},
                    {name:'CounterFelt', id:'#'},
                    {name:'Significant Other', id:'#'},
                ]
            }
        ]
    },

    men:{
        id:'men',
        name:'men',
        featured:[],
        sections:[
            {
                id:'clothing',
                name:'clothing',
                items:[
                    {name:'Mens Kurtas', id:'kurta', href:`{men/clothing/kurta}`},
                    {name:'Shirt', id:'men_shirt', href:'#'},
                    {name:'pants', id:'men_pants'},
                    {name:'Sweters', id:'men_sweters'},
                    {name:'T-Shirts', id:'t-shirts'},
                    {name:'Jackets', id:'jacket'},
                    {name:'Activewear', id:'activewear'},
                   
                ],
            },
            {
                id:'accessories',
                name:'Accessories',
                items:[
                    {name:'Watches', id:'watch'},
                    {name: 'Wallets', id:'wallet'},
                    {name:'Sunglasses', id:'sunglasses'},
                    {name:'Bags', id:'bag'},
                    {name:'Hats', id:'hat'},
                    {name:'Belts', id:'belt'},
                ],
            },
            {
                id:'brands',
                name:'Brands',
                items:[
                    {name:'Full Nelson', id:'#'},
                    {name:'My Way', id:'#'},
                    {name:'Re-Arranged', id:'#'},
                    {name:'CounterFelt', id:'#'},
                    // {name:'Significant Other', id:'#'},
                ]
            }
        ]
    },
}