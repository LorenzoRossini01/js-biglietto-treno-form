# Esercizio

### Traccia

Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### Svolgimento

1. chiedere all'utente Nome e Cognome
2. chiedere all'utente la lungheza del viaggi in km
3. chiedere all'utente se è minorenne, maggiorenne o over65
4. creare un bottone che raccolga le informazioni ottenute dall'utente

5. trovare il costo base moltiplicando la lunghezza del viaggio con la tariffa di 0.21€

   - se l'utente è minorenne applicare lo sconto del 20%
   - se l'utente è over65 applicare lo sconto del 40%
   - se l'utente è maggiorenne applicare il prezzo base

6. stampare nella sezione html del biglietto le seguenti informazioni:
   - nome e cognome dell'utente
   - che tipo di offerta viene applicata (under18 / base / over65)
   - carrozza (numero random da 1 a 10)
   - codice CP (numero random di x cifre)
   - prezzo finale del biglietto
