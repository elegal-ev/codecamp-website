(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(1),r=n(6),a=(n(0),n(109)),c={id:"chapter-one",title:"Codingeinheit 1 - Die Grundlagen",sidebar_label:"Grundlagen"},o=[{value:"Strings",id:"strings",children:[]},{value:"print",id:"print",children:[]},{value:"Integers",id:"integers",children:[]},{value:"Arithmetische Operationen",id:"arithmetische-operationen",children:[]},{value:"Datentypen",id:"datentypen",children:[{value:"kleine praktische Einheit",id:"kleine-praktische-einheit",children:[]}]},{value:"Variablen",id:"variablen",children:[]},{value:"Division",id:"division",children:[]}],l={id:"chapter-one",title:"Codingeinheit 1 - Die Grundlagen",description:"# Comments, Syntax",source:"@site/docs/chapter-one.md",permalink:"/codecamp-website/docs/chapter-one",sidebar_label:"Grundlagen",sidebar:"docs",previous:{title:"Intro",permalink:"/codecamp-website/docs/intro"},next:{title:"Codingeinheit 2 - Funktionen und Scope",permalink:"/codecamp-website/docs/chapter-two"}},b={rightToc:o,metadata:l},h="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(h,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"comments-syntax"},"Comments, Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"# Hallo liebe Kursteilnehmer\n# Das hier ist ein Kommentar\n# Ein Kommentar wird von dem Interpreter ignoriert\n# Der Interpreter ist das Ding, das deinen Code quasi ausf\xfchrt\n# Kommentierter Code wird mit einem \"#\" gekennzeichnet\n# Will man mehrere Zeilen kommentieren, benutzt man das \"\"\" oder '''\n\n'''\nDas hier ist ein praktisches\nBeispiel\n'''\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/6921349f7d",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"strings"},"Strings"),Object(a.b)("p",null,"Als Strings bezeichnet man Zeichenketten, hierbei ist es wichtig, dass diese entweder innerhalb von ",Object(a.b)("inlineCode",{parentName:"p"},"'")," oder ",Object(a.b)("inlineCode",{parentName:"p"},'"')," ist"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"print('Ich \"bin\" interaktiv!')\nprint(\"Ich 'bin' interaktiv!\")\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/675bec830e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Zudem kann man Strings mit einem ",Object(a.b)("inlineCode",{parentName:"p"},"+")," verbinden"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'print("Hiermit kann man mehrere " + "Strings verbinden")\n')),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/8dbb11f9c0",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"print"},"print"),Object(a.b)("p",null,"Mit der Funktion ",Object(a.b)("inlineCode",{parentName:"p"},"print()")," k\xf6nnen unteranderem Strings wiedergegeben werden."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/0cf9c578af",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"integers"},"Integers"),Object(a.b)("p",null,"Neben Strings (Zeichenketten) sind Integer (Ganzzahlen) wichtig. F\xfcr diese gibt es folgende Operationen"),Object(a.b)("h2",{id:"arithmetische-operationen"},"Arithmetische Operationen"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"print(5 + 2) # 7\nprint(5 - 2) # 3\nprint(14 / 2) # 7\nprint(2 ^ 3) # 8\nprint(11 % 5) # 1\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d492659d82",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Das ",Object(a.b)("inlineCode",{parentName:"p"},"%")," steht f\xfcr den ganzzahligen Rest einer Division.\nHierbei ist es ganz wichtig, dass die Zahlen nicht in Anf\xfchrungszeichen sind, da sonst wie oben diese einfach nur hintereinandergeschrieben werden"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'print(1 + 1) # 2\nprint("1" + "1") # 11\n')),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d4dffc78fa",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Rechtsstudent R m\xf6chte nach seinem Studium gerne bei KPMG arbeiten. Er hat aber geh\xf6rt, dass er hier f\xfcr einen guten Schnitt von mindestens 8 Punkten ben\xf6tigt.\nBerechne Rs Punkteschnitt wie folgt:"),Object(a.b)("center",null,Object(a.b)("img",{src:"/static/img/punkteschnitt.svg",alt:"Punkteschnittformel"})),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/6a9e7c1ba3",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"datentypen"},"Datentypen"),Object(a.b)("p",null,"Um Datentypen zu verbinden, muss man diese vorher umwandeln. Deswegen ist folgendes ung\xfcltig:"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/0834f18005",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("center",null,Object(a.b)("img",{alt:"witzige eLegal Meme",src:"https://i.imgflip.com/3bz63n.jpg"})),Object(a.b)("h3",{id:"kleine-praktische-einheit"},"kleine praktische Einheit"),Object(a.b)("p",null,"Anwalt A ist fortschrittlich und benutzt zur Berechnung seiner Kosten Python.\nIrgendwas funktioniert hier jedoch nicht so richtig. Evtl. Kannst du ihm ja helfen."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Tipp: Nutze hierf\xfcr die von Python gegebenen Fehlermeldungen!")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/3db81e2e07",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"variablen"},"Variablen"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d4121f4c92",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"division"},"Division"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d0a38d0c61",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Hierbei ist zu beachten, dass Dezimalzahlen mit einem Punkt statt einem Komma getrennt werden!")))}s.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),h=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=h(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=h(n),d=i,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return n?r.a.createElement(m,o({ref:t},b,{components:n})):r.a.createElement(m,o({ref:t},b))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,c[1]=o;for(var b=2;b<a;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);