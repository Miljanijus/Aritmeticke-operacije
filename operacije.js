
function izracunaj(){
    var broj1 = parseInt(document.getElementById('broj1').value);
    var operacija = document.getElementById('operacija').value;
    var broj2 = parseInt(document.getElementById('broj2').value);
    const boja1 = document.querySelector('.broj1');
    const boja2 = document.querySelector('.broj2');
    if(operacija === '+' && broj1.valueOf(Number) && broj2.valueOf(Number))
    {
        document.getElementById('rezultat').innerHTML= broj1 + broj2;
        boja1.style.backgroundColor='#000';
        boja2.style.backgroundColor='#000';
        document.getElementById('rezultat').style.color= '#000';
    }
    else if(operacija === '-' && broj1.valueOf(Number) && broj2.valueOf(Number))
    {
        document.getElementById('rezultat').innerHTML= broj1 - broj2;
        boja1.style.backgroundColor='#000';
        boja2.style.backgroundColor='#000';
        document.getElementById('rezultat').style.color= '#000';
    }
    else if(operacija === '*' && broj1.valueOf(Number) && broj2.valueOf(Number))
    {
        document.getElementById('rezultat').innerHTML= broj1 * broj2;
        boja1.style.backgroundColor='#000';
        boja2.style.backgroundColor='#000';
        document.getElementById('rezultat').style.color= '#000';
    }else if(operacija === '/' && broj1.valueOf(Number) && broj2.valueOf(Number))
    {
        document.getElementById('rezultat').innerHTML= broj1 / broj2;
        boja1.style.backgroundColor='#000';
        boja2.style.backgroundColor='#000';
        document.getElementById('rezultat').style.color= '#000';
    }
    else
    {
        boja1.style.backgroundColor='#ed111f';
        boja2.style.backgroundColor='#ed111f';
        document.getElementById('rezultat').innerHTML= 'Molimo unesite broj u crveno polje!';
        document.getElementById('rezultat').style.color= '#ed111f';
    }
        
}
