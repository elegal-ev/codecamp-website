(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),i=t(6),a=(t(0),t(109)),c={id:"chapter-one",title:"Codingeinheit 1 - Die Grundlagen",sidebar_label:"Grundlagen"},o=[{value:"Strings",id:"strings",children:[]},{value:"print",id:"print",children:[]},{value:"Integers",id:"integers",children:[]},{value:"Arithmetische Operationen",id:"arithmetische-operationen",children:[]},{value:"Datentypen",id:"datentypen",children:[{value:"kleine praktische Einheit",id:"kleine-praktische-einheit",children:[]}]},{value:"Variablen",id:"variablen",children:[]},{value:"Division",id:"division",children:[]}],l={id:"chapter-one",title:"Codingeinheit 1 - Die Grundlagen",description:"# Comments, Syntax",source:"@site/docs/chapter-one.md",permalink:"/codecamp-website/docs/chapter-one",sidebar_label:"Grundlagen",sidebar:"docs",previous:{title:"Intro",permalink:"/codecamp-website/docs/intro"},next:{title:"Codingeinheit 2 - Funktionen und Scope",permalink:"/codecamp-website/docs/chapter-two"}},b={rightToc:o,metadata:l},h="wrapper";function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(h,Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"comments-syntax"},"Comments, Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Hallo liebe Kursteilnehmer\n# Das hier ist ein Kommentar\n# Ein Kommentar wird von dem Interpreter ignoriert\n# Der Interpreter ist das Ding, das deinen Code quasi ausf\xfchrt\n# Kommentierter Code wird mit einem \"#\" gekennzeichnet\n# Will man mehrere Zeilen kommentieren, benutzt man das \"\"\" oder '''\n\n'''\nDas hier ist ein praktisches\nBeispiel\n'''\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/6921349f7d",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"strings"},"Strings"),Object(a.b)("p",null,"Als Strings bezeichnet man Zeichenketten, hierbei ist es wichtig, dass diese entweder innerhalb von ",Object(a.b)("inlineCode",{parentName:"p"},"'")," oder ",Object(a.b)("inlineCode",{parentName:"p"},'"')," ist"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"print('Ich \"bin\" interaktiv!')\nprint(\"Ich 'bin' interaktiv!\")\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/675bec830e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Zudem kann man Strings mit einem ",Object(a.b)("inlineCode",{parentName:"p"},"+")," verbinden"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'print("Hiermit kann man mehrere " + "Strings verbinden")\n')),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/8dbb11f9c0",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"print"},"print"),Object(a.b)("p",null,"Mit der Funktion ",Object(a.b)("inlineCode",{parentName:"p"},"print()")," k\xf6nnen unteranderem Strings wiedergegeben werden."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/0cf9c578af",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"integers"},"Integers"),Object(a.b)("p",null,"Neben Strings (Zeichenketten) sind Integer (Ganzzahlen) wichtig. Fuer diese gibt es folgende Operationen"),Object(a.b)("h2",{id:"arithmetische-operationen"},"Arithmetische Operationen"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"print(5 + 2) # 7\nprint(5 - 2) # 3\nprint(14 / 2) # 7\nprint(2 ^ 3) # 8\nprint(11 % 5) # 1\n")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d492659d82",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Das ",Object(a.b)("inlineCode",{parentName:"p"},"%")," steht fuer den ganzzahligen Rest einer Division.\nHierbei ist es ganz wichtig, dass die Zahlen nicht in Anfuehrungszeichen sind, da sonst wie oben diese einfach nur hintereinandergeschrieben werden"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'print(1 + 1) # 2\nprint("1" + "1") # 11\n')),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d4dffc78fa",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Rechtsstudent R m\xf6chte nach seinem Studium gerne bei KPMG arbeiten. Er hat aber geh\xf6rt, dass er hier f\xfcr einen guten Schnitt von mindestens 8 Punkten ben\xf6tigt.\nBerechne Rs Punkteschnitt wie folgt:"),Object(a.b)("center",null,Object(a.b)("img",{src:"/static/img/punkteschnitt.svg",alt:"Punkteschnittformel"})),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/6a9e7c1ba3",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"datentypen"},"Datentypen"),Object(a.b)("p",null,"Um Datentypen zu verbinden, muss man diese vorher umwandeln. Deswegen ist folgendes ungueltig:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# Don\'t\nprint("Ich habe " + 5 + " Sch\xf6nfelder")\n\n# Do\nprint("Ich habe " + str(5) + " Sch\xf6nfelder")\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'---------------------------------------------------------------------------\n\nTypeError                                 Traceback (most recent call last)\n\n<ipython-input-35-0a7ae42497c8> in <module>\n      1 # Don\'t\n----\x3e 2 print("Ich habe " + 5 + " Sch\xf6nfelder")\n      3\n      4 # Do\n      5 print("Ich habe " + str(5) + " Sch\xf6nfelder")\n\n\nTypeError: can only concatenate str (not "int") to str\n')),Object(a.b)("center",null,Object(a.b)("img",{alt:"witzige eLegal Meme",src:"https://i.imgflip.com/3bz63n.jpg"})),Object(a.b)("h3",{id:"kleine-praktische-einheit"},"kleine praktische Einheit"),Object(a.b)("p",null,"Anwalt A ist fortschrittlich und benutzt zur Berechnung seiner Kosten Python.\nIrgendwas funktioniert hier jedoch nicht so richtig. Evtl. Kannst du ihm ja helfen."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Tipp: Nutze hierfuer die von Python gegebenen Fehlermeldungen!")),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/3db81e2e07",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"variablen"},"Variablen"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d4121f4c92",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"division"},"Division"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/d0a38d0c61",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Hierbei ist zu beachten, dass Dezimalzahlen mit einem Punkt statt einem Komma getrennt werden!")))}s.isMDXComponent=!0},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),h=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=h(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=h(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return t?i.a.createElement(m,o({ref:n},b,{components:t})):i.a.createElement(m,o({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var b=2;b<a;b++)c[b]=t[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);