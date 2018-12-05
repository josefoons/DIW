<html>
    <body>
        <?php
        
            $servidor = "localhost"; # Puede ser una IP o un nombre DNS
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "bdprueba";

            $conn = mysqli_connect($servidor, $username, $password, $basedatos);
            
                if (isset($_COOKIE["micookie"])) {
                    

                        $guardado = $_COOKIE["micookie"];
                        $cons = "SELECT * FROM logs WHERE id = '$guardado' ";
                        $result = mysqli_query($conn, $cons);
                        
                        while($fila = mysqli_fetch_array($result)){
                            echo "Hola, ";
                            echo $fila[1];
                        }
                        
                        ?>
                        
                        <form action="saludoCookieDBBorrado.php" method = "POST">
                            <br>
                            <input type="submit" name="cerrar" value="Cerrar Sesion">
                        </form>
                        
                        <?php
                        
                        if ( !isset ( $_POST["cerrar"] ) ) {
                            // NADA
                        } else {
                           $name="micookie";
                           $value=$id; 
                           $expires=time()-3600;
                           $path="/";
                           $domain="";
                           $secure=false;
                           $HttpOnly=true;
                           setcookie ($name,$value,$expires,$path,$domain,$secure,$HttpeOnly);
                           
                           header("Refresh:0");
                        }
                    
                }  else {
                    
                    if ( !isset ( $_POST["boton"] ) ) {
                ?>   
           
                    <form action="saludoCookieDBBorrado.php" method = "POST">
                      
                    Introduzca su nombre:
                    <br>
                    <input type="text" name="logName">
                    <br>
                    <input type="submit" name="boton" value="enviar">
                       
                    </form>
               
                <?php
                    } else {
                        
                        $cons = "SELECT * FROM logs";
                        $result = mysqli_query($conn, $cons);
                        
                        while($fila = mysqli_fetch_array($result)){
                        	$id = $fila[0] + 1;
                        	$nombre = $_POST["logName"];
                        
                        	$colocar = "INSERT INTO logs (ID, nombre) VALUES ('$id', '$nombre')";
                        	$inser = mysqli_query($conn, $colocar);
                        }
                    
                   $name="micookie";
                   $value=$id; 
                   $expires=time()+600; 
                   $path="/";
                   $domain="";
                   $secure=false;
                   $HttpOnly=true;
                   setcookie ($name,$value,$expires,$path,$domain,$secure,$HttpeOnly);
                   
                   header("Refresh:0");
                  
                }
            }
       
        ?>
       
    </body>
</html>
