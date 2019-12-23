(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},h=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=b(t),d=r,p=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return t?i.a.createElement(p,o({ref:n},s,{components:t})):i.a.createElement(p,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"default",(function(){return h}));var r=t(1),i=t(6),a=(t(0),t(109)),l={id:"chapter-tree",title:"Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen",sidebar_label:"Wahrheitswerte, Kontrollstrukturen und Schleifen"},o=[{value:"Weitere logische Operatoren",id:"weitere-logische-operatoren",children:[]},{value:"while loop",id:"while-loop",children:[]},{value:"Verschachtelte Schleifen",id:"verschachtelte-schleifen",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}],c={id:"chapter-tree",title:"Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen",description:"# Booleans",source:"@site/docs/chapter-tree.md",permalink:"/codecamp-website/docs/chapter-tree",sidebar_label:"Wahrheitswerte, Kontrollstrukturen und Schleifen",sidebar:"docs",previous:{title:"Codingeinheit 2 - Funktionen und Scope",permalink:"/codecamp-website/docs/chapter-two"},next:{title:"Codingeinheit 4 - Listen",permalink:"/codecamp-website/docs/chapter-four"}},s={rightToc:o,metadata:c},b="wrapper";function h(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"booleans"},"Booleans"),Object(a.b)("p",null,"Booleans sind Wahrheitswerte. Diese fassen einen Gesamtausdruck in Wahr oder Falsch zusammen."),Object(a.b)("p",null,"(Bin\xe4r ",Object(a.b)("inlineCode",{parentName:"p"},"0"),"/",Object(a.b)("inlineCode",{parentName:"p"},"1; logisch"),"w",Object(a.b)("inlineCode",{parentName:"p"},"/"),"f",Object(a.b)("inlineCode",{parentName:"p"},"; Python"),"True",Object(a.b)("inlineCode",{parentName:"p"},"/"),"False`)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'x = True\n# Wir weisen der Variable x eine wahre Aussage zu.\n"""Eine Aussage ist ein aus W\xf6rtern\nund/oder mathematischen Zeichen\naufgebauter Ausdruck,\nvon dem es m\xf6glich und sinnvoll ist zu sagen,\ndass dieser Ausdruck wahr oder falsch ist."""\n\nprint(x)\n\nprint(5 < 3)\nprint(5 > 3)\nprint(3 ==  3)\nprint(3 >= 3)\nprint(not False)\nprint(5 != 4) # hierbei bedeutet das != "nicht gleich"\nprint(not not not True)\nprint(54.4 <= 144.2)\nprint(not not x)\nprint(not x)\n')),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/ab8cc8cd9b",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Hiebei ist der Unterschied zwischen ",Object(a.b)("inlineCode",{parentName:"p"},"=")," und ",Object(a.b)("inlineCode",{parentName:"p"},"==")," relevant."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"x = 4")," ist die Zuweisung. (Der Variable ",Object(a.b)("inlineCode",{parentName:"li"},"x")," wird den Wert ",Object(a.b)("inlineCode",{parentName:"li"},"4")," zugewiesen)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"x == 4")," ist der logische Vergleich (Der Wert der Variable ",Object(a.b)("inlineCode",{parentName:"li"},"x")," wird auf Gleichheit mit ",Object(a.b)("inlineCode",{parentName:"li"},"4")," \xfcberpr\xfcft)")),Object(a.b)("p",null,"Vertiefe dein Wissen, indem du folgenden Code ausf\xfchrst:"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/eae0dedab7",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h1",{id:"kontrollfl\xfcsse"},"Kontrollfl\xfcsse"),Object(a.b)("p",null,"Man stelle sich vor, man habe ein Pr\xfcfschema abzuarbeiten. - Um zur Erf\xfcllung eines strafrechtlichen Tatbestands zu kommen, m\xfcssen alle Voraussetzungen ohne Ausnahmen erf\xfcllt sein.\nD.h., die Pr\xfcfungspunkte haben einen bestimmten Wahrheitswert inne.\nMithile von Wahrheitswerten, werden wir in der Programmiersprache Python bestimmte Programmabfolgen kontrollieren k\xf6nnen.\nDies nennt man in der Informatik ",Object(a.b)("strong",{parentName:"p"},"Kontrollfl\xfcsse")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'x = 2\n\nif x > 1:\n    print("X ist gr\xf6\xdfer als 2")\nelse:\n    print("X ist nicht gr\xf6\xdfer als 2")\n')),Object(a.b)("p",null,"Konkret bedeutet es also: wenn X vorliegt f\xfchre Y aus."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'gegenstand = "Pokal"\nsache = True\nfremd = True\nbesch\xe4digt = False\nzerst\xf6rt = True\nobjektiver_tatbestand_303_I_stgb = False\n\nif sache == True:\n    if fremd == True:\n        if besch\xe4digt == True:\n            objektiver_tatbestand_303_I_stgb = True\n        elif zerst\xf6rt == True:\n            objektiver_tatbestand_303_I_stgb = True\n\nif objektiver_tatbestand_303_I_stgb == True:\n    print("Der objektive Tatbestand von \xa7 303 I Stgb ist im Falle vom " + gegenstand + " erf\xfcllt")\n')),Object(a.b)("p",null,'Eine Besonderheit von einigen Sprachen, wie auch Python, ist, dass man die obige Logik (z.b. "',Object(a.b)("inlineCode",{parentName:"p"},"if fremd == True"),'") auch versimplifiziert Darstellen kann. aus "',Object(a.b)("inlineCode",{parentName:"p"},"if fremd == True"),'" wird "',Object(a.b)("inlineCode",{parentName:"p"},"if fremd"),'"\nWendet man dieses Wissen an, so ergibt sich folgendes Bild'),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/7185efd25c",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("h2",{id:"weitere-logische-operatoren"},"Weitere logische Operatoren"),Object(a.b)("p",null,"Manchmal ist es n\xf6tig oder einfach lesbarer mehrere Bedingungen zusammenzufassen. Hierf\xfcr gibt es verschiedene M\xf6glichkeiten:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"or"),": Das logische oder, sprich wenn eins oder beide erf\xfcllt sind (kein Entweder-Oder wie in der deutschen Sprache)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"if besch\xe4digt or zerst\xf6rt:\n    objektiver_tatbestand_303_I_stgb = True\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"and"),": Das logische und")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"if sache and fremd and (besch\xe4digt or zerst\xf6rt):\n    objektiver_tatbestand_303_I_stgb = True\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"not"),": Die logische Negierung")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"if not (besch\xe4digt and zerst\xf6rt):\n    objektiver_tatbestand_303_I_stgb = False\n")),Object(a.b)("h1",{id:"loops"},"Loops"),Object(a.b)("p",null,"Loops wendet man an, wenn man Dinge mehrfach ausf\xfchren m\xf6chte."),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/4290e8d215",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/ce3f94eec3",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("p",null,"Ein Ausschnitt ",Object(a.b)("inlineCode",{parentName:"p"},"help(range)"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Return an object that produces a seq\xfcnce of integers from start (inclusive)\nto stop (exclusive) by step. range(i, j) produces i, i+1, i+2, ..., j-1.\nstart defaults to 0, and stop is omitted! range(4) produces 0, 1, 2, 3.\nThese are exactly the valid indices for a list of 4 elements.\nWhen step is given, it specifies the increment (or decrement).")),Object(a.b)("h2",{id:"while-loop"},"while loop"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import time\nn = 0\n# erh\xf6he n solange, bis n >= 50 ist.\ncondition = n < 50\n\nwhile condition:\n    print(n)\n    n += 5\n\n# T hat O beleidigt. Er hat Freiheitsstrafe von einem Jahr erhalten\nfreiheitsstrafe_aktiv = True\ntag = 0\n\nentlassung = False\n\nwhile freiheitsstrafe_aktiv:\n    tag += 1 # T sitzt nun einen Tag ab\n    if tag >= 365 or entlassung():\n        break # bricht den loop ab\n    if tag < 365:\n        continue # springt direkt zur Anfangskondition\n\nprint('Entlassen')\n")),Object(a.b)("h2",{id:"verschachtelte-schleifen"},"Verschachtelte Schleifen"),Object(a.b)("p",null,"Nat\xfcrlich k\xf6nnen Schleifen auch ineinandergeschrieben werden."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'for z\xe4hler1 in range(2):\n    for z\xe4hler2 in range(3):\n        print(z\xe4hler1 + " : " + z\xe4hler2)\n')),Object(a.b)("p",null,"Diese geht pro Durchlauf der \xe4usseren Schleife komplett alle Durchl\xe4ufe der inneren Schleife durch. Es lohnt sich es einfach mal auszuprobieren!"),Object(a.b)("h2",{id:"aufgaben"},"Aufgaben"),Object(a.b)("p",null,"Ermittle den Wahrheitswert folgender Aussagen:"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/00993a83d5",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}))}h.isMDXComponent=!0}}]);