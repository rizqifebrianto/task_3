
function tombol() {

    const trivia = document.getElementById('title');
    trivia.innerHTML = 'TRIVIA FIFA WORLD CUP 2022';

    const areatrivia = document.getElementById('area');
    areatrivia.innerHTML = 'TIMNAS ARGENTINA';

    const isitrivia = document.createElement('h3'); 
    const tekstrivia = document.createTextNode('Timnas Argentina sudah berpatisipasi di FIFA World Cup sebanyak 18 kali. 5 diantaranya berhasil menembus babak final yang dimana 2 diantaranya berhasil menjadi juara yaitu pada tahun 1978 dan 1986 dan 3 diantaranya hanya menjadi runner-up yaitu pada tahun 1930, 1990, dan 2014. Adapun julukan bagi timnas Argentina yaitu "La Albiceleste" dan pada gelaran FIFA World Cup 2022 Argentina bergabung satu grup bersama Arab Saudi, Meksiko, dan Polandia.')

    isitrivia.appendChild(tekstrivia); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(isitrivia);
}
