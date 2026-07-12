export const productCategories=[
  {id:'wireless-carplay',name:'Wireless CarPlay Adapter',description:'Wireless upgrade products for supported in-car systems.'},
  {id:'wireless-android-auto',name:'Wireless Android Auto Adapter',description:'Category reserved. Product data is pending confirmation.'},
  {id:'four-in-one',name:'4-in-1 CarPlay Adapter',description:'Multi-function adapter category for selected channel requirements.'},
  {id:'ai-box',name:'CarPlay Android AI Box',description:'Android-powered in-car box category.'},
  {id:'portable-display',name:'Portable Car Display',description:'Portable in-car display category.'},
  {id:'motorcycle-display',name:'Motorcycle CarPlay Display',description:'Category reserved. Product data is pending confirmation.'}
] as const;

export const catalogProducts=[
  {model:'B42',name:'B42 2-in-1 Wireless CarPlay Adapter',category:'wireless-carplay',image:'/images/products/tk-cp01/main-01.webp',description:'2-in-1 wireless CarPlay adapter. Detailed specifications remain to be confirmed.',href:'/products/2-in-1-wireless-carplay-adapter',status:'Available page'},
  {model:'B424 4-in-1',name:'B424 4-in-1 Adapter',category:'four-in-one',image:'/images/catalog/product-b424.webp',description:'4-in-1 product model identified from the supplied catalog and image file.',href:null,status:'Details pending'},
  {model:'B432',name:'B432 Wireless CarPlay Adapter',category:'wireless-carplay',image:'/images/catalog/product-b432.webp',description:'Wireless CarPlay adapter model identified from the supplied product catalog.',href:null,status:'Details pending'},
  {model:'W32',name:'W32 CarPlay AI Box',category:'ai-box',image:'/images/catalog/product-w32.webp',description:'CarPlay AI Box model identified from the supplied product catalog.',href:null,status:'Details pending'}
] as const;
