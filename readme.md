Creamos una pagina para administrar clientes.
Usamos TILWINDCSS para CSS 
Usamos React Router como Routing

Primero en la consola escribimos 'npm init vite@latest' para inicir vite.

Como framework usamos React y como variante React

Eliminamos todo lo que no sea necesario dentro de proyecto que se crea.

Instalamos en la terminal 'npm i autoprefixer postcss tilwindcss' y dentro del archivo tailwind.config, completamos el campo content: ["./index.html", "./src/**/*.{js,jsx}"]. Donde index seria el archivo principal y luego buscaria en la carpeta src todos ls archivos con extencion jsx y js. Importamos dentro del archivo index.css:
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

En la consola dejamos de correr npm con ctrl+c y lo volvemos a inicira con 'npm run dev'

Instalamos React-Router. En la terminal escribimos 'npm i react-router-dom'


<!-- 
En App.jsx creamos las rutas:
    <Route></Route>  // grupo de rutas(abre en un elemento y cierra en otro)
    <Route />  // una sola ruta (abre y cierra en el mismo elemto)

<BrowserRouter>
    <Routes>
        <Route path='/' element={<IniciarSesion />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='nuevo' element={<NuevoCliente />} />
          <Route path='editar/:id' element={<EditarCliente />} />
        </Route>
    </Routes>
</BrowserRouter> -->

Cuando usamos react-router-dom las etiquetas 'a' para los enlaces se remplazan por los componentes Link o Navlink que importamos desde react-router-dom. Dentro de la etiqueta cambiamos el 'href' por 'to'.

useLocation: lo importamos de react-router-dom. Sirve para saber donde esta el cliente situado en la pagina y generamos un clase q muentre al cliente en que parte de la pagina se encuentra.

useNavigate: lo importamos de react-router-dom. Hook que sirve para direccionar al cliente a una cierta direccion.

useParam: lo importamos de react-router-dom. Hook que sirve para traer el parametro que se encuentra en la direccion web: en este caso http://localhost:3000/clientes/1 nos retorna el id:1

Formulario: utilizamos Formik como libreria y Yup para validaciones.
Instalamos formik y yup: en la terminal escribimos 'npm i formik yup'

documentacion de yup: https://github.com/ing-mgiordano/yup

Instalamos JSON-Server para crear una REST API: https://www.npmjs.com/package/json-server

ejecutamos powershell como administrador y pegamos: npm install -g json-server

en la carpeta del py creamos el archivo db.json
en la terminal ejecutamos el codigo json-server --watch db.json ---port 4000

el watch sirve para que identifique cada vez q se genere un cambio en el archivo
port 4000 para que se ejecute en el puerto 4000

json-server es una exelente forma de que puedas avanzar en un proyecto si en la empresa no te pasan los endpoint de backend.


Spinner: https://tobiasahlin.com/spinkit/

creamos un componente spinner.jsx, pegamos el codigo html ( debemos cambiar class por className para que funcione)

creamos una carpeta styles y un archivo Spinner.css y pegamos el codigo css. Importo el archivo css a Spinner.jsx