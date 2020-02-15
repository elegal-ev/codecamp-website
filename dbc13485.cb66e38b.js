/*! For license information please see dbc13485.cb66e38b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(9),a=(t(0),t(146)),l=t(151),c={id:"chapter-four",title:"Codingeinheit 4 - Listen",sidebar_label:"Listen"},s={id:"chapter-four",title:"Codingeinheit 4 - Listen",description:"import CodeBlock from './CodeBlock';",source:"@site/docs/chapter-four.md",permalink:"/codecamp-website/docs/chapter-four",sidebar_label:"Listen",sidebar:"docs",previous:{title:"Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen",permalink:"/codecamp-website/docs/chapter-tree"},next:{title:"Codingeinheit 5 - Files, Strings und Dictionaries",permalink:"/codecamp-website/docs/chapter-five"}},o=[{value:"Was ist eine Liste?",id:"was-ist-eine-liste",children:[]},{value:"Listen und Schleifen",id:"listen-und-schleifen",children:[]},{value:"Negatives Indexieren",id:"negatives-indexieren",children:[]},{value:"Funktionen auf Listen",id:"funktionen-auf-listen",children:[]},{value:"Verschachtelte Listen",id:"verschachtelte-listen",children:[]},{value:"List Comprehension",id:"list-comprehension",children:[]}],u={rightToc:o},b="wrapper";function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"was-ist-eine-liste"},"Was ist eine Liste?"),Object(a.b)("p",null,"Eine Liste ist eine geordnete Sammlung von Pythonobjekten."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'jura_starter_kit = ["Bootsschuhe","Polohemd","Montblancstift"]\n')),Object(a.b)("p",null,"Die Objekte in der Liste m\xfcssen jedoch nicht alle vom selben Typ sein, sondern k\xf6nnen auch verschiedene Typen beinhalten."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'verschiedenes = ["ich bin ein string", 12345]\n')),Object(a.b)("p",null,"Auf die einzelnen Elemente der Liste kann \xfcber den Index zugegriffen werden."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'verschiedenes = ["ich bin ein string", 12345]\nprint(verschiedenes[0])\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Achtung!")," In der IT Welt f\xe4ngt man mit dem Z\xe4hlen bei 0 und nicht bei 1 an."),Object(a.b)("p",null,'Probier es einmal selber und w\xe4hle "JURA" aus der unten stehenden Liste aus'),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/31c7681814",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from elegal_assert import *\n\nstudiengaenge = ["BWL", "INFO", "POWI", "JURA"]\n\nx = # w\xe4hle das richtige Objekt aus der Liste\n\nprint(x)\n\n\n# --- nicht konfigurieren ---\n\ncheck_for_right_list(x)\n'))),Object(a.b)("p",null,"Zuletzt k\xf6nnen Listen auch mit dem ",Object(a.b)("inlineCode",{parentName:"p"},"+"),"-Operator verbunden werden. "),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/24d7dcec12",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'jura_starter_kit = ["Bootsschuhe","Polohemd","Montblancstift"]\njura_starter_kit2 = ["MacBook", "Airpods"]\n\nprint(jura_starter_kit + jura_starter_kit2)\n'))),Object(a.b)("h2",{id:"listen-und-schleifen"},"Listen und Schleifen"),Object(a.b)("p",null,"Listen kann man auch wie folgt auf ",Object(a.b)("inlineCode",{parentName:"p"},"for"),"-Schleifen anwenden"),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/c16796572d",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'einkaufszettel = ["BGB", "STGB", "Notizblock", "Taschent\xfccher"]\n\nfor produkt in einkaufszettel:\n    print("Du musst noch " + produkt + " kaufen!")\n'))),Object(a.b)("p",null,"Hierbei kann man sich gesondert ",Object(a.b)("inlineCode",{parentName:"p"},"range()")," angucken. Dies ist zwar intern keine Liste, aber kann einfach zu einer gemacht werden, indem man hierauf die ",Object(a.b)("inlineCode",{parentName:"p"},"list()"),"-Funktion anwendet"),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/6ddb5efe24",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'print("Range als rangeobjekt: ", range(10))\nprint("Range als Listenobjekt: ", list(range(10)))\n'))),Object(a.b)("h2",{id:"negatives-indexieren"},"Negatives Indexieren"),Object(a.b)("p",null,"Durch indexieren ist es m\xf6glich, gezielt ein Objekt aus der Liste auszuw\xe4hlen."),Object(a.b)("p",null,"Man stelle sich die List wie einen Regler am Herd vor. Die einzelnen Stufen der W\xe4rmezufur sind die Indizes der Listeneintr\xe4ge."),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/44cc806c55",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'regler = ["low", "medium low", "medium", "medium high", "high"]\n\nfor stufe in range(len(regler)):\n    print(regler[stufe])\n    \n'))),Object(a.b)("p",null,"Intuitiv k\xf6nnte man behaupten, dass bei einer Verschiebung des Reglers in die linke Orientierung der Listeneintrag um eins verringert (dekrementiert) wird."),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/f9326e0c33",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'regler = ["low", "medium low", "medium", "medium high", "high"]\nprint(regler[0])\nprint(regler[1])\n'))),Object(a.b)("p",null,"Im Gegensatz dazu ist es auch m\xf6glich, den Regler in die entgegengesetzte Richtung zu bewegen. Will man den Regler von der Ausgangsposition also um einen Eintrag nach rechts bewegen, so ist die Ausgangsposition um eins erh\xf6ht (inkrementiert)."),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/e95db5de52",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'regler = ["low", "medium low", "medium", "medium high", "high"]\nprint(regler[0])\nprint(regler[-1])\n'))),Object(a.b)("h2",{id:"funktionen-auf-listen"},"Funktionen auf Listen"),Object(a.b)("p",null,"Zudem gibt es viele praktische Funktionen f\xfcr Listen!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"append"),":\nDie Funktion ",Object(a.b)("inlineCode",{parentName:"li"},"append()")," f\xfcgt der Liste am Ende ein neues Element hinzu.\nHier ein kleines Beispiel: ")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Vorlesungen = ["Strafrecht I", "Staatsrecht I", "BGB I"]\nVorlesungen.append("R\xf6mische Rechtsgeschichte")\n\nprint(Vorlesungen)\n')),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/8008720569",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'def fragen_filtern(liste):\n    liste_an_fragen = []\n    for satz in liste:\n        # Hierbei beschreibt satz[-1] das letzte Zeichen von String\n        if satz[-1] == "?":\n            liste_an_fragen.append(satz)\n    return liste_an_fragen\n\nliste_an_saetzen = [\n    "Hallo.",\n    "Wie geht es dir?",\n    "Auf Wiedersehen!",\n    "Welcher Tag ist heute?"\n]\nprint(fragen_filtern(liste_an_saetzen))\n'))),Object(a.b)("p",null,"Hierbei kann das ",Object(a.b)("inlineCode",{parentName:"p"},"variable.funktion()")," erstmal so interpretiert werden, dass sich die Funktion auf die Variable bezieht."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"len()"),":\nGibt die L\xe4nge (engl. length) der Liste zur\xfcck.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'print(len(["a", "b", "c", "d", "e"])) # 5\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"count()"),":\nWie oft ist ein einzelnes Element in einer Liste vorhanden.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"punktzahlen = [4, 5, 3, 4, 2, 6, 8, 4]\nprint(punktzahlen.count(4)) # 3\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sort()"),":\nOrdnet die Liste aufsteigend. Hierbei wird die Liste ver\xe4ndert.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'paar_zahlen = [3,1,2,8,5]\nprint("Ungeordnet: " + str(paar_zahlen)) # Ungeordnet: [3, 1, 2, 8, 5]\npaar_zahlen.sort()\nprint("Geordnet: " + str(paar_zahlen)) # Geordnet: [1, 2, 3, 5, 8]\n')),Object(a.b)("p",null,"Zudem gibt es noch viele weitere Methoden, allgemein lohnt es sich immer einfach mal zu googlen!"),Object(a.b)("h2",{id:"verschachtelte-listen"},"Verschachtelte Listen"),Object(a.b)("p",null,"Zudem k\xf6nnen Listen intuitiv verschachtelt werden, sprich Listen k\xf6nnen auch Elemente einer Liste sein."),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/4f3390b261",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'arten_von_juristen = [["ein", "element"], ["Noch", "Eine", "Liste"]]\n\n# Um die erste Liste zu erreichen\nprint(arten_von_juristen[0])\n# Um das Wort "ein" zu erreichen\nprint((arten_von_juristen[0])[0])\n'))),Object(a.b)("h2",{id:"list-comprehension"},"List Comprehension"),Object(a.b)("p",null,'Mit "List Comprehensions" bietet Python eine gute M\xf6glichkeit Listen einfacher zu erstellen.'),Object(a.b)("p",null,"Die einfachste Form einer List Comprehension ist folgende:\n",Object(a.b)("inlineCode",{parentName:"p"},"[funktion(x) for x in liste]"),'\nwas man lesen kann wie\n"Nimm dir jedes Element aus der Liste, wende ',Object(a.b)("inlineCode",{parentName:"p"},"funktion"),' drauf an, und dann pack es wieder zur\xfcck."'),Object(a.b)("p",null,"Hier ein Beispiel:"),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/df6baad41e",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'studenten=["tim","theodor","justus","kevin"]\n\n# Setzt Ausrufezeichen hinter jedes Element\ndef ausrufezeichen_setzen(string):\n    return string + "!"\n\nstudenten_mit_ausrufezeichen = [ausrufezeichen_setzen(name) for name in studenten]\nprint(studenten_mit_ausrufezeichen)\n'))),Object(a.b)("p",null,"Diese List Erstellung kann auch mit einer Bedingung verbunden werden"),Object(a.b)(l.a,{frame:"https://trinket.io/embed/python3/1012f1ddf5",mdxType:"CodeBlock"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'studenten=["tim","theodor","justus","kevin"]\n\n# Setzt Ausrufezeichen hinter jedes Element\ndef ausrufezeichen_setzen(string):\n    return string + "!"\n\nstudenten_mit_ausrufezeichen = [ausrufezeichen_setzen(name) for name in studenten]\nprint(studenten_mit_ausrufezeichen)\n'))))}p.isMDXComponent=!0},145:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=i.apply(null,r);l&&e.push(l)}else if("object"===a)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},146:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),u=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=u(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||a;return t?i.a.createElement(m,c({ref:n},o,{components:t})):i.a.createElement(m,c({ref:n},o))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var o=2;o<a;o++)l[o]=t[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},151:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=(t(23),t(17),t(18),t(145)),l=t.n(a),c=t(119),s=t.n(c),o={left:37,right:39};var u=function(e){var n=e.block,t=e.children,a=e.defaultValue,c=e.values,u=Object(r.useState)(a),b=u[0],p=u[1],d=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===n,className:l()("tab-item",s.a.tabItem,{"tab-item--active":b===n}),key:n,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case o.right:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case o.left:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(d,e.target,e)},onFocus:function(){return p(n)},onClick:function(){return p(n)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===b}))[0]))};var b=function(e){return i.a.createElement("div",null,e.children)};t.d(n,"a",(function(){return p}));class p extends i.a.Component{render(){return i.a.createElement(u,{defaultValue:"repl",values:[{label:"Python Interpreter",value:"repl"},{label:"Python Code",value:"py"}]},i.a.createElement(b,{value:"repl"},i.a.createElement("iframe",{src:this.props.frame,width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),i.a.createElement(b,{value:"py"},this.props.children))}}}}]);