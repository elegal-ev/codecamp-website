---
id: chapter-four
title: Codingeinheit 4 - Listen
sidebar_label: Listen
---

```python
from elegal_assert import *
```

# Listen

## Was ist eine Liste?

Eine Liste ist eine geordnete Sammlung von Pythonobjekten

```python
jura_starter_kit = ["Bootsschuhe","Polohemd","Montblancstift"]
```

Die Objekte in der Liste müssen jedoch nicht alle vom selben Typ sein, sondern koennen auch verschiedene Typen beinhalten.

```python
verschiedenes = ["ich bin ein string", 12345]
```

Auf die einzelnen Elemente der Liste kann ueber den Index zugegriffen werden.

```python
verschiedenes = ["ich bin ein string", 12345]
print(verschiedenes[0])
```

**Achtung!** In der IT Welt fängt man mit dem Zählen bei 0 und nicht bei 1 an.

Probier es einmal selber und wähle "JURA" aus der unten stehenden Liste aus

```python
studiengaenge = ["BWL", "INFO", "POWI", "JURA"]

studiengang = studiengaenge# wähle das richtige Objekt aus der Liste

check_for_right_list(studiengang)
```

Zuletzt koennen Listen auch mit dem `+`-Operator verbunden werden

```python
jura_starter_kit2 = ["MacBook", "Airpods"]
print(jura_starter_kit + jura_starter_kit2)
```

## Listen und Schleifen

Listen kann man auch wie folgt auf `for`-Schleifen anwenden

```python
einkaufszettel = ["BGB", "STGB", "Notizblock", "Taschentücher"]

for produkt in einkaufszettel:
    print("Du musst noch " + produkt + " kaufen!")
```

Hierbei kann man sich gesondert `range()` angucken. Dies ist zwar intern keine Liste, aber kann einfach zu einer gemacht werden, indem man hierauf die `list()`-Funktion anwendet

```python
print("Range als rangeobjekt: ", range(10))
print("Range als Listenobkekt: ", list(range(10)))
```

## Negatives Indexieren

Man stelle sich die List wie ein Regler am Herd vor. Die einzelnen Eintraege wie die Stufen der Waermezufur sind die Indizes der Listeneintraege.

```python
regler = ["low", "medium low", "medium", "medium high", "high"]

for stufe in range(len(regler)):
    print(regler[stufe])


```

Intuitiv koennte man behaupten, dass bei einer Verschiebung des Reglers in die linke Orientierung der Listeneintrag um eins erhoeht (inkrementiert) wird.

```python
regler = ["low", "medium low", "medium", "medium high", "high"]
print(regler[0])
print(regler[1])
```

Im Gegensatz dazu ist es auch moeglich, den Regler in die entgegengesetzte Richtung zu bewegen. Will man den Regler von der Ausgangsposition einen Eintrag nach links bewegen, so ist die Ausgangsposition um eins verringert (dekrementiert).

```python
regler = ["low", "medium low", "medium", "medium high", "high"]
print(regler[0])
print(regler[-1])
```

## Funktionen auf Listen

Zudem gibt es viele praktische Funktionen fuer Listen!

- `append`:
  Die Funktion `append()` fuegt der Liste am Ende ein neues Element hinzu.

```python
def fragen_filtern(liste):
    liste_an_fragen = []
    for satz in liste:
        # Hierbei beschreibt satz[-1] das letzte Zeichen von String
        if satz[-1] == "?":
            liste_an_fragen.append(satz)
    return liste_an_fragen

liste_an_saetzen = [
    "Hallo.",
    "Wie geht es dir?",
    "Auf Wiedersehen!",
    "Welcher Tag ist heute?"
]
print(fragen_filtern(liste_an_saetzen))
```

Hierbei kann das `variable.funktion()` erstmal so interpretiert werden, dass sich die Funktion auf die Variable bezieht.

- `len()`:
  Gibt die Laenge (engl. length) der Liste zurueck.

```python
print(len(["a", "b", "c", "d", "e"]))
```

- `count()`:
  Wie oft ein einzelnes Element in einer Liste vorhanden ist.

```python
punktzahlen = [4, 5, 3, 4, 2, 6, 8, 4]
print(punktzahlen.count(4))
```

- `sort()`:
  Ordnet die Liste aufsteigend. Hierbei wird die Liste veraendert.

```python
paar_zahlen = [3,1,2,8,5]
print("Ungeordnet: " + str(paar_zahlen))
paar_zahlen.sort()
print("Geordnet: " + str(paar_zahlen))
```

Zudem gibt es noch viele weitere Methoden, allgemein lohnt es sich immer in die Dokumentation zu schauen oder einfach mal zu googlen!

## Verschachtelte Listen

Zudem koennen Listen intuitiv verschachtelt werden, sprich Listen koennen auch Elemente einer Liste sein.

```python
arten_von_juristen = [["ein", "element"], ["Noch", "Eine", "Liste"]]

# Um die erste Liste zu erreichen
print(arten_von_juristen[0])
# Um das Wort "ein" zu erreichen
print((arten_von_juristen[0])[0])
```

## List Comprehension

Mit "List Comprehensions" bietet Python eine gute Möglichkeit Listen einfacher zu erstellen.

Die einfachste Form einer List Comprehension ist folgende:
`[funktion(x) for x in liste]`
was man lesen kann wie
"Nimm dir jedes Element aus der Liste, wende `funktion` drauf an, und dann pack es wieder zurueck."

Hier ein Beispiel:

```python
studenten=["tim","theodor","justus","kevin"]

# Setzt Ausrufezeichen hinter jedes Element
def ausrufezeichen_setzen(string):
    return string + "!"

studenten_mit_ausrufezeichen = [ausrufezeichen_setzen(name) for name in studenten]
print(studenten_mit_ausrufezeichen)
```

    ['tim!', 'theodor!', 'justus!', 'kevin!']

Diese List Erstellung kann auch mit einer Bedingung verbunden werden

```python
studenten=["tim","theodor","justus","kevina"]

# Setzt Ausrufezeichen hinter jedem Element
def ausrufezeichen_setzen(string):
    return string + "!"

studenten_mit_ausrufezeichen = [ausrufezeichen_setzen(name) for name in studenten if name[0] == "t"]
print(studenten_mit_ausrufezeichen)
```

    ['tim!', 'theodor!']
