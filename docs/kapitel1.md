---
id: chapter-one
title: eLegal Codingeinheit 1
sidebar_label: Grundlagen
---

# eLegal Codingeinheit 1

# Comments, Syntax

```python
# Hallo liebe Kursteilnehmer
# Das hier ist ein Kommentar
# Ein Kommentar wird von dem Interpreter ignoriert
# Der Interpreter ist das Ding, das deinen Code quasi ausführt
# Kommentierter Code wird mit einem "#" gekennzeichnet
# Will man mehrere Zeilen kommentieren, benutzt man das """ oder '''

'''
Das hier ist ein praktisches
Beispiel
'''
```

    '\nDas hier ist ein praktisches \nBeispiel\n'

## Strings

Als Strings bezeichnet man Zeichenketten, hierbei ist es wichtig, dass diese entweder innerhalb von `'` oder `"` ist

```python
print('Ich "bin" interaktiv!')
print("Ich 'bin' interaktiv!")
```

    Ich "bin" interaktiv!
    Ich 'bin' interaktiv!

Zudem kann man Strings mit einem `+` verbinden

```python
print("Hiermit kann man mehrere" + "Strings verbinden")
```

    Hiermit kann man mehrereStrings verbinden

## print

Mit der Funktion `print()` können unteranderem Strings wiedergegeben werden.

```python
from elegal_assert import *
# Probiere es doch einmal selber
# Sorge dafür, dass das Programm "eLegal ist toll!" ausgibt.

#-----------
x = ""# Hier kommt dein Text hin
print(x)
#-----------



testat_string(x)
```

    Falscher Text TODO

## Integers

Neben Strings (Zeichenketten) sind Integer (Ganzzahlen) wichtig. Fuer diese gibt es folgende Operationen

## Arithmetische Operationen

```python
print(5 + 2) # 7
print(5 - 2) # 3
print(14 / 2) # 7
print(2 ^ 3) # 8
print(11 % 5) # 1
```

    7
    3
    7.0
    1
    1

Das `%` steht fuer den ganzzahligen Rest einer Division.
Hierbei ist es ganz wichtig, dass die Zahlen nicht in Anfuehrungszeichen sind, da sonst wie oben diese einfach nur hintereinandergeschrieben werden

```python
print(1 + 1) # 2
print("1" + "1") # 11
```

    2
    11

Rechtsstudent R möchte nach seinem Studium gerne bei KPMG arbeiten. Er hat aber gehört, dass er hier für einen guten Schnitt von mindestens 8 Punkten benötigt.

Berechne Rs Punkteschnitt wie folgt:

$$
\frac{\text{Note}_1 + \text{Note}_2 + \dots  + \text{Note}_n}{\text{Anzahl der Noten}}
$$

```python
# Berechne den Schnitt aus diesen drei Noten
Klausurschnitt = 6 + 7 + 8

x = "ersetze diesen String mit der Rechnung. Tipp, verwende die Variable Klausurenschnitt"


klausurenschnitt_check(x)
```

## Datentypen

Um Datentypen zu verbinden, muss man diese vorher umwandeln. Deswegen ist folgendes ungueltig:

```python
# Don't
print("Ich habe " + 5 + " Schönfelder")

# Do
print("Ich habe " + str(5) + " Schönfelder")
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-35-0a7ae42497c8> in <module>
          1 # Don't
    ----> 2 print("Ich habe " + 5 + " Schönfelder")
          3
          4 # Do
          5 print("Ich habe " + str(5) + " Schönfelder")


    TypeError: can only concatenate str (not "int") to str

![witzige eLegal Meme](https://i.imgflip.com/3bz63n.jpg)

### kleine praktische Einheit

Anwalt A ist fortschrittlich und benutzt zur Berechnung seiner Kosten Python.
Irgendwas funktioniert hier jedoch nicht so richtig. Evtl. Kannst du ihm ja helfen.

Tipp: Nutze hierfuer die von Python gegebenen Fehlermeldungen.

```python
# Kostenrechner:
zwei_stunden = 200
schriftsatz_pauschale = "500"

kosten = zwei_stunden + schriftsatz_pauschale
print(kosten)
# Führe das Programm doch einmal aus und korrigiere es anhand der Fehlermeldung
```

## Variablen

```python
x = 3 # Eine Variable x, welche den Integer 3 haelt

s = "Roxin" # Eine Variable s, welche den String 'Roxin' haelt

y = 7
print(x + y) # 10, das Ergebnis der Addition wird ausgegeben
print(x) # 3, die Variable x hat ihren Wert nicht geaendert!

z = x + y # das Ergebnis der Operation wird in z festgehalten
print(z) # 10

x = 18 # x wird ein neuer Wert zugewiesen; 3 -> 18 !
print(x) # 18

# Strings koennen auch mit '+' verkettet werden.
print(s + " ist toll.") # Roxin ist toll.

# Es ist auch moeglich mehrere Variablen gleichzeitig zuzuweisen
x, y, z = "Puppe", "Duttge", "Ambos"
print(x) # Puppe
print(y) # Duttge
print(z) # Ambos

x = y = z
print(x) # Ambos
print(y) # Ambos
print(z) # Ambos
```

## Division

```python
x = 10 / 2
print(x) # 5

x = 5 / 2
print(x) # 2.5, eine Fliesskommazahl - eigener Datentyp!
```

Hierbei ist zu beachten, dass Dezimalzahlen mit einem Punkt statt einem Komma getrennt werden.
