# Examen - API de productores
* Establecer rutas que sean públicas y privadas. El objetivo es que solo los usuarios que se encuentren registrados puedan acceder a las rutas privadas y las rutas publicas serán accedidas por cualquier usuario.

* Para poder establecer rutas, primero se debe tener un registro de los usuarios y un login, con esto se puede establecer rutas privadas y públicas.<br>
![image](https://github.com/silviachaluisa/Productores/assets/133398724/d58091c7-5639-4f5a-b12d-a0fae4bfe3a9)

 
* Para que se pueda verificar al usuario, también se debe tener JWT(jsonWebtoken), lo que generará al usuario un token, para que pueda acceder a ciertas rutas. 
* Para esto se debe crear una carpeta llamada auth.js dentro de la carpeta de middlewares <br>
![image](https://github.com/silviachaluisa/Productores/assets/133398724/500df985-090f-4c7a-aa97-141b8b4d98eb) <br>

 
![image](https://github.com/silviachaluisa/Productores/assets/133398724/69babd53-fe6c-48be-8cdf-6d03839881a8)

 

* Luego de haber creado el código que proporcionará tokens a los nuevos usuarios.<br>
![image](https://github.com/silviachaluisa/Productores/assets/133398724/f3fd688e-5c10-439e-a795-658abc51476f)

* Nos dirigimos a las rutas, y ya podemos separar entre rutas privadas y públicas. <br>
* Primero se debe importar verifytoken del archivo auth.js <br>
 
¡ Y se va añadiendo las rutas que deben ser privadas <br>

![image](https://github.com/silviachaluisa/Productores/assets/133398724/695994f6-163f-4c9c-956d-1afdde8c8108)

 
* En este caso, las rutas que van a ser privadas, son: <br>

* Creación de nuevos productos, para esto se debe registrar y loguear, lo que le permitirá subir sus productos <br>

 ![image](https://github.com/silviachaluisa/Productores/assets/133398724/08f982d6-24ff-4fde-844c-14cf27fa0080)

* Actualizar los productos en caso de ser necesarios <br>

![image](https://github.com/silviachaluisa/Productores/assets/133398724/6e686486-42ee-41a3-a6aa-ade886d20e8a)

 
*Borrar los productos en caso de ser necesario 

![image](https://github.com/silviachaluisa/Productores/assets/133398724/5c70cac2-be53-49ed-9e79-c8cf4e3d4e98)

 
**Crear producto**

Se requiere un modelo y un controlador que hagan esta acción en el proyecto. En el modelo, se le especifica la url con la que trabajar, en este caso POST.  En el controlador, se especifica cómo se quiere que tome todos los datos para un nuevo registro, incluyendo una imagen que pueda ser subida a Cloudinary, sin dejar archivos temporales.

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/0813588e-b809-40a9-ab85-d579824986b0)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/781600b2-87e2-455a-964a-218a877d4f8d)

**Actualizar producto**

Con la Id que se le proporcione, se crea una URL con la que se podrá obtener un producto específico al que le pasaremos información, usando PUT se actualizará este registro que se haya especificado. En el controlador se expondrá mejor como se accede mediante el id; y si lo encuentra lo actualiza. 

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/98ff7d6c-0081-4832-8706-6463a73f251b)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/0001e56b-f2cc-431d-9296-d6fa7f2e8c6a)


**Eliminar producto**

De forma similar al anterior en este modelo accede al id que se le proporcione, y con ese método DELETE; sabe que su función será eliminar. Ahora, en el controlador: se hará que elimine el producto que coincide con el ID, sin olvidarse de la imagen que se debe destruir desde Cloudinary con ese módulo.

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/39dd4457-5990-45a5-9183-aeb15383fcdc)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/b4f1929b-9617-49db-b50c-b9b0063c18f2)

**Ver un producto**

Utilizando el id correspondiente, se puede buscar y mostrar el producto por id, y recibir una respuesta si no existe.  En el controlador sólo se deberá manejar los errores.

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/bef79f26-e73a-4287-917e-40107d75dc37)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/54e41067-2144-4458-b81c-2bdc0dc94c31)

**Ver todos los productos**

Para realizar el modelo de esta función se necesita principalmente proporcionarle la URL, y manejar errores. Asimismo, esto se hará en el controlador, con la URL y la verificación si se encuentran productos, o mostrar errores en caso de haberlos.

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/5489bb28-dc06-40c7-bb82-b4b39704a18b)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/336113a0-4032-4956-9866-8df882c78b9d)

**Comprar productos**

Con un método post en el modelo, se le debe pasar la URL del producto específico que quiera comprar, y así pueda recibir un mensaje confirmando la compra. Se importa el modelo y en el controlador se busca este producto por la id, y se manejan las diferentes respuestas que se puedan recibir.

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/a0b100f4-5318-4604-b54b-b141d7c2cfad)

![image](https://github.com/JSaulB/PRODUCTORES/assets/150805792/3d66a343-4f42-4785-beb6-32918e02d5e0)








