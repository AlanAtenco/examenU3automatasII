const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0, j = texto.length - 1; i < j; i++, j--) {
        if (texto[i] !== texto[j]) return false;
    }
    return true;
}

console.log(esPalindromo("Anita lava la tina") ? "Es un palíndromo" : "No es un palíndromo");
