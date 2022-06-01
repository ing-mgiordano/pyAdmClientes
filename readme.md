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

Formulario: utilizamos Formik como libreria y Yup para validaciones.
Instalamos formik y yup: en la terminal escribimos 'npm i formik yup'