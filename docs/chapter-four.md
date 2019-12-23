---
id: chapter-four
title: Codingeinheit 4 - Listen
sidebar_label: Listen
---

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

<iframe src="https://trinket.io/embed/python3/f2dab5db55" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Zuletzt koennen Listen auch mit dem `+`-Operator verbunden werden

<iframe src="https://trinket.io/embed/python3/24d7dcec12" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Listen und Schleifen

Listen kann man auch wie folgt auf `for`-Schleifen anwenden

<iframe src="https://trinket.io/embed/python3/c16796572d" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hierbei kann man sich gesondert `range()` angucken. Dies ist zwar intern keine Liste, aber kann einfach zu einer gemacht werden, indem man hierauf die `list()`-Funktion anwendet

<iframe src="https://trinket.io/embed/python3/de97d2906e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Negatives Indexieren

Man stelle sich die List wie ein Regler am Herd vor. Die einzelnen Eintraege wie die Stufen der Waermezufur sind die Indizes der Listeneintraege.

<iframe src="https://trinket.io/embed/python3/44cc806c55" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Intuitiv koennte man behaupten, dass bei einer Verschiebung des Reglers in die linke Orientierung der Listeneintrag um eins erhoeht (inkrementiert) wird.

<iframe src="https://trinket.io/embed/python3/f9326e0c33" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Im Gegensatz dazu ist es auch moeglich, den Regler in die entgegengesetzte Richtung zu bewegen. Will man den Regler von der Ausgangsposition einen Eintrag nach links bewegen, so ist die Ausgangsposition um eins verringert (dekrementiert).

<iframe src="https://trinket.io/embed/python3/e95db5de52" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Funktionen auf Listen

Zudem gibt es viele praktische Funktionen fuer Listen!

- `append`:
  Die Funktion `append()` fuegt der Liste am Ende ein neues Element hinzu.

<iframe src="https://trinket.io/embed/python3/8008720569" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hierbei kann das `variable.funktion()` erstmal so interpretiert werden, dass sich die Funktion auf die Variable bezieht.

- `len()`:
  Gibt die Laenge (engl. length) der Liste zurueck.

```python
print(len(["a", "b", "c", "d", "e"])) # 5
```

- `count()`:
  Wie oft ein einzelnes Element in einer Liste vorhanden ist.

```python
punktzahlen = [4, 5, 3, 4, 2, 6, 8, 4]
print(punktzahlen.count(4)) # 3
```

- `sort()`:
  Ordnet die Liste aufsteigend. Hierbei wird die Liste veraendert.

```python
paar_zahlen = [3,1,2,8,5]
print("Ungeordnet: " + str(paar_zahlen)) # Ungeordnet: [3, 1, 2, 8, 5]
paar_zahlen.sort()
print("Geordnet: " + str(paar_zahlen)) # Geordnet: [1, 2, 3, 5, 8]
```

Zudem gibt es noch viele weitere Methoden, allgemein lohnt es sich immer in die Dokumentation zu schauen oder einfach mal zu googlen!

## Verschachtelte Listen

Zudem koennen Listen intuitiv verschachtelt werden, sprich Listen koennen auch Elemente einer Liste sein.

<iframe src="https://trinket.io/embed/python3/4f3390b261" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## List Comprehension

Mit "List Comprehensions" bietet Python eine gute Möglichkeit Listen einfacher zu erstellen.

Die einfachste Form einer List Comprehension ist folgende:
`[funktion(x) for x in liste]`
was man lesen kann wie
"Nimm dir jedes Element aus der Liste, wende `funktion` drauf an, und dann pack es wieder zurueck."

Hier ein Beispiel:

<iframe src="https://trinket.io/embed/python3/df6baad41e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Diese List Erstellung kann auch mit einer Bedingung verbunden werden

<iframe src="https://trinket.io/embed/python3/2b1df6663b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
