---
id: chapter-two
title: Codingeinheit 2 - Funktionen und Scope
sidebar_label: Funktionen und Scope
---

# Funktionen

## Was ist eine Funktion?

Eine Funktion ist eine benannte Prozedur. Dies ermoeglicht uns, Code, welchen wir zuvor geschrieben haben, wiederzuverwenden.

Funktionen werden mit dem Begriff `def` (engl. define) eingeleitet:

<iframe src="https://trinket.io/embed/python3/d238995f48" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hierbei stellen die Leerzeichen vor den `print()`-Befehlen dar, was zur Funktion gehoert und was nicht. Spiel doch einfach selbst ein wenig mit der Einrückung rum!

Genauso wie bei `print` wird diese einfach mit `()` aufgerufen:

<iframe src="https://trinket.io/embed/python3/558f1ea49f" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Die Funktion kopiert ihren Inhalt an die Stelle in den Code, an der wie sie aufrufen.
Der grade eben genutze Code ist also äquivalent zu dem unten stehenden.

<iframe src="https://trinket.io/embed/python3/c4089e331f" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

**Du bist dran.**

Schreibe eine Funktion, welche "eLegal ist toll" ausgibt und nenne sie "eLegal"

<iframe src="https://trinket.io/embed/python3/82d519f1d3" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Parameter

Betrachten wir folgende Problemstellung:

Anwalt A hat in seiner Kanzelei zahlreiche Mandanten, die er taeglich mit einer netten Email begrüsst. Nachdem er durch seine Kooperation mit eLegal e.V. exponentielle Wachstüme erreicht hat, schrieb er Funktionen, die diese Aufgabe für ihn trivialisieren. Nun muss er für jeden seiner Mandanten eine komplett neue Funktion schreiben.

<iframe src="https://trinket.io/embed/python3/2ddfb0fbc5" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Gott sei Dank gibt es hierfuer Funktionsargumente!

Verwirrenderweise wird oft zwischen "Parametern" und "Argumenten" unterschieden.
Bei Parametern handelt es sich um die Werte, welche beim erstmaligen definieren der Funktion oben angegeben werden. Beispielsweise ist "name" in der Funktion "gruss" unten ein Parameter. 
Bei Argumenten handelt es sich um die Daten, mit der mann die Funktion in der Ausführung dann aufruft. 
z.B. gruss("eLegal") - hier wäre eLegal ein Funktionsargument.

<iframe src="https://trinket.io/embed/python3/b4b47cdb96" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Schlüsselwortargument

Schlüsselwortargumente werden verwendet um Parametern einen Standardwert zuzuweisen.
Konkret bedeutet dies, dass die Funktion den Standardwert verwendet, außer man übergibt ein Funktionsargument.
In diesem Fall wird der Standardwert überschrieben.

<iframe src="https://trinket.io/embed/python3/9918335033" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Dies führt dazu, dass no_keyword nicht ohne ein Parameter aufgerufen werden kann.
`yes_keyword` hingegen schon

<iframe src="https://trinket.io/embed/python3/bfb13f0131" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Möchte man im Fall von yes_keyword vom Standard abweichen, so muss man die Funktion lediglich normal aufrufen und ein Parameter angeben. Der Standard wird dann sozusagen überschrieben.

```python
yes_keyword("Neuer Parameter")
```

## Rückgabewerte

Damit die Ergebnisse deiner Funktion nicht nach dem printen verloren gehen, gibt es das sogenannte `return`-Schlüsselwort

<iframe src="https://trinket.io/embed/python3/c297ecd204" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Versuch einfach mal das obige Beispiel so zu veraendern, dass die Funktion die eingegebene Zahl mal sich selbst nimmt!

## Variablengültigkeitsbereich

Parameter und Variablen sind nicht in allen Bereichen des Codes verwendbar, sondern sind auf ihre jeweiligen Bereiche beschränkt.

Betrachten wir hierzu eine Deutschdarstellung.

```python
begruessung = "Guten Tag"
verabschiedung = "Auf Wiedersehen"
```

Jeder hat Zugriff auf Hochdeutsch.

Betrachten wir diese Darstellung nun unter der Voraussetzung, dass sich außerdem Sprachbarrieren gebildet haben, welche in Funktionen dargestellt sind.

```python
begruessung = "Guten Tag"
verabschiedung = "Auf Wiedersehen"

def bayrisch():
    bayrische_begruessung = "Griass Di"
```

Hier kann jeder Bayer auf die allgemeingültige Begrüßung "Guten Tag" zugreifen. Hinzukommend aber auch auf die bayrische.
Jemand außerhalb des bayrischen Anwendungsbereiches kann dies nicht. Denn er weiß nicht was es bedeutet und kann bayrisch nicht verstehen.

Probiere, zur Veranschaulichung, die Ausführung folgenden Codes. Er sollte eine Fehlermeldung hervorrufen.

<iframe src="https://trinket.io/embed/python3/3f7c08ce46" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Auf die bayrische_begruessung kann nämlich nur innerhalb der Funktion zugegriffen werden.
