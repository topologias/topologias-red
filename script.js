content.className = "inicio";
// Función para mostrar el contenido de inicio
function mostrarInicio() {
    const content = document.getElementById("content");
    content.className = "inicio";
    content.innerHTML = `
        <center><h2>¿Qué es la topología de red? </h2></center>
        <img src="./Images/top.png" width="300" height="300" style="float: right; margin-left: 100px;" />
        <p> La topología de red es una disposición de varios componentes como nodos, enlaces y dispositivos de una red y cómo interactúan. Puede utilizarse para definir cómo están dispuestas las distintas redes de telecomunicaciones, incluidas las redes informáticas, las redes de radio de mando y control y los buses de campo industriales.</p>
        <p><p/>
        <p class="espaciado">La topología de red ayuda en las visualizaciones de red, la supervisión de dispositivos y el diagnóstico de problemas en una red.</p>  
     <p class="espaciado">Si esta definición le parece demasiado técnica, troceemos la palabra «topología de red» para entenderla mejor.<p/>
     <h4>Red:</h4><p class="espaciado">En informática, una red se refiere a una disposición de dos o más ordenadores, dispositivos o nodos que se comunican entre sí a través de una conexión inalámbrica o por cable.<p/>
     <h4>Topología:</h4><p class="espaciado"> La forma en que los nodos interactúan en una red es la topología, que administra el flujo de datos entre estos nodos. La palabra «topología» procede del griego:<p/>
     <p class="espaciado">Topo = Lugar<p/>
     <p class="espaciado">Logía = Estudio<p/>
     <img src="./Images/gifinicio.gif" width="300" height="200" style="float: left; margin-right: 100px;" />
     <p class="espaciado">Así pues, la topología se refiere a cómo están conectados los ordenadores en una red, compartiendo información. Y la topología de red es la forma en que los ordenadores están dispuestos lógica o físicamente para compartir información, sirviendo a diferentes propósitos.<p/>
     <p class="espaciado">En la topología de red, hay dos formas de conectar los nodos: lógica y físicamente.<p/>
      <h4>Topología de red física: </h4><p class="espaciado"> Las conexiones entre nodos pueden realizarse con cables, alambres, etc.<p/>
      <h4>Topología de red lógica:</h4><p class="espaciado"> Describe cómo se comunican internamente los ordenadores, los datos que fluyen entre ellos en la red y la ruta que siguen. Se realiza a través de la nube o de recursos virtuales.<p/>  
     <h3>El ponchado de cable de red, también conocido como cable de parcheo o patch cord, se utiliza en las topologías de red para conectar equipos y usuarios desde el panel de parcheo o el punto de acceso a la red.</h3>
     <h4>seleccione el boton ponchado de cable para saber mas información. </h4>
     `;
    toggleMenu(false); // Cierra el menú si está abierto
}

// Función para mostrar la información de una topología específica
function mostrarTopologia(tipo) {
    const content = document.getElementById("content");
    let htmlContent = "";

    switch(tipo) {
        case "bus":
            content.className = "contenido-topologia" ;
                htmlContent = `
                <center><h2>Topología de Bus</h2></center>
                <img src="./Images/bus.gif" width="400" height="200" style="float: right; margin-left: 200px;" />
                <p class="espaciado">En una topología de bus, todos los dispositivos están conectados a un solo cable central (denominado "bus"), que transmite las señales a todos los nodos de la red. Si el cable central se rompe, toda la red se cae.</p>
                <h3>Características:</h3>
                 <p class="espaciado"></p>
                <h4>– Conexión lineal.</h4>
                <p class="espaciado">Todos los dispositivos están conectados a lo largo de un único cable o bus, y cada dispositivo tiene un segmento de este bus.</p>
                <h4>– Transmisión unidireccional.</h4>
                <p class="espaciado"> Los datos se transmiten en una sola dirección a través del bus, y cuando un dispositivo envía datos, estos se propagan a lo largo de toda la red.</p>
                <h4>– Solo un canal de comunicación.</h4> <img src="./Images/imgbus.png" width="500" height="250"   style="float: right; margin-left: 100px;" />
                <p class="espaciado">Solo un dispositivo puede transmitir datos en un momento dado, lo que significa que puede haber colisiones si más de un dispositivo intenta transmitir simultáneamente.</p>
                <h4>– Facilidad de instalar y extender.</h4>
                <p class="espaciado">La topología de bus es relativamente simple de configurar y requiere poco cableado en comparación con otras topologías. Además, es fácil agregar nuevos dispositivos a la red.</p>
                
                <h3>Instalación:</h3>
                <p> - Se necesita un único cable coaxial o de fibra óptica para conectar todos los dispositivos.</p>
                <p> - Los nodos (computadoras, impresoras, etc.) se conectan directamente al bus utilizando conectores T o BNC.</p>
                <p class="espaciado"> - Cada dispositivo transmite datos a través del bus, y todos los dispositivos reciben la señal, pero solo el destinatario la procesa.</p>
                <h3>Ventajas:</h3>
                <p> - Fácil de instalar y económica.</p>
                <p class="espaciado"> - Requiere menos cable que otras topologías.</p>
                <h3>Desventajas:</h3>
                <p> - Si el bus central se daña, toda la red falla.</p>
                <p> - El rendimiento disminuye a medida que se añaden más dispositivos.</p>
                
                <p></p>
            `;
            break;
        case "estrella":
            content.className = "contenido-topologia" ;
            htmlContent = `
                <center><h2>Topología de Estrella</h2></center>
                <img src="./Images/estrella.gif" width="400" height="200" style="float: right; margin-left: 200px;" />
                <p class="espaciado">En esta topología, todos los dispositivos están conectados a un dispositivo central, generalmente un hub o un switch. La comunicación entre los dispositivos pasa a través de este nodo central.</p>
                <p class="espaciado">La topología en estrella, o red en estrella, es una configuración para una red de área local (LAN) en la que cada uno de los nodos están conectados a un punto de conexión central, tal como un concentrador, conmutador o una computadora. Esta topología es una de las configuraciones de red más usuales.</p>
                <h3>Instalación:</h3>
                <p>-Se conecta cada dispositivo (computadoras, impresoras, etc.) a un hub o switch utilizando cables Ethernet.</p>
                <p class="espaciado"> - El hub/switch gestiona las conexiones y distribuye los datos entre los dispositivos.</p>
                <h3>Ventajas:</h3>
                <p>- Alta confiabilidad: si un dispositivo falla, solo ese dispositivo se ve afectado.</p>
                <p>- Fácil de ampliar: agregar nuevos dispositivos es simple.</p>
                <p class="espaciado"> - Mejor rendimiento debido a la segmentación de la red.</p>
                <h3>Desventajas:</h3>
                <p>- Si el hub/switch falla, toda la red se cae.</p>
                <p class="espaciado">- Requiere más cable que la topología de bus.</p>
                <h3>Caracteristicas:</h3>
                <h4>–Conexión centralizada.</h4>
                <p class="espaciado">Todos los dispositivos de la red (nodos) están conectados a un dispositivo central, que actúa como el punto de control y comunicación para todos los nodos conectados.</p>
                <h4>–Es fácil de instalar y administrar.</h4>
                <p class="espaciado"> Dado que todos los dispositivos están conectados a un punto central, es más sencillo identificar fallos y gestionar la red. Cada conexión es independiente, lo que facilita la instalación y la ampliación de la red.</p>
                <h4>–Desempeño y gestión del tráfico.</h4> 
                <p class="espaciado">En una topología en estrella con un switch, el tráfico de la red puede gestionarse de manera eficiente, porque el switch envía los datos solo al dispositivo destinatario. Sin embargo, en una configuración con un hub, todos los datos se transmiten a todos los nodos, lo que puede generar tráfico innecesario y reducir el rendimiento.</p>
                `;
            break;
        case "anillo":
            content.className = "contenido-topologia" ;
            htmlContent = `
                <center><h2>Topología de anillo</h2></center>
            <center><img src="./Images/anillo.gif"width="300" height="300" style="float: right; margin-left: 200px;" />
            <center><p class="espaciado">En la topología de anillo, los dispositivos están conectados en una forma de anillo cerrado. Los datos viajan en una única dirección (o bidireccional, dependiendo de la variante), pasando de un dispositivo a otro hasta llegar al destino.</p></center>
            <center><p class="espaciado">En esta configuración, todos los nodos están conectados en círculo. Aquí, la transmisión de datos se produce en una o en ambas direcciones (semidúplex o dúplex completo). El semidúplex implica la transmisión de datos en una sola dirección, en el sentido de las agujas del reloj o en sentido contrario.</p></center>
            <center><p class="espaciado">Sin embargo, es posible convertir la topología en anillo en una topología full-duplex o de doble anillo. En este caso, la transmisión de datos se produce en sentido antihorario y horario utilizando dos círculos concéntricos o cables que conectan cada nodo.</p></center>
            <h3>Instalación:</h3>
            <p>- Cada dispositivo se conecta a sus vecinos de manera secuencial, formando un anillo.</p>
            <p>- Los datos se transmiten en la dirección del anillo, siguiendo una ruta definida hasta llegar al receptor.</p>
            <h3>Ventajas:</h3>
            <p>- El rendimiento es predecible, ya que la transmisión sigue un camino único.</p>
            <p>- La comunicación entre dispositivos es rápida.</p>
            <h3>Desventajas:</h3>
        <p>- Si un dispositivo o cable falla, puede afectar toda la red.</p>
        <p>- Requiere un mantenimiento más cuidadoso para detectar fallos.</p>
                
               
            `;
            break;
            case "doble anillo":
                content.className = "contenido-topologia" ;
                htmlContent = `
                    <center><h2>Topología doble Anillo</h2></center>
                   <img src="./Images/doblea.gif" width="300" height="300" style="float: right; margin-left: 200px;" />
                    <p  class="espaciado">La topología doble Anillo conecta los dispositivos en una estructura circular. La topología de doble anillo es una red que se compone de dos anillos concéntricos, en la que cada dispositivo de la red está conectado a ambos anillos, pero los dos anillos no están conectados directamente entre sí. Una topología en anillo doble consta de dos anillos concéntricos, donde cada Host de la red está conectado a ambos anillos, aunque los dos anillos no están conectados directamente entre sí.</p>
                   <center><h3>Ventajas:</h3><center>
                   <center><p>-Mayor tolerancia a fallos: La redundancia integrada en la topología de doble anillo mejora la tolerancia a fallos. Si un enlace se rompe, los datos pueden dirigirse a través del otro anillo, manteniendo la red operativa.</p></center>
                    <center><p>-Mejora en la fiabilidad: La redundancia no solo mejora la tolerancia a fallos, sino también la fiabilidad general de la red, ya que es menos probable que se vea completamente interrumpida por un solo punto de fallo.</p></center>
                    <center><p class="espaciado">-Desempeño mejorado bajo carga: La capacidad de utilizar dos caminos puede ayudar a equilibrar la carga y reducir la congestión en comparación con un anillo simple, mejorando el rendimiento general de la red bajo cargas pesadas.</p></center>
                   <h3>Desventajas:</h3>
                   <p>-Complejidad y costo: Implementar una topología de doble anillo puede ser más complejo y costoso que otras topologías debido a la necesidad de cables y dispositivos adicionales para soportar los anillos duplicados.</p>
                   <p>-Retardo potencialmente mayor: Aunque la capacidad de transmitir datos en ambas direcciones puede reducir la latencia, el paso de los datos a través de múltiples nodos antes de alcanzar su destino puede aumentar el retardo general.</p>
                   <p>-Mantenimiento complicado: La detección y reparación de problemas puede ser más complicada debido a la redundancia. Identificar el anillo o enlace específico que está causando un problema puede requerir herramientas y conocimientos especializados.</p>
                    
                `;
            break;
        case "malla":
            content.className = "contenido-topologia" ;
            htmlContent = `
                <center><h2>Topología de Malla</h2></center>
                <img src="./Images/malla.gif" width="300" height="200" style="float: right; margin-left: 200px;" />
                <p class="espaciado">En la topología de malla, cada dispositivo está conectado a todos los demás dispositivos de la red, formando una malla completa o parcial. Existen variantes, como la malla completa o malla parcial, dependiendo de cuántos enlaces haya entre los dispositivos.</p>
                <p class="espaciado">Las topologías de red en malla crean múltiples rutas para que la información viaje entre los nodos conectados. Este enfoque aumenta la resistencia de la red en caso de que falle un nodo o una conexión. Las redes de malla más grandes pueden incluir múltiples routers, conmutadores y otros dispositivos, que funcionan como nodos. Una red de malla puede incluir cientos de nodos de malla inalámbricos, lo que le permite abarcar una gran área.</p>
                <h3>Instalación:</h3>
                <p> - Cada dispositivo se conecta de manera directa a todos los otros dispositivos mediante cables o enlaces inalámbricos.</p>
                <p class="espaciado"> - En una malla completa, cada dispositivo tiene una conexión directa con todos los demás.</p>
                <h3>Ventajas:</h3>
                <p> - Alta fiabilidad: si un enlace falla, los datos pueden tomar otra ruta.</p>
                <p class="espaciado"> - No hay cuellos de botella, ya que cada dispositivo tiene enlaces dedicados.</p>
                <h3>Desventajas:</h3>
                <p> - Costosa en términos de cables y puertos, especialmente en redes grandes.</p>
                <p> - Difícil de configurar y mantener debido a la cantidad de conexiones.</p>
                <p></p>
            `;
            break;
        case "arbol":
            content.className = "contenido-topologia" ;
            htmlContent = `
                 <center><h2>Topología Árbol</h2> </center>
                <img src="./Images/arbol.webp" alt="Topología de arbol" width="300" height="300" style="float: right; margin-left: 100px;" />
                <p>La topología de árbol combina características de la topología de bus y estrella. Tiene un nodo central al que se conectan varios dispositivos, y luego estos dispositivos están conectados a su vez a otros dispositivos de manera jerárquica, formando una estructura en forma de árbol. Topología de red en la que los nodos están colocados en forma de árbol. Desde una visión topológica, la conexión en árbol es parecida a una serie de redes en estrella interconectadas salvo en que no tiene un nodo central. En cambio, tiene un nodo de enlace troncal, generalmente ocupado por un hub o switch, desde el que se ramifican los demás nodos. Es una variación de la red en bus, la falla de un nodo no implica interrupción en las comunicaciones. Se comparte el mismo canal de comunicaciones.</p></left>
               <p class="espaciado">Esta topología se llama así por su parecido a un árbol o estructura jerárquica. Ya que desde su interior o raíz comienza todo el proceso de conexión. El cual es el computador o servidor central conjuntamente con el host. Los cables salientes de este servidor son los que vendrían formando las ramas del árbol y por último los dispositivos que vendrían siendo las hojas.</p>
                <h3>Instalación:</h3>
                <p> - Un hub o switch central gestiona la comunicación entre los dispositivos.</p>
                <p class="espaciado"> - Los nodos de nivel inferior se conectan a los dispositivos superiores, creando ramas o "subárboles".</p>
                 <h3>Ventajas:</h3>
                    <p>-Indudablemente, esta es una red bastante flexible. Ideal para pequeñas y medianas empresas.</p>
                    <p>-Por la misma forma de la red es mucho más fácil identificar un error, ya que puede diagnosticarse por secciones o ramas de manera individual sin afectar las otras partes.</p>
                    <p class="espaciado">-La topología en árbol es altamente escalable. Puedes agregar nuevos nodos fácilmente a la red. Esto la hace ideal para redes que van a crecer con el tiempo.</p>
                    <h3>Desventajas:</h3>
                    <p>-Una de las principales desventajas de la topología de red en árbol es que si el  servidor principal o central falla, es posible la perdida de información e incluso de la conexión total de la red.</p>
                    <p>-Gestionar de manera general este tipo de red a grandes escalas es bastante complicado por la gran cantidad de secciones o ramas que pueda tener.</p>
                    <p>-Es una de las topologías de red que más uso de cable tiene, lo que puede ocasionar fallas en el cableado con mayor frecuencia.</p>
                <p></p>
                
            `;
            break;
        case "mixta":
            content.className = "contenido-topologia" ;
            htmlContent = `
                <center><h2>Topología Mixta</h2></center>
                <right><img src="./Images/mixta.gif" style="float: right; margin-left: 10px;" />
                <p class="espaciado">La topología de mixta conecta cada dispositivo con múltiples otros dispositivos. La topología mixta, también conocida como topología híbrida o red híbrida, es una red que combina dos o más topologías de red básicas. La topología resultante no se corresponde con ninguna de las topologías estándar, como red en bus, estrella o anillo. La topología mixta permite que los nodos de una topología básica se comuniquen con otros nodos de la misma topología y con los de otras topologías básicas. Entre las topologías mixtas más comunes se encuentran la Estrella-Bus y la Estrella-Anillo.</p>
                <h3>Ventajas:</h3>
           <p>-Puede diagnosticar y aislar fallos de manera eficiente.</p>
           <p>-Un fallo en la red no afectará el rendimiento del resto de la red.</p>
            <p class="espaciado">-La topología mixta de red tiene muchas ventajas. Estas topologías son flexibles, confiables y tienen mayor tolerancia a fallas.</p>
           <h3>Desventajas:</h3>
           <p>-Mucho cableado</p>
           <p class="espaciado">-Administración costosa de la red</p>
           <h3>Características:</h3>
            <p>Interconexión de redes con diferentes topologías.</p>
            <p>Capacidad para aislar y resolver problemas en segmentos individuales de la red.</p>
            <p>Uso de múltiples rutas de datos para evitar puntos únicos de fallo.</p>
            <p>Personalización para cumplir con los requisitos de rendimiento y seguridad de la red.</p>
         
            `;
            break;
        
            break;
        default:
            htmlContent = "<p>Selecciona una topología válida.</p>";
    }

    content.innerHTML = htmlContent;
    toggleMenu(); // Oculta el menú después de seleccionar
}

// Función para mostrar la información de ponchado de cable
function mostrarPonchado() {
    const content = document.getElementById("content");
    content.className = ""; // Quita la clase de inicio para remover el fondo
    content.innerHTML = `
        <h2>Ponchado de Cable</h2>
        <body>
        <iframe src="./Images/ponchado.pdf" class="pdf-fullscreen"></iframe>
    </body>
  
        <!-- Botones inferiores -->
        <div class="botones-inferiores">
            <button onclick="mostrarInicio()">Regresar</button>
            <button onclick="cerrarContenido()">Cerrar</button>
        </div>
    `;
}

// Función para mostrar y ocultar el menú
function toggleMenu(forcedState) {
    const menuOpciones = document.getElementById("menu-opciones");
    const menuSubtitulo = document.getElementById("menu-subtitulo");
    const isMenuVisible = forcedState !== undefined ? !forcedState : menuOpciones.style.display === "block";

    // Cambiar visibilidad del menú y del subtítulo
    menuOpciones.style.display = isMenuVisible ? "none" : "block";
    menuSubtitulo.style.display = isMenuVisible ? "none" : "block";
}
// Función para cerrar el contenido actual y limpiar el área
function cerrarContenido() {
    const content = document.getElementById("content");
    content.className = "";
    content.innerHTML = "<p>Selecciona una opción del menú para ver información.</p>";
}
// Función para mostrar el menú de selección de topologías
function mostrarMenuTopologias() {
    const content = document.getElementById("content");
    content.className = ""; // Remueve cualquier clase adicional
    content.innerHTML = `
        <h2>Selecciona un Tipo de Topología</h2>
        <p>Haz clic en una de las opciones del menú flotante para ver información sobre cada tipo de topología.</p>
    `;
}