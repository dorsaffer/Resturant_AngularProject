import {Dish} from './dish'
const DISHES: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    ,comments:[
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z',
      }
    ],
    },
    {
      id: '1',
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    ,comments: [
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
    ],
    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    ,comments: [
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
    ],
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    ,comments:[
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
    ],
    }
   ];

export default DISHES