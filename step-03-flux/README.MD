# Step 03: Flux
## 1. Flux hinzufügen
Jetzt fügen wir Flux hinzu.
```
npm install --save flux @types/flux 
```
## 3. Dispatcher hinzufügen
Anschließend legen wir ein app Verzeichnis an, in dem wir unsere flux Dateien legen werden. Zum Beispiel den app-dispatcher.
## 4. Action mit Types hinzufügen
Im Dispatcher haben wir die Klasse AppAction verwendet. Diese bauen wir nun.
Sie besteht aus einer Action-Art und verbundenen Daten.
## 5. ActionHandler
Das Triggern der Actions werden wir an einer Stelle bündeln, damit der Code übersichtlicher wird.
Dafür verwenden wir den ActionHandler.
## 6. Store hinzufügen
Jetzt brauchen wir noch die Stores zum Speichern der Daten.
Dazu legen wir ein Verzeichnis stores an.
Darein kommt ein Verzeichnis für die Todo Items.
Wir legen den Store an und füllen ihn mit ein bisschen Leben. Die onDispatch Methode füllen wir später
## 7. Storebindings
Jetzt bauen wir 