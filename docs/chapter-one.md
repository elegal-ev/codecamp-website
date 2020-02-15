---
id: chapter-one
title: Codingeinheit 1 - Die Grundlagen
sidebar_label: Grundlagen
---

import CodeBlock from './CodeBlock';

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

<CodeBlock frame="https://trinket.io/embed/python3/6921349f7d">

```python
# TODO
```

</CodeBlock>

Kommentare werden genutzt, um Informationen im Code zu platzieren, ohne, dass diese vom eigentlichen Programm ausgeführt werden. 
Dies ist hilfreich um das Lesen des Codes zu vereinfachen, sowie eine etwaige Wartung zu erleichtern.

## Strings

Als Strings (🎻) bezeichnet man Zeichenketten, hierbei ist es wichtig, dass diese entweder innerhalb von `'` oder `"` ist.
Strings werden immer dann genutzt, wenn man in irgendeiner Form Textzeichen benötigt. Dies kann, beispielsweise, der Fall beim versenden von Informationen sein, oder auch bei der Ausgabe von Informationen.

```python
print('Ich "bin" interaktiv!')
print("Ich 'bin' interaktiv!")
```

<CodeBlock frame="https://trinket.io/embed/python3/675bec830e">

```python
# TODO
```

</CodeBlock>

Zudem kann man Strings mit einem `+` verbinden

```python
print("Hiermit kann man mehrere " + "Strings verbinden")
```

<CodeBlock frame="https://trinket.io/embed/python3/8dbb11f9c0">

```python
# TODO
```

</CodeBlock>

## print

Mit der Funktion `print()` können Strings in der Konsole wiedergegeben werden.

<CodeBlock frame="https://trinket.io/embed/python3/abce55fd39">

```python
# TODO
```

</CodeBlock>

## Integers

Neben Strings (Zeichenketten) sind Integer (Ganzzahlen) wichtig. Für diese gibt es folgende Operationen

## Arithmetische Operationen

```python
print(5 + 2)
print(5 - 2)
print(14 / 2)
print(2 ^ 3)
print(11 % 5)
```

<CodeBlock frame="https://trinket.io/embed/python3/c0270b5fd3">

```python
# TODO
```

</CodeBlock>

Das `%` steht für den ganzzahligen Rest einer Division.
Hierbei ist es ganz wichtig, dass die Zahlen nicht in Anführungszeichen sind, da sonst wie oben diese einfach nur hintereinandergeschrieben werden

```python
print(1 + 1)
print("1" + "1")
```

<CodeBlock frame="https://trinket.io/embed/python3/f5777c34bc">

```python
# TODO
```

</CodeBlock>

Rechtsstudent R möchte nach seinem Studium gerne bei KPMG arbeiten. Er hat aber gehört, dass er hier für einen guten Schnitt von mindestens 8 Punkten benötigt.
Berechne Rs Punkteschnitt wie folgt:

<center>
    <img src="/static/img/punkteschnitt.svg" alt="Punkteschnittformel" />
</center>

<CodeBlock frame="https://trinket.io/embed/python3/0979992cbc">

```python
# TODO
```

</CodeBlock>

## Datentypen

Um Datentypen zu verbinden, muss man diese vorher umwandeln. Deswegen ist folgendes ungültig:

<CodeBlock frame="https://trinket.io/embed/python3/0834f18005">

```python
# TODO
```

</CodeBlock>

<center>
    <img alt="witzige eLegal Meme" src="https://i.imgflip.com/3bz63n.jpg" />
</center>

### kleine praktische Einheit

Anwalt A ist fortschrittlich und benutzt zur Berechnung seiner Kosten Python.
Irgendwas funktioniert hier jedoch nicht so richtig. Evtl. Kannst du ihm ja helfen.

> Tipp: Nutze hierfür die von Python gegebenen Fehlermeldungen!

<CodeBlock frame="https://trinket.io/embed/python3/8abfb712dc">

```python
# TODO
```

</CodeBlock>

## Variablen
Variablen werden genutzt um auf Werte zu verweisen. Der Vorteil bei deren Verwendung ist, dass man die Werte nicht jedes mal neu schreiben muss, sondern eine einmal deklarierte Variable beliebig oft verwenden kann.

<CodeBlock frame="https://trinket.io/embed/python3/d4121f4c92">

```python
# TODO
```

</CodeBlock>

Jedes mal, wenn wir hier eine der Variablen verwenden, wird die Variable quasi, durch den ihr zugewiesenen Wert, ersetzt.