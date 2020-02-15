---
id: chapter-five
title: Codingeinheit 5 - Files, Strings und Dictionaries
sidebar_label: Files, Strings und Dictionaries
---
​
import CodeBlock from './CodeBlock';
​
# Strings
​
## Multiplikation
​
Neben der Verkettung von Strings ist auch die Multiplikation möglich, hierbei wird der String einfach `n`-mal wiederholt.
​
<CodeBlock frame="https://trinket.io/embed/python3/d24bc2c949">
​
```python
hallo = "Hallo"
zehn_hallos = hallo * 10 # Hier n = 10
print(zehn_hallos)
```
​
</CodeBlock>
​
​
## Indexing
​
Wie bereits bei Listen kann man auch bei Buchstaben und Teilstrings per Index extrahieren.
​
```python
str = "eLegal Goettingen"
print(str[1]) # L
```
​
## Negatives Indexieren
​
Analog ist auch negative Indexierung anwendbar.
​
```python
str = "eLegal Goettingen"
print(str[-1]) # n
```
​
## Slicing
​
Der Doppelpunkt-Operator `:` ist unteranderem mit Strings nutzbar.
Dabei stellt dieser sicher, dass nur innerhalb der Liste gesucht wird. 
​
Probieren geht über studieren, du bist also wieder an der Reihe:
​
<CodeBlock frame="https://trinket.io/embed/python3/2089a02b40">
​
```python
start, end = 6 , 13
str = "Hallo Digitalisierung!"
print(str[start:end])
print(str[start])
print(str[end])
print(str[:])
print(str is str[:])
```
​
</CodeBlock>
​
## "In" Operator
​
Mit dem `in` Keyword lässt sich feststellen, ob eine bestimmte Zeichenfolge in einem String enthalten ist
​
<CodeBlock frame="https://trinket.io/embed/python3/b4267dc7a1">
​
```python
str = 'eLegal Goettingen'
print('Legal' in str)
print('Goettingen' in str)
if 'KPMG Law' not in str:
    print("Hier laeuft irgendetwas falsch!!!!!")
```
​
</CodeBlock>
​
​
## Escaping
​
In Python ist "\\" ein besonderer Char. Er wird auch "escape character" genannt.
​
Die wichtigsten "escape characters" sind:
​
- `"\n"` = Newline
- `"\t"` = Tab
- `"\\"` = Backslash
- `"\'"` = Einzelne Anführungszeichen
​
Der Folgende String ist nicht sehr übersichtlich, wenn man ihn ausgibt. Füge doch am Satzende eine neue Zeile an.
​
​
<CodeBlock frame="https://trinket.io/embed/python3/cdeede7618">
​
```python
string = "eLegal ist ein toller Verein, denn er stellt Bier.Ich möchte nicht in dieser Zeile stehen."
print(string)
```
​
</CodeBlock>
​
​
## String Methoden (Basics)
​
- `upper()` konvertiert den String zu GROSSBUCHSTABEN
- `lower()` konvertiert den String zu Kleinbuchstaben
- `count(char)` Zählt die Buchstaben in einem String
- `len()` Gibt die Menge an Buchstaben zurück
​
​
<CodeBlock frame="https://trinket.io/embed/python3/121fc6d856">
​
```python
str = 'eLegal Goettingen'
print(str.upper())
print(str.lower())
print(str.count('e'))
print(len(str))
```
​
</CodeBlock>
​
​
## String Formatierung
​
Mit der `format` Funktion kann man _Werte_, die eingesetzt werden sollen, templaten (vorgeben).
​
<CodeBlock frame="https://trinket.io/embed/python3/a1a8cb17b5">
​
```python
str = "Hallo {name}! Lass uns doch um {zeit} {stunden} Stunden Zivilrecht lernen.".format(name='Justus', zeit='09:00', stunden=16)
print(str)
```
​
</CodeBlock>
​
​
# Dictionaries
​
Ein `dict` ist eine **Key-Value**-Datenstruktur.
Als Beispiel:
​
<CodeBlock frame="https://trinket.io/embed/python3/4157184884">

</CodeBlock>
​
​
Natürlich kann ein Dictionary auch mehrere Key-Value-Paare haben.
​

Hierbei können unter anderem auch Listen als **Value** in einem Dictionary verwendet werden. Value eines Dictionaries kann auch erneut ein Dictionary sein.
​
<CodeBlock frame="https://trinket.io/embed/python3/c6e483f61f">
​
```python
for eintrag in telefonbuch:
    print("{} ist unter der Nummer {} erreichbar.".format(eintrag["name"], eintrag['telefonnummer']))
# Im folgenden bezieht sich hier die 0 auf das erste Dictionary in der Telefonbuchliste.
print(telefonbuch[0].keys())
print(telefonbuch[0].values())
```
​
</CodeBlock>
​
​
​
Eine Besonderheit ist jedoch, dass diese Strukturen nicht als **Key** verwendet werden können.
Führe zum testen folgenden Code aus:
​
<CodeBlock frame="https://trinket.io/embed/python3/fe5e541c01">
​
</CodeBlock>
​
Ein Dictionary kann auch ohne Inhalt definiert werden.
​
<CodeBlock frame="https://trinket.io/embed/python3/531e776cd8">
​
```python
kopf_nach_klausur = {}
kopf_nach_klausur["jura"] = "es kommt drauf an"
print(kopf_nach_klausur)
```
​
</CodeBlock>
​
# Files
​
Wir lernen in diesem Abschnitt die wesentlichen Interaktionen mit Textdateien kennen.
​
## Textdatei lesen
​
<CodeBlock frame="https://trinket.io/embed/python3/c34f8d4e28">
​
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
​
</CodeBlock>
​
​
## Text schreiben
​
```python
#!/usr/bin/env python3
​
def main():
    f = open('textfile.txt', 'w', encoding='utf-8') # Wichtig! Wir benutzen hier den Schreibmodus 'w'.
    s = 'eLegal Goettingen ist cool!\n'
    f.write(s)
    f.close()
​
if __name__ == '__main__':
    main()
```
​
## `with`-Operator
​
Mit dem `with`-Operator lassen sich sehr einfach und übersichtlich Variablen für einen bestimmten Geltungsbereich schaffen.
​
```python
#!/usr/bin/env python3
​
def main():
    with open('textfile.txt', 'w', encoding='utf-8') as f:
        s = f.read()
        print(s) # Textinhalt der Datei
​
if __name__ == '__main__':
    main()
```