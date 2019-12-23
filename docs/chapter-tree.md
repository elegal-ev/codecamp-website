---
id: chapter-tree
title: Codingeinheit 3 - Wahrheitswerte, Kontrollstrukturen und Schleifen
sidebar_label: Wahrheitswerte, Kontrollstrukturen und Schleifen
---

# Booleans

Booleans sind Wahrheitswerte. Diese fassen einen Gesamtausdruck in Wahr oder Falsch zusammen.

(Binär `0`/`1; logisch`w`/`f`; Python`True`/`False`)

```python
x = True
# Wir weisen der Variable x eine wahre Aussage zu.
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
print(not not x)
print(not x)

# Nun dein eigenes Beispiel!
print()
```

Hiebei ist der Unterschied zwischen `=` und `==` relevant.

- `x = 4` ist die Zuweisung. (Der Variable `x` wird den Wert `4` zugewiesen)
- `x == 4` ist der logische Vergleich (Der Wert der Variable `x` wird auf Gleichheit mit `4` überprüft)

Vertiefe dein Wissen, indem du folgenden Code ausführst:

```python
print("1", True and True)
print("2", False and True)
print("3", 1 == 1 and 2 == 1)
print("4", "test" == "test")
print("5", 1 == 1 or 2 != 1)
print("6", True and 1 == 1)
print("7", False and 0 != 0)
print("8", True or 1 == 1)
print("9", "test" == "testing")
print("10", 1 != 0 and 2 == 1)
print("11", "test" != "testing")
print("12", "test" == 1)
print("13", not (True and False))
print("14", not (1 == 1 and 0 != 1))
print("15", not (10 == 1 or 1000 == 1000))
print("16", not (1 != 10 or 3 == 4))
print("17", not ("testing" == "testing" and "Zed" == "Cool Guy"))
print("18", 1 == 1 and not ("testing" == 1 or 1 == 0))
print("19", "chunky" == "bacon" and not (3 == 4 or 3 == 3))
print("20", 3 == 3 and not ("testing" == "testing" or "Python" == "Fun"))
```

# Kontrollflüsse

Man stelle sich vor, man habe ein Prüfschema abzuarbeiten. - Um zur Erfüllung eines strafrechtlichen Tatbestands zu kommen, müssen alle Voraussetzungen ohne Ausnahmen erfüllt sein.
D.h., die Prüfungspunkte haben einen bestimmten Wahrheitswert inne.
Mithile von Wahrheitswerten, werden wir in der Programmiersprache Python bestimmte Programmabfolgen kontrollieren können.
Dies nennt man in der Informatik **Kontrollflüsse**

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

Eine Besonderheit von einigen Sprachen, wie auch Python, ist, dass man die obige Logik (z.b. "`if fremd == True`") auch versimplifiziert Darstellen kann. aus "`if fremd == True`" wird "`if fremd`"
Wendet man dieses Wissen an, so ergibt sich folgendes Bild

```python
gegenstand = "Pokal"
sache = True
fremd = True
beschädigt = False
zerstört = True
objektiver_tatbestand_303_I_stgb = False

if sache:
    if fremd:
        if beschädigt:
            objektiver_tatbestand_303_I_stgb = True
        elif zerstört:
            objektiver_tatbestand_303_I_stgb = True

if objektiver_tatbestand_303_I_stgb:
    print("Der objektive Tatbestand von § 303 I Stgb ist im Falle vom " + gegenstand + " erfüllt")
```

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

# Loops

Loops wendet man an, wenn man Dinge mehrfach ausführen möchte.

```python
gerichtsverfahren = 10
for x in range(gerichtsverfahren): # range() beginnt ab 0 an zu zählen und stoppt eine Ganzzahl vor dem Übergeben Wert.
    print("Im Namen des Volkes ergeht folgendes Urteil")
```

```python
help(range)
# Zeigt die Dokumentation zu einer bestimmten Funktion oder Bibliothek an.
```

Ein Ausschnitt `help(range)`:

> Return an object that produces a seqünce of integers from start (inclusive)
> to stop (exclusive) by step. range(i, j) produces i, i+1, i+2, ..., j-1.
> start defaults to 0, and stop is omitted! range(4) produces 0, 1, 2, 3.
> These are exactly the valid indices for a list of 4 elements.
> When step is given, it specifies the increment (or decrement).

## while loop

```python
import time
n = 0
# erhöhe n solange, bis n >= 50 ist.
condition = n < 50

while condition:
    print(n)
    n += 5

# T hat O beleidigt. Er hat Freiheitsstrafe von einem Jahr erhalten
freiheitsstrafe_aktiv = True
tag = 0

entlassung = False

while freiheitsstrafe_aktiv:
    tag += 1 # T sitzt nun einen Tag ab
    if tag >= 365 or entlassung():
        break # bricht den loop ab
    if tag < 365:
        continue # springt direkt zur Anfangskondition

print('Entlassen')
```

## Verschachtelte Schleifen

Natürlich können Schleifen auch ineinandergeschrieben werden.

```python
for zähler1 in range(2):
    for zähler2 in range(3):
        print(zähler1 + " : " + zähler2)
```

Diese geht pro Durchlauf der äusseren Schleife komplett alle Durchläufe der inneren Schleife durch. Es lohnt sich es einfach mal auszuprobieren!

## Aufgaben

Ermittle den Wahrheitswert folgender Aussagen:

```python
from elegal_assert import *

test = [
    2 ** 3 == 8,
    True or False and True,
    (False or False) and True,
    not False or False,
]

test_bools(test)
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-2-ee4d09c7ee04> in <module>
          8 ]
          9
    ---> 10 test_bools(test)


    NameError: name 'test_bools' is not defined
