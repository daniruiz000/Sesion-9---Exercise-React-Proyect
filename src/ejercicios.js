// OPERADOR ||
console.log(false || {}); // Da {} porque para OR en este caso cogería el valor true.
console.log("string" || true);// Da "string" porque para OR en este caso los dos son true pero coge el primero.
console.log([] || 100);//Da [] porque para OR en este caso los dos son true pero coge el primero.
console.log(null || "Prueba"); //Da "Prueba" porque para OR en este caso cogería el valor true.
console.log("" || true);//Da true porque para OR en este caso cogería el valor true.
console.log(undefined || false);//Da false porque en este caso 

// Operador &&
console.log(false && {});//Da false porque para AND en este caso cogería el valor false.
console.log("string" && true);//Da true porque para AND en este caso los dos son true pero coge el segundo.
console.log([] && 100);//Da 100 porque para AND en este caso los dos son true pero coge el segundo.
console.log(null && "Prueba");//Da null porque para AND en este caso cogería el valor false.
console.log("" && true);//Da "" porque para AND en este caso cogería el valor false.
console.log(undefined && false);

// Operador ??
console.log(false ?? {});// Da false porque para ?? en este caso los dos son true pero coge el primero.
console.log("string" ?? true);// Da "string" porque para ?? en este caso los dos son true pero coge el primero.
console.log([] ?? 100);// Da [] porque para ?? en este caso los dos son true pero coge el primero.
console.log(null ?? "Prueba");//Da "Prueba" porque para ?? en este caso cogería el valor true.
console.log("" ?? true);//Da "" porque para ?? en este caso los dos son true pero coge el primero.
console.log(undefined ?? false);//Da false porque para ?? en este caso cogería el valor true.