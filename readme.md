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

-------------------------------------------------------------------------------------

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
</BrowserRouter>