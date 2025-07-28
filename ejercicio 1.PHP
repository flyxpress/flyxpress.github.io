<form action="" method="get">
Ingrese la primera edad masculina: <input type="text" name="m1" /> <p>
Ingrese la segunda edad masculina: <input type="text" name="m2" /> <p>
Ingrese la tercera edad masculina: <input type="text" name="m3" /> <p>
Ingrese la primera edad femenina: <input type="text" name="f1" /> <p>
Ingrese la segunda edad femenina: <input type="text" name="f2" /> <p>
Ingrese la tercera edad femenina: <input type="text" name="f3" /> <p>
<input type="submit" value="Calcular" /> <p>
</form>
<body>
<?php
$pm($m1+$m2+$m3)/3;
$pf ($f1+$f2+$f3)/3;
$pg ($pm+$pf)/2;
echo "Promedio de edades masculinas = ", $pm, "<br>";
echo "Promedio de edades femeninas = $pf, "<br>";
echo "Promedio General = ", $pg;
?>
</body>
</html>