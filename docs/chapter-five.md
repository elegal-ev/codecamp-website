---
id: chapter-five
title: Codingeinheit 5 - Strings und Dictionaries
sidebar_label: Strings und Dictionaries
---

# Strings

```python
from elegal_assert import *
```

## Multiplikation

Neben der Verkettung von Strings ist auch die Multiplikation moeglich, hierbei wird der String einfach `n`-mal wiederholt.

```python
hallo = "Hallo"
zehn_hallos = hallo * 10 # Hier n = 10
print(zehn_hallos)
```

    HalloHalloHalloHalloHalloHalloHalloHalloHalloHallo

## Indexing

Wie bereits bei Listen kann man auch bei Buchstaben und Teilstrings per Index extrahieren.

```python
str = "eLegal Goettingen"
print(str[1])
```

## Negatives Indizieren

Analog ist auch negative Indizierung anwendbar.

```python
str = "eLegal Goettingen"
print(str[-1])
```

## Slicing

Wie bei Listen ist der Doppelpunkt-Operator `:` mit Strings nutzbar.

```python
start, end = 6 , 13
str = "Hallo Digitalisierung!"
print(str[start:end])
print(str[start:])
print(str[:end])
print(str[:])
print(str is str[:])
```

## "In" Operator

Mit dem `in` Keyword laesst sich feststellen, ob eine bestimmte Zeichenfolge in einem String enthalten ist

```python
str = 'eLegal Goettingen'
print('Legal' in str)
print('Goettingen' in str)
if 'KPMG Law' not in str:
    print("Hier laeuft irgendetwas falsch!!!!!")
```

## Escaping

in Python ist "\\" ein besonderer Char. Er wird auch "escape character" genannt.

Die wichtigsten "escape characters" sind

- `"\n"` = Newline
- `"\t"` = Tab
- `"\\"` = Backslash
- `"\'"` = Einzel Anführungszeichen

Der Folgende String ist nicht sehr übersichtlich, wenn man ihn ausgibt. Füge doch am Satzende eine neue Zeile an.

```python
string = "eLegal ist ein toller Verein, denn er stellt Bier.Ich möchte nicht in dieser Zeile stehen."
print(string)

check_string_for_elegal(string)
```

## String Methoden (Basics)

- `upper()` konvertiert den String zu Grossbuchstaben
- `lower()` konvertiert den String zu Kleinbuchstaben
- `count(char)` Zaehlt die Buchstaben in einem String
- `len()` Gibt die Menge an Buchstaben zurueck

```python
str = 'eLegal Goettingen'
print(str.upper())
print(str.lower())
print(str.count('e'))
print(len(str))
```

## String Formatierung

Mit der `format` Funktionen lassen sich _Werte_ templaten.

```python
str = "Hallo {name}! Lass uns doch um {zeit} {stunden} Stunden Zivilrecht lernen.".format(name='Justus', zeit='09:00', stunden=16)

print(str)
```

# Dictionaries

Ein `dict` ist eine **Key-Value**-Datenstruktur mit der Syntax `{bezeichner : wert_hinter_dem_bezeichner}`.
Als Beispiel:

```python
digitale_bibliothek = {"BGB" : "Buch 1\n Allgemeiner Teil\n Abschnitt 1 ..."}
print(digitale_bibliothek["BGB"])
```

Natuerlich kann ein Dictionary auch mehrere Key-Value-Paare haben.

```python
telefonbuch = [
    {"name": "Heinz", "telefonnummer": '+495512313'},
    {"name": "Sven", "telefonnummer": '+49555123213'}
]

for eintrag in telefonbuch:
    print("{} ist unter der Nummer {} erreichbar.".format(eintrag["name"], eintrag['telefonnummer']))



# Im folgenden bezieht sich hier die 0 auf das erste Dictionary in der Telefonbuchliste.
print(telefonbuch[0].keys())
print(telefonbuch[0].values())
```

Hierbei koennen unter anderem auch Listen als **Value** in einem Dictionary verwendet werden. Value eines Dictionaries kann auch erneut ein Dictionary sein.

```python
dict_1 = {
    "dein_dictionary" : {"key" : "value"}
}
```

Eines Besonderheit ist jedoch, dass diese Strukturen nicht als **Key** verwendet werden können.
Führe zum testen folgenden Code aus:

```python
a = {[1,2]:[3,4]}
```

Ein Dictionary kann auch ohne Inhalt definiert werden.

```python
kopf_nach_klausur = {}
kopf_nach_klausur["jura"] = "es kommt drauf an"
print(kopf_nach_klausur)
```

# Files

Wir lernen in diesem Abschnitt die wesentlichen Interaktionen mit Textdateien kennen.

## Textdatei lesen

### Code

```python
def lese_datei_ein(pfad_zur_datei):
    # Hier fragen wir mit der open()-Funktion Zugriff auf die Datei an.
    # Hierbei bedeuten die letzten beiden Parameter:
    # 'r' = Art des Zugriffes
    #   zB 'r' = 'read', 'w' = write, 'rw' = read-write
    # encoding='utf-8' = Unterstuetzung fuer Umlaute. Einfach immer nutzen
    referenz_auf_datei = open(pfad_zur_datei, 'r', encoding='utf-8')
    # .read() liesst die ganze Datei als Zeichenkette ein.
    print(referenz_auf_datei.read())
    # WICHTIG:
    # Eine Datei muss immer geschlossen werden.
    # Hierbei wird dem System gesagt, dass diese nicht mehr gebraucht wird.
    # Vergisst man dies, kann man zB die Datei nicht mehr loeschen,
    # bis das Programm beendet ist.
    referenz_auf_datei.close()

lese_datei_ein('textfile.txt')
```

## Text schreiben

### Code

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

Alternativ mit `with`-Operator

```python
#!/usr/bin/env python3

def main():
    with open('textfile.txt', 'w', encoding='utf-8') as f:
        s = 'eLegal Goettingen ist cool!\n'
        f.write(s)

if __name__ == '__main__':
    main()
```
