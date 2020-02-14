---
id: chapter-tree
title: Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen
sidebar_label: Wahrheitswerte, Kontrollstrukturen und Schleifen
---

# Booleans

Booleans sind Wahrheitswerte. Diese fassen einen Gesamtausdruck in Wahr (true) oder Falsch (false) zusammen. 

(Binär `0`/`1; logisch`w`/`f`; Python`True`/`False`)

```python

"""Eine Aussage ist ein aus Wörtern
und/oder mathematischen Zeichen
aufgebauter Ausdruck,
von dem es möglich und sinnvoll ist zu sagen,
dass dieser Ausdruck wahr oder falsch ist."""

print(x)

print(5 < 3)
print(5 > 3)
print(3 ==  3)
print(3 >= 3)
print(not False)
print(5 != 4) # hierbei bedeutet das != "nicht gleich"
print(not not not True)
print(54.4 <= 144.2) 

x = True
# Wir weisen der Variable x eine wahre Aussage zu.

print(not not x)
print(not x)
```

<iframe src="https://trinket.io/embed/python3/ab8cc8cd9b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hiebei ist der Unterschied zwischen `=` und `==` relevant.

- `x = 4` ist ein Zuweisungsoperator. (Der Variable `x` wird den Wert `4` zugewiesen)
- `x == 4` ist der logische Vergleich (Der Wert der Variable `x` wird auf Gleichheit mit `4` überprüft)

Vertiefe dein Wissen, indem du folgenden Code ausführst:

<iframe src="https://trinket.io/embed/python3/eae0dedab7" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


# Kontrollflüsse

Man stelle sich vor, man habe ein Prüfschema abzuarbeiten. Um zur Erfüllung eines strafrechtlichen Tatbestands zu kommen, müssen alle Voraussetzungen ohne Ausnahmen erfüllt sein.
D.h., die Prüfungspunkte haben einen bestimmten Wahrheitswert inne.
Mithilfe von Wahrheitswerten werden wir in der Programmiersprache Python bestimmte Programmabfolgen kontrollieren können.
Diese nennt man in der Informatik **Kontrollflüsse**

```python
x = 2

if x > 1:
    print("X ist größer als 2")
else:
    print("X ist nicht größer als 2")
```

Konkret bedeutet es also: wenn X vorliegt führe Y aus.

```python
gegenstand = "Pokal"
sache = True
fremd = True
beschädigt = False
zerstört = True
objektiver_tatbestand_303_I_stgb = False

if sache == True:
    if fremd == True:
        if beschädigt == True:
            objektiver_tatbestand_303_I_stgb = True
        elif zerstört == True:
            objektiver_tatbestand_303_I_stgb = True

if objektiver_tatbestand_303_I_stgb == True:
    print("Der objektive Tatbestand von § 303 I Stgb ist im Falle vom " + gegenstand + " erfüllt")
```

Hinweis: 
Der Operator elif(andernfalls) steht für 'else if' und verweist auf die Alternative der if-Bedingung.  
Eine Besonderheit von einigen Programmiersprachen, wie auch Python, ist, dass man die obige Logik (z.b. "`if fremd == True`") auch versimplifiziert Darstellen kann. Aus "`if fremd == True`" wird "`if fremd`"
Wendet man dieses Wissen an, so ergibt sich folgendes Bild:

<iframe src="https://trinket.io/embed/python3/7185efd25c" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Weitere logische Operatoren

Manchmal ist es nötig oder einfach lesbarer mehrere Bedingungen zusammenzufassen. Hierfür gibt es verschiedene Möglichkeiten:

- `or`: Das logische oder, sprich wenn eins oder beide erfüllt sind (kein Entweder-Oder wie in der deutschen Sprache)

```python
if beschädigt or zerstört:
    objektiver_tatbestand_303_I_stgb = True
```

- `and`: Das logische und

```python
if sache and fremd and (beschädigt or zerstört):
    objektiver_tatbestand_303_I_stgb = True
```

- `not`: Die logische Negierung

```python
if not (beschädigt and zerstört):
    objektiver_tatbestand_303_I_stgb = False
```
<iframe src="https://trinket.io/embed/python3/eae0dedab7" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

# Loops

for-Loops
```python
Loops (Schleifen) wendet man an, wenn man Dinge mehrfach ausführen möchte. Als erstes lernt ihr nun die for-Schleife kennen. Diese wird benutzt, wenn der Code wiederholt ausgeführt werden soll - die Anzahl der Wiederholungen muss dabei vorgegeben sein.    
```

<iframe src="https://trinket.io/embed/python3/9378a02c9e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


range - Die Wiederholungen können auch mit Hilfe der range-Funktion ausgeführt werden. Wichtig ist dabei, dass man in der Informatik bei 0 anfängt zu zählen und nicht bei 1. 
Hier ein kleines Beispiel: 

<iframe src="https://trinket.io/embed/python3/4290e8d215" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


## while loop

```python
Im Gegensatz zu den for-loops wiederholen while-loops den Code so lange,bis die gegebene Bedingung nicht mehr wahr ist.  
```
Zur Veranschaulichung ein kleines Beispiel:

```python
import time
n = 0
# erhöhe n solange, bis n >= 50 ist.
condition = n < 50

while condition:
    print(n)
    n += 5
```

<iframe src="https://trinket.io/embed/python3/8add3e4bd4" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


## Verschachtelte Schleifen

Natürlich können Schleifen auch ineinander geschrieben werden.

```python
for zähler1 in range(2):
    for zähler2 in range(3):
        print(zähler1 + " : " + zähler2)
```

Diese geht pro Durchlauf der äusseren Schleife komplett alle Durchläufe der inneren Schleife durch. Es lohnt sich es einfach mal auszuprobieren!

## Aufgaben

Ermittle den Wahrheitswert folgender Aussagen:

<iframe src="https://trinket.io/embed/python3/00993a83d5" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
