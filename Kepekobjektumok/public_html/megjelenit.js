window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}
//var kepek = ["elswordelesis.jpg","elswordmaster.jpg","elswords.jpg"];
//var cim = ["Első kép cime","Második kép cime","Harmadik kép cime"];

var kep1 = {
    eleresiut: "kepek/elswordelesis.jpg",
    cim: " Grand Master class and Empire Sword class",
    leiras: "Elsword game character: Elesis"};
//objektum;

var kep2 = {
    eleresiut: "kepek/elswordmaster.jpg",
    cim: " Infinity Sword class",
    leiras: "Elsword game character: Elsword"};

var kep3 = {
    eleresiut: "kepek/elswords.jpg",
    cim: " Elsword classes",
    leiras: "Elsword Game"};

var keptomb = [kep1, kep2, kep3];

function init() {
    for (var i = 0; i < keptomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML += elem;
    }



    console.log("Üdvözől a JS");
    for (var i = 0; i < $("article img").length; i++) {
        $("article img")[i].src = keptomb[i].eleresiut;
        $("article img")[i].src = keptomb[i]["eleresiut"];
        $("article h3")[i].innerHTML = keptomb[i].cim;
        $("article p")[i].innerHTML = keptomb[i].leiras;

//        $("article img")[i].src = kepek[i];
//        $("article h3")[i].innerHTML = cim[i];

    }
    //$("article img")[1].src = "elswordmaster.jpg";
    //$("article img")[2].src = "elswords.jpg";


    //képekhezz kell rendelni egy eseménykezelőt , kattintásal
    //kattintásra után az a kép , amire kattintottam az kép címe,leírása,elérisi út jelenjen meg a konzolon üzenetben.
    for (var i = 0; i < keptomb.length; i++) {

        $("article div img")[i].addEventListener("click", betolt);
    }
    function betolt() {
        var index = this.id; // hanyadik kép;
        console.log(keptomb[index].eleresiut);
        console.log(keptomb[index].cim);
        console.log(keptomb[index].leiras);

        $("section div img")[0].src = keptomb[index].eleresiut;
        $("section div h3")[0].innerHTML = keptomb[index].cim;
        $("section div p")[0].innerHTML = keptomb[index].leiras;
    }

    document.getElementById("bal").addEventListener("click", bal);
    document.getElementById("jobb").addEventListener("click", jobb);

    }
    var index = 0;
    function bal() {

            $("section div img")[0].src = keptomb[index].eleresiut;
            $("section div h3")[0].innerHTML = keptomb[index].cim;
            $("section div p")[0].innerHTML = keptomb[index].leiras;
        }
        index -= 1;
        if(index < 0) {
            index = -1;
        }
    function jobb() {
            $("section div img")[0].src = keptomb[index + 1].eleresiut;
            $("section div h3")[0].innerHTML = keptomb[index + 1].cim;
            $("section div p")[0].innerHTML = keptomb[index + 1].leiras;
        }
        index += 1;
        if (index === keptomb.length) {
            index = 0;
        }
    


    //kattintás után a kép adatai jelenjenek meg a #nagykép div-ben. azaz:
    //kattintot kép elérési utját kapja meg





