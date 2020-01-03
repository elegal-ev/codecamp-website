(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"default",(function(){return d}));var i=t(1),r=t(9),a=(t(0),t(143)),l={id:"chapter-four",title:"Codingeinheit 4 - Listen",sidebar_label:"Listen"},c=[{value:"Was ist eine Liste?",id:"was-ist-eine-liste",children:[]},{value:"Listen und Schleifen",id:"listen-und-schleifen",children:[]},{value:"Negatives Indexieren",id:"negatives-indexieren",children:[]},{value:"Funktionen auf Listen",id:"funktionen-auf-listen",children:[]},{value:"Verschachtelte Listen",id:"verschachtelte-listen",children:[]},{value:"List Comprehension",id:"list-comprehension",children:[]}],s={id:"chapter-four",title:"Codingeinheit 4 - Listen",description:"## Was ist eine Liste?",source:"@site/docs/chapter-four.md",permalink:"/codecamp-website/docs/chapter-four",sidebar_label:"Listen",sidebar:"docs",previous:{title:"Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen",permalink:"/codecamp-website/docs/chapter-tree"},next:{title:"Codingeinheit 5 - Files, Strings und Dictionaries",permalink:"/codecamp-website/docs/chapter-five"}},o={rightToc:c,metadata:s},b="wrapper";function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(b,Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"was-ist-eine-liste"},"Was ist eine Liste?"),Object(a.b)("p",null,"Eine Liste ist eine geordnete Sammlung von Pythonobjekten"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'jura_starter_kit = ["Bootsschuhe","Polohemd","Montblancstift"]\n')),Object(a.b)("p",null,"Die Objekte in der Liste m\xfcssen jedoch nicht alle vom selben Typ sein, sondern k\xf6nnen auch verschiedene Typen beinhalten."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'verschiedenes = ["ich bin ein string", 12345]\n')),Object(a.b)("p",null,"Auf die einzelnen Elemente der Liste kann \xfcber den Index zugegriffen werden."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'verschiedenes = ["ich bin ein string", 12345]\nprint(verschiedenes[0])\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Achtung!")," In der IT Welt f\xe4ngt man mit dem Z\xe4hlen bei 0 und nicht bei 1 an."),Object(a.b)("p",null,'Probier es einmal selber und w\xe4hle "JURA" aus der unten stehenden Liste aus'),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/f2dab5db55",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Zuletzt k\xf6nnen Listen auch mit dem ",Object(a.b)("inlineCode",{parentName:"p"},"+"),"-Operator verbunden werden. "),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/24d7dcec12",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"listen-und-schleifen"},"Listen und Schleifen"),Object(a.b)("p",null,"Listen kann man auch wie folgt auf ",Object(a.b)("inlineCode",{parentName:"p"},"for"),"-Schleifen anwenden"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/c16796572d",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Hierbei kann man sich gesondert ",Object(a.b)("inlineCode",{parentName:"p"},"range()")," angucken. Dies ist zwar intern keine Liste, aber kann einfach zu einer gemacht werden, indem man hierauf die ",Object(a.b)("inlineCode",{parentName:"p"},"list()"),"-Funktion anwendet"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/de97d2906e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"negatives-indexieren"},"Negatives Indexieren"),Object(a.b)("p",null,"Man stelle sich die List wie einen Regler am Herd vor. Die einzelnen Stufen der W\xe4rmezufur sind die Indizes der Listeneintr\xe4ge."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/44cc806c55",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Intuitiv k\xf6nnte man behaupten, dass bei einer Verschiebung des Reglers in die linke Orientierung der Listeneintrag um eins erh\xf6ht (inkrementiert) wird."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/f9326e0c33",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Im Gegensatz dazu ist es auch m\xf6glich, den Regler in die entgegengesetzte Richtung zu bewegen. Will man den Regler von der Ausgangsposition also um einen Eintrag nach rechts bewegen, so ist die Ausgangsposition um eins verringert (dekrementiert)."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/e95db5de52",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"funktionen-auf-listen"},"Funktionen auf Listen"),Object(a.b)("p",null,"Zudem gibt es viele praktische Funktionen f\xfcr Listen!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"append"),":\nDie Funktion ",Object(a.b)("inlineCode",{parentName:"li"},"append()")," f\xfcgt der Liste am Ende ein neues Element hinzu.")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/8008720569",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Hierbei kann das ",Object(a.b)("inlineCode",{parentName:"p"},"variable.funktion()")," erstmal so interpretiert werden, dass sich die Funktion auf die Variable bezieht."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"len()"),":\nGibt die L\xe4nge (engl. length) der Liste zur\xfcck.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'print(len(["a", "b", "c", "d", "e"])) # 5\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"count()"),":\nWie oft ist ein einzelnes Element in einer Liste vorhanden.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"punktzahlen = [4, 5, 3, 4, 2, 6, 8, 4]\nprint(punktzahlen.count(4)) # 3\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sort()"),":\nOrdnet die Liste aufsteigend. Hierbei wird die Liste ver\xe4ndert.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'paar_zahlen = [3,1,2,8,5]\nprint("Ungeordnet: " + str(paar_zahlen)) # Ungeordnet: [3, 1, 2, 8, 5]\npaar_zahlen.sort()\nprint("Geordnet: " + str(paar_zahlen)) # Geordnet: [1, 2, 3, 5, 8]\n')),Object(a.b)("p",null,"Zudem gibt es noch viele weitere Methoden, allgemein lohnt es sich immer in die Dokumentation zu schauen oder einfach mal zu googlen!"),Object(a.b)("h2",{id:"verschachtelte-listen"},"Verschachtelte Listen"),Object(a.b)("p",null,"Zudem k\xf6nnen Listen intuitiv verschachtelt werden, sprich Listen k\xf6nnen auch Elemente einer Liste sein."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/4f3390b261",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"list-comprehension"},"List Comprehension"),Object(a.b)("p",null,'Mit "List Comprehensions" bietet Python eine gute M\xf6glichkeit Listen einfacher zu erstellen.'),Object(a.b)("p",null,"Die einfachste Form einer List Comprehension ist folgende:\n",Object(a.b)("inlineCode",{parentName:"p"},"[funktion(x) for x in liste]"),'\nwas man lesen kann wie\n"Nimm dir jedes Element aus der Liste, wende ',Object(a.b)("inlineCode",{parentName:"p"},"funktion"),' drauf an, und dann pack es wieder zur\xfcck."'),Object(a.b)("p",null,"Hier ein Beispiel:"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/df6baad41e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Diese List Erstellung kann auch mit einer Bedingung verbunden werden"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/2b1df6663b",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))}d.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=b(t),u=i,p=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return t?r.a.createElement(p,c({ref:n},o,{components:t})):r.a.createElement(p,c({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);