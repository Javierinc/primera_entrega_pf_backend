# Primera entrega del Proyeco Final
**CONSIGNAS**:

 1. El **router base '/api/products** implementa las siguientes funcionalidades:
	- GET: '/' - Permite listar todos los productos disponibles **(disponible para todos)**
	- GET: '/:id' - Permite listar un producto por su id **(disponible para todos)**
	- POST:'/' - Incorpora productos al listado **(disponible solo para admin)**
	- PUT:'/:id' - Actualiza un producto por su id **(disponible solo para admin)**
	- DELETE:':id' - Borra un producto por su id **(disponible solo para admin)**
	- Para ser un **usuario autorizado (authorized)** y poder acceder al las rutas POST, PUT, DELETE, se debe enviar el campo **"admin": true** dentro del cuerpo de la petición. En caso de no enviarlo o enviar un valor incorrecto, la petición generará **status:401  unauthorized**. A continuación puede ver imágenes de referncia
	
	**POST**
	[![post.png](https://i.postimg.cc/6pVxHkRX/post.png)](https://postimg.cc/QFMzCn04)
**PUT**
[![put.png](https://i.postimg.cc/c6yfX9tv/put.png)](https://postimg.cc/jncWjhXT)

**DELETE**
[![delete.png](https://i.postimg.cc/HLNxHJWm/delete.png)](https://postimg.cc/1gpPr3N7)

2. El **router base '/api/shoppingcart'** implementa cinco rutas disponibles todos:
	- POST: '/' - Crea un carrito con una lista vacia de productos y devuelve su id.
	- DELETE: '/:id_carrito' - Vacía un carrito, borra los productos de la lista.
	- POST: '/:id_cart/products' - Incorporar productos al carrito, enviando el id del producto en el cuerpo de la petición.
	- GET: '/:id_cart/products' - Permite listar todos los productos guardados en el carrito.
	- DELETE: '/:id_cart/products/:id_prod' - Elimina el producto del carrito por la id del carrito y la id del producto.
	- Ejemplo de producto
	`{
	"name":"Stan Ray Cargo Pant","description":"Workwear nowadays isn't just a piece of clothing built tough that's just waiting to be covered in paint, dust and cement, it's evolved into everyday wear that compliments the other garments in the outfit.","image":"https://cdn.shopify.com/s/files/1/1213/2346/products/StanRay_CargoPant_Trousers_Green_OlivePoplin_01_1944x.progressive.jpg?v=1661506363","price":99,"id":"7890a5de-51c4-4896-ab6c-c10efdf4a462"
}`
