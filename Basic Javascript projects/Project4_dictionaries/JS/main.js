function my_dictionary() {
    var Animals= {
        species:'cow',
        age:'10',
        color:'white',
        breed:'desi',
    };
    delete Animals.breed;
    document.getElementById("dictionary").innerHTML=Animals.breed;
}