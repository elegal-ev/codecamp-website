(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"default",(function(){return d}));var i=t(1),a=t(9),r=(t(0),t(143)),l={id:"chapter-six",title:"Codingeinheit 6 - Klassen und Module",sidebar_label:"Klassen und Module"},s=[{value:"Import unter anderen Namen",id:"import-unter-anderen-namen",children:[]},{value:"Unter anderen Namen importieren",id:"unter-anderen-namen-importieren",children:[]},{value:"Ohne Namen importieren",id:"ohne-namen-importieren",children:[]},{value:"Herleitung",id:"herleitung",children:[]},{value:"Klassen und Objekte",id:"klassen-und-objekte",children:[]},{value:"Objektmethoden",id:"objektmethoden",children:[{value:"Klassen printen",id:"klassen-printen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}]}],u={id:"chapter-six",title:"Codingeinheit 6 - Klassen und Module",description:"# Module",source:"@site/docs/chapter-six.md",permalink:"/codecamp-website/docs/chapter-six",sidebar_label:"Klassen und Module",sidebar:"docs",previous:{title:"Codingeinheit 5 - Files, Strings und Dictionaries",permalink:"/codecamp-website/docs/chapter-five"},next:{title:"Abschlussprojekt",permalink:"/codecamp-website/docs/project"}},o={rightToc:s,metadata:u},b="wrapper";function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(b,Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"module"},"Module"),Object(r.b)("p",null,"In der Programmierung gibt es oft Probleme, die man in jedem Projekt hat (Erstellen von Dateien, Kommunikation \xfcber Internet). Um den Code wiederzuverwenden, kann man diese in sogenannte Module (Libraries) zusammenfassen. In Python sind diese Module einfach nur eine Textdatei oder ein Ordner an Textdateien"),Object(r.b)("p",null,"Wir erstellen um dieses Beispiel zu veranschaulichen ein Modul, welches zwei Funktionen enthalten, welche etwas ausgeben."),Object(r.b)("p",null,"Wir speichern diesen Codeabschnitt in ",Object(r.b)("inlineCode",{parentName:"p"},"mein_modul.py"),"."),Object(r.b)("p",null,"Jetzt koennen wir diesen Code aus einer anderen Datei im gleichen Verzeichnis einfach importieren."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/1e5927079b",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Beachte:")," Hierbei steht ",Object(r.b)("inlineCode",{parentName:"p"},"mein_modul.elegal()"),' f\xfcr "Die Funktion namens ',Object(r.b)("inlineCode",{parentName:"p"},"elegal"),", welche du unter ",Object(r.b)("inlineCode",{parentName:"p"},"mein_modul"),' gefunden hast".')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Module m\xfcssen stets im Pfad verf\xfcgbar sein!")),Object(r.b)("h2",{id:"import-unter-anderen-namen"},"Import unter anderen Namen"),Object(r.b)("p",null,"Nehmen wir folgendes an, wir wollen die Funktion aus der Datei ",Object(r.b)("inlineCode",{parentName:"p"},"liste_aller_praezedenzfaelle_der_letzten_zwanzig_jahre.py"),"."),Object(r.b)("p",null,"Um hier nicht immer den Namen auszuschreiben, gibt es zwei Moeglichkeiten:"),Object(r.b)("h2",{id:"unter-anderen-namen-importieren"},"Unter anderen Namen importieren"),Object(r.b)("p",null,"Hierf\xfcr gibt es ",Object(r.b)("inlineCode",{parentName:"p"},"as"),"-Schl\xfcsselwort in Python."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"import liste_aller_praezedenzfaelle_der_letzten_zwanzig_jahre as liste\n\n# ...\nliste.funktion()\n")),Object(r.b)("h2",{id:"ohne-namen-importieren"},"Ohne Namen importieren"),Object(r.b)("p",null,"Hierf\xfcr gibt es das ",Object(r.b)("inlineCode",{parentName:"p"},"from"),"-Schl\xfcsselwort in Python, womit man einzelne Methoden importiert. Danach kann man diese wie die Standardmethoden ohne Modulnamen aufrufen."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"from mein_modul import elegal\n\nelegal() # Elegal ist super!\n")),Object(r.b)("p",null,"Hierbei haben wir einfach die Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"elegal")," importiert, nicht ",Object(r.b)("inlineCode",{parentName:"p"},"kpmg"),". Wenn man alles importieren will, schreibt man einfach"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"from mein_modul import *\n")),Object(r.b)("p",null,"wobei der ",Object(r.b)("inlineCode",{parentName:"p"},"*"),' f\xfcr "alles" steht.'),Object(r.b)("h1",{id:"klassen"},"Klassen"),Object(r.b)("h2",{id:"herleitung"},"Herleitung"),Object(r.b)("p",null,"Betrachten wir folgendes Problem: Wir wollen eine Funktion schreiben, welche den Wert eines beliebigen Autos anhand dessen Attribute berechnet.\nHier sei der Preis abhaengig von"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Baujahr des Autos"),Object(r.b)("li",{parentName:"ul"},"Kaufpreis im Jahre des Baujahrs"),Object(r.b)("li",{parentName:"ul"},"Marke"),Object(r.b)("li",{parentName:"ul"},"Modell"),Object(r.b)("li",{parentName:"ul"},"Extraausstattungen"),Object(r.b)("li",{parentName:"ul"},"Unfallfrei")),Object(r.b)("p",null,"Dies w\xfcrde im Code wiefolgt aussehen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"def wert_rechner(baujahr, kaufpreis, marke, modell, ausstattung, unfallfrei):\n    letzter = letzter_verkaufswert(baujahr, kaufpreis, marke, modell, ausstattung, unfallfrei)\n\n    maximal = hoechster_verkaufswert(baujahr, kaufpreis, marke, modell, ausstattung, unfallfrei)\n\n    minimal = niederigster_verkaufswert(baujahr, kaufpreis, marke, modell, ausstattung, unfallfrei)\n\n    liste = listenpreis(baujahr, kaufpreis, marke, modell, ausstattung, unfallfrei)\n\n    if (minimal < listenpreis):\n        return (liste*maximal*letzter)/3\n    else:\n        return (minimal*maximal*lezter)/3\n")),Object(r.b)("p",null,"Hier fallen direkt 3 Probleme auf:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Es ist nur sehr schwierig lesbar"),Object(r.b)("li",{parentName:"ol"},"Man wiederholt sich sehr oft"),Object(r.b)("li",{parentName:"ol"},"Es ist einfach aus Versehen eine Eigenschaft zu vergessen")),Object(r.b)("p",null,'Um diese Probleme zu loesen, gab es viele Ansaetze, wovon das meist genutzte die "Objektorientierte Programmierung" ist.'),Object(r.b)("h2",{id:"klassen-und-objekte"},"Klassen und Objekte"),Object(r.b)("p",null,"Um Probleme der reellen Welt in Code zu abstrahieren, bietet es sich an, hier auch mit einem Auto, statt mit einer Liste an Werten, zu arbeiten."),Object(r.b)("p",null,'Und genau dies sind Klassen und Objekte. Hier ist eine Klasse "Auto" quasi der "Bauplan" f\xfcr Autos, welcher definiert, was genau ein Auto hat.'),Object(r.b)("p",null,"Nach obigen \xfcberlegungen m\xfcssen wir nur noch definieren, wie genau der Bauplan ein Auto erstellen soll:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"Bauplan Auto:\n    Erstellung des Autos:\n    (Hierf\xfcr benoetige ich Baujahr, Kaufpreis, Marke, Modell,\n      Extraausstattungen und ob es unfallfrei ist.)\n\n    Setze fest, dass bei diesem Auto das Baujahr das \xfcbergebene Baujahr ist.\n    Dann setze fest, dass bei diesem Auto der Kaufpreis dem \xfcbergebenen gleicht.\n    Dann setze fest, dass bei diesem Auto die Marke und das Modell \xfcbereinstimmt.\n    Dann setze fest, dass die Ausstattung \xfcbereinstimmt.\n    Dann halte fest, ob das Auto unfallfrei ist.\nBauplan Ende.\n")),Object(r.b)("p",null,"Hierf\xfcr sieht der Pythoncode sehr aehnlich aus:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"class Auto:\n    def __init__(self,baujahr, kaufpreis,marke,modell,ausstattung,unfallfrei):\n        self.baujahr = baujahr\n        self.kaufpreis = kaufpreis\n        self.marke = marke\n        self.modell = modell\n        self.ausstattung = ausstattung\n        self.unfallfrei = unfallfrei\n")),Object(r.b)("p",null,"Auch wenn das meiste selbsterklaerend sein sollte, hier doch noch 1-2 Dinge:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"class")," beschreibt, dass eine Klasse beginnt, genau so wie ",Object(r.b)("inlineCode",{parentName:"li"},"def")," eine Funktion."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"self")," bedeutet, dass es auf die das Objekt des Bauplans (hier das einzelne Auto) bezogen ist. Mehr hierzu spaeter."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__init__"),' ist ein von Python festgelegter Name. Dieser kommt von "initialisation" und wird bei der Erstellung aufgerufen. Allgemein als Richtlinie gilt: ',Object(r.b)("inlineCode",{parentName:"li"},"__funktionsname__")," ist eine interne Funktion.")),Object(r.b)("p",null,"Nun koennen wir unser erstes Auto erstellen! und dann einfach mit ",Object(r.b)("inlineCode",{parentName:"p"},"autoobjekt.information")," diese Aufrufen!"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'auto_zum_verkauf = Auto(2019, 50000, "Audi", "A4", "", True)\n\nprint("Das Auto ist ein " + auto_zum_verkauf.marke\n      + " " + auto_zum_verkauf.modell\n      + " aus dem Jahr " + str(auto_zum_verkauf.baujahr))\n')),Object(r.b)("p",null,"Hierbei ist ",Object(r.b)("inlineCode",{parentName:"p"},"auto_zum_verkauf")," unser Autoobjekt."),Object(r.b)("p",null,"Nun koennen wir ",Object(r.b)("strong",{parentName:"p"},"ENDLICH")," unsere Methode schoener schreiben!"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"def wert_rechner(auto):\n    letzter = letzter_verkaufswert(auto)\n\n    maximal = hoechster_verkaufswert(auto)\n\n    minimal = niederigster_verkaufswert(auto)\n\n    liste = listenpreis(auto)\n\n    if (minimal < listenpreis):\n        return (liste*maximal*letzter)/3\n    else:\n        return (minimal*maximal*lezter)/3\n")),Object(r.b)("h2",{id:"objektmethoden"},"Objektmethoden"),Object(r.b)("p",null,"Wenn man weiter an Objekte in der reellen Welt denkt, kann man Funktionen in 2 Kategorien aufteilen:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dinge die an dem Auto selbst passieren (fahren, bremsen) (Objektmethode)"),Object(r.b)("li",{parentName:"ul"},"Dinge wof\xfcr ein Auto gebraucht wird (Belegen eines Parkplatzes) (Normale Funktion)")),Object(r.b)("p",null,"Objektmethoden zeichnen sich dadurch aus, dass sie kein Sinn hat, diese ohne das Objekt aufzurufen. Es ist halt nicht moeglich, ein Auto zu fahren, welches nicht existiert."),Object(r.b)("p",null,"In Python schreibt man Objektmethoden in Klassen selbst, wof\xfcr das oben benannte ",Object(r.b)("inlineCode",{parentName:"p"},"self")," daf\xfcr steht, dass es sich auf das eigene Objekt bezieht."),Object(r.b)("p",null,"Als Beispiel nun mit der Methode ",Object(r.b)("inlineCode",{parentName:"p"},"unfall_ba\xfcn"),", welche als Folge unfallfrei auf falsch setzt."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"class Auto:\n    def __init__(self,baujahr, kaufpreis,marke,modell,ausstattung,unfallfrei):\n        self.baujahr = baujahr\n        self.kaufpreis = kaufpreis\n        self.marke = marke\n        self.modell = modell\n        self.ausstattung = ausstattung\n        self.unfallfrei = unfallfrei\n\n    def unfall_bauen(self):\n        self.unfallfrei = False\n")),Object(r.b)("h3",{id:"klassen-printen"},"Klassen printen"),Object(r.b)("p",null,"Zuletzt ist es noch sinnvoll, dass das printen wie erwartet klappt."),Object(r.b)("p",null,"Wie wir bereits gelernt haben, sind Funktionen wie ",Object(r.b)("inlineCode",{parentName:"p"},"__init__")," von Python selbst gestellte Funktionen.\nZum printen von Funktionen gibt es nun die von Python gestellte ",Object(r.b)("inlineCode",{parentName:"p"},"__str__"),", welche man einfach definieren muss. Beispiel:"),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/93841f6c32",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h3",{id:"beispiele"},"Beispiele"),Object(r.b)("p",null,"So w\xfcrde man z.B. ein Verein definieren"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'class Verein:\n    name = None\n    mitglieder = []\n    vorsitzender = None\n\n    # Konstruktor\n    def __init__(self, name, vorsitzender):\n        self.name = name\n        self.vorsitzender = vorsitzender\n\n    # Hier wird eine Person als neues_mitglied erwartet\n    # Dies ist eine Objektmethode, da es am Verein selbst passiert.\n    # Beachte: Der Print von neues Mitglied klappt nur,\n    # da __str__ hierfuer definiert ist.\n    def mitglied_beitritt(self, neues_mitglied):\n        self.mitglieder.append(neues_mitglied)\n        print("Neues Mitglied!")\n        print(neues_mitglied)\n\n    def mitgleid_austritt(self, altes_mitglied):\n        if altes_mitglied not in self.mitglieder:\n            print("Diese Person war nie im Verein!")\n            return\n        else:\n            print("Folgende Person verliess den Verein:")\n            print(altes_mitglied)\n            print(":(")\n')))}d.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},d=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=b(t),c=i,p=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return t?a.a.createElement(p,s({ref:n},o,{components:t})):a.a.createElement(p,s({ref:n},o))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);