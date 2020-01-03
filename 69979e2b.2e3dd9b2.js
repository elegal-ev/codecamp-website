(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(1),r=(t(0),t(143));const a={id:"chapter-five",title:"Codingeinheit 5 - Files, Strings und Dictionaries",sidebar_label:"Files, Strings und Dictionaries"},c=[{value:"Multiplikation",id:"multiplikation",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Negatives Indizieren",id:"negatives-indizieren",children:[]},{value:"Slicing",id:"slicing",children:[]},{value:'"In" Operator',id:"in-operator",children:[]},{value:"Escaping",id:"escaping",children:[]},{value:"String Methoden (Basics)",id:"string-methoden-basics",children:[]},{value:"String Formatierung",id:"string-formatierung",children:[]},{value:"Textdatei lesen",id:"textdatei-lesen",children:[]},{value:"Text schreiben",id:"text-schreiben",children:[]},{value:"<code>with</code>-Operator",id:"with-operator",children:[]}],l={id:"chapter-five",title:"Codingeinheit 5 - Files, Strings und Dictionaries",description:"# Strings",source:"@site/docs/chapter-five.md",permalink:"/codecamp-website/docs/chapter-five",sidebar_label:"Files, Strings und Dictionaries",sidebar:"docs",previous:{title:"Codingeinheit 4 - Listen",permalink:"/codecamp-website/docs/chapter-four"},next:{title:"Codingeinheit 6 - Klassen und Module",permalink:"/codecamp-website/docs/chapter-six"}},b={rightToc:c,metadata:l},o="wrapper";function d({components:e,...n}){return Object(r.b)(o,Object(i.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"strings"},"Strings"),Object(r.b)("h2",{id:"multiplikation"},"Multiplikation"),Object(r.b)("p",null,"Neben der Verkettung von Strings ist auch die Multiplikation m\xf6glich, hierbei wird der String einfach ",Object(r.b)("inlineCode",{parentName:"p"},"n"),"-mal wiederholt."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/d24bc2c949",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"indexing"},"Indexing"),Object(r.b)("p",null,"Wie bereits bei Listen kann man auch bei Buchstaben und Teilstrings per Index extrahieren."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'str = "eLegal Goettingen"\nprint(str[1]) # L\n')),Object(r.b)("h2",{id:"negatives-indizieren"},"Negatives Indizieren"),Object(r.b)("p",null,"Analog ist auch negative Indizierung anwendbar."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'str = "eLegal Goettingen"\nprint(str[-1]) # n\n')),Object(r.b)("h2",{id:"slicing"},"Slicing"),Object(r.b)("p",null,"Wie bei Listen ist der Doppelpunkt-Operator ",Object(r.b)("inlineCode",{parentName:"p"},":")," auch mit Strings nutzbar."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/2f730f74fe",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"in-operator"},'"In" Operator'),Object(r.b)("p",null,"Mit dem ",Object(r.b)("inlineCode",{parentName:"p"},"in")," Keyword l\xe4sst sich feststellen, ob eine bestimmte Zeichenfolge in einem String enthalten ist"),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/b4267dc7a1",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"escaping"},"Escaping"),Object(r.b)("p",null,'In Python ist "',"\\",'" ein besonderer Char. Er wird auch "escape character" genannt.'),Object(r.b)("p",null,'Die wichtigsten "escape characters" sind:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"\\n"')," = Newline"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"\\t"')," = Tab"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"\\\\"')," = Backslash"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"\\\'"')," = Einzelne Anf\xfchrungszeichen")),Object(r.b)("p",null,"Der Folgende String ist nicht sehr \xfcbersichtlich, wenn man ihn ausgibt. F\xfcge doch am Satzende eine neue Zeile an."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/cdeede7618",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"string-methoden-basics"},"String Methoden (Basics)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upper()")," konvertiert den String zu GROSSBUCHSTABEN"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lower()")," konvertiert den String zu Kleinbuchstaben"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"count(char)")," Z\xe4hlt die Buchstaben in einem String"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"len()")," Gibt die Menge an Buchstaben zur\xfcck")),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/121fc6d856",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"string-formatierung"},"String Formatierung"),Object(r.b)("p",null,"Mit der ",Object(r.b)("inlineCode",{parentName:"p"},"format")," Funktion kann man ",Object(r.b)("em",{parentName:"p"},"Werte"),", die eingesetzt werden sollen, templaten (vorgeben)."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/a1a8cb17b5",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h1",{id:"dictionaries"},"Dictionaries"),Object(r.b)("p",null,"Ein ",Object(r.b)("inlineCode",{parentName:"p"},"dict")," ist eine ",Object(r.b)("strong",{parentName:"p"},"Key-Value"),"-Datenstruktur mit der Syntax ",Object(r.b)("inlineCode",{parentName:"p"},"{bezeichner : wert_hinter_dem_bezeichner}"),".\nAls Beispiel:"),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/4157184884",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("p",null,"Nat\xfcrlich kann ein Dictionary auch mehrere Key-Value-Paare haben."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"")),Object(r.b)("p",null,"Hierbei k\xf6nnen unter anderem auch Listen als ",Object(r.b)("strong",{parentName:"p"},"Value")," in einem Dictionary verwendet werden. Value eines Dictionaries kann auch erneut ein Dictionary sein."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/c6e483f61f",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("p",null,"Eine Besonderheit ist jedoch, dass diese Strukturen nicht als ",Object(r.b)("strong",{parentName:"p"},"Key")," verwendet werden k\xf6nnen.\nF\xfchre zum testen folgenden Code aus:"),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/fe5e541c01",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("p",null,"Ein Dictionary kann auch ohne Inhalt definiert werden."),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/531e776cd8",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h1",{id:"files"},"Files"),Object(r.b)("p",null,"Wir lernen in diesem Abschnitt die wesentlichen Interaktionen mit Textdateien kennen."),Object(r.b)("h2",{id:"textdatei-lesen"},"Textdatei lesen"),Object(r.b)("iframe",{src:"https://trinket.io/embed/python3/c34f8d4e28",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(r.b)("h2",{id:"text-schreiben"},"Text schreiben"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/bin/env python3\n\ndef main():\n    f = open('textfile.txt', 'w', encoding='utf-8') # Wichtig! Wir benutzen hier den Schreibmodus 'w'.\n    s = 'eLegal Goettingen ist cool!\\n'\n    f.write(s)\n    f.close()\n\nif __name__ == '__main__':\n    main()\n")),Object(r.b)("h2",{id:"with-operator"},Object(r.b)("inlineCode",{parentName:"h2"},"with"),"-Operator"),Object(r.b)("p",null,"Mit dem ",Object(r.b)("inlineCode",{parentName:"p"},"with"),"-Operator lassen sich sehr einfach und \xfcbersichtlich Variablen f\xfcr einen bestimmten Geltungsbereich schaffen."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/bin/env python3\n\ndef main():\n    with open('textfile.txt', 'w', encoding='utf-8') as f:\n        s = f.read()\n        print(s) # Textinhalt der Datei\n\nif __name__ == '__main__':\n    main()\n")))}d.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),d=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=d(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=d(t),h=i,u=s["".concat(c,".").concat(h)]||s[h]||p[h]||a;return t?r.a.createElement(u,l({ref:n},o,{components:t})):r.a.createElement(u,l({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l[h]="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);