---
id: chapter-five
title: Codingeinheit 5 - Files, Strings und Dictionaries
sidebar_label: Files, Strings und Dictionaries
---

# Strings

## Multiplikation

Neben der Verkettung von Strings ist auch die Multiplikation moeglich, hierbei wird der String einfach `n`-mal wiederholt.

<iframe src="https://trinket.io/embed/python3/d24bc2c949" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Indexing

Wie bereits bei Listen kann man auch bei Buchstaben und Teilstrings per Index extrahieren.

```python
str = "eLegal Goettingen"
print(str[1]) # L
```

## Negatives Indizieren

Analog ist auch negative Indizierung anwendbar.

```python
str = "eLegal Goettingen"
print(str[-1]) # n
```

## Slicing

Wie bei Listen ist der Doppelpunkt-Operator `:` mit Strings nutzbar.

<iframe src="https://trinket.io/embed/python3/2f730f74fe" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## "In" Operator

Mit dem `in` Keyword laesst sich feststellen, ob eine bestimmte Zeichenfolge in einem String enthalten ist

<iframe src="https://trinket.io/embed/python3/b4267dc7a1" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Escaping

in Python ist "\\" ein besonderer Char. Er wird auch "escape character" genannt.

Die wichtigsten "escape characters" sind

- `"\n"` = Newline
- `"\t"` = Tab
- `"\\"` = Backslash
- `"\'"` = Einzel Anführungszeichen

Der Folgende String ist nicht sehr übersichtlich, wenn man ihn ausgibt. Füge doch am Satzende eine neue Zeile an.

<iframe src="https://trinket.io/embed/python3/cdeede7618" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## String Methoden (Basics)

- `upper()` konvertiert den String zu Grossbuchstaben
- `lower()` konvertiert den String zu Kleinbuchstaben
- `count(char)` Zaehlt die Buchstaben in einem String
- `len()` Gibt die Menge an Buchstaben zurueck

<iframe src="https://trinket.io/embed/python3/121fc6d856" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## String Formatierung

Mit der `format` Funktionen lassen sich _Werte_ templaten.

<iframe src="https://trinket.io/embed/python3/a1a8cb17b5" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

# Dictionaries

Ein `dict` ist eine **Key-Value**-Datenstruktur mit der Syntax `{bezeichner : wert_hinter_dem_bezeichner}`.
Als Beispiel:

<iframe src="https://trinket.io/embed/python3/4157184884" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Natuerlich kann ein Dictionary auch mehrere Key-Value-Paare haben.

```python

```

Hierbei koennen unter anderem auch Listen als **Value** in einem Dictionary verwendet werden. Value eines Dictionaries kann auch erneut ein Dictionary sein.

<iframe src="https://trinket.io/embed/python3/c6e483f61f" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Eines Besonderheit ist jedoch, dass diese Strukturen nicht als **Key** verwendet werden können.
Führe zum testen folgenden Code aus:

<iframe src="https://trinket.io/embed/python3/fe5e541c01" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Ein Dictionary kann auch ohne Inhalt definiert werden.

<iframe src="https://trinket.io/embed/python3/531e776cd8" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

# Files

Wir lernen in diesem Abschnitt die wesentlichen Interaktionen mit Textdateien kennen.

## Textdatei lesen

<iframe src="https://trinket.io/embed/python3/c34f8d4e28" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Text schreiben

```python
#!/usr/bin/env python3

def main():
    f = open('textfile.txt', 'w', encoding='utf-8') # Wichtig! Wir benutzen hier den Schreibmodus 'w'.
    s = 'eLegal Goettingen ist cool!\n'
    f.write(s)
    f.close()

if __name__ == '__main__':
    main()
```

## `with`-Operator

Mit dem `with`-Operator lassen sich sehr einfach und übersichtlich Variablen für einen bestimmten Geltungsbereich schaffen.

```python
#!/usr/bin/env python3

def main():
    with open('textfile.txt', 'w', encoding='utf-8') as f:
        s = f.read()
        print(s) # Textinhalt der Datei

if __name__ == '__main__':
    main()
```
