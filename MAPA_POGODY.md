# Mapa Pogody - Przewodnik

## Nowe Funkcje

### 🗺️ Interaktywna Mapa Temperatury

Aplikacja teraz zawiera interaktywną mapę, która pokazuje rozkład temperatury na terenie całej Polski.

#### Cechy mapy:

- **Kolorowe Markery** - Każda stacja pogodowa jest reprezentowana przez marker z kolorowym kółkiem pokazującym aktualną temperaturę
- **Skalowanie Temperatur** - Kolory automatycznie dostosowują się do zakresu temperatur:
  - 🔵 Ciemny niebieski: poniżej -10°C
  - 🔵 Jasny niebieski: -10°C do 0°C
  - 🔵 Cyjan: 0°C do 10°C
  - 🟢 Zielony: 10°C do 20°C
  - 🟡 Pomarańczowy: 20°C do 30°C
  - 🔴 Czerwony: powyżej 30°C

- **Popup z Szczegółami** - Kliknij na dowolny marker, aby zobaczyć:
  - Nazwę stacji
  - Temperaturę
  - Wilgotność
  - Prędkość wiatru

- **Pełna Responsywność** - Mapa dostosowuje się do rozmiaru ekranu (mobile, tablet, desktop)

#### Jak korzystać z mapy:

1. Przewiń stronę do sekcji "Mapa pogody"
2. Przeglądaj mapę Polski z zaznaczonymi stacjami
3. Kliknij na dowolny marker, aby wyświetlić szczegółowe informacje
4. Użyj przycisków '+' i '-' do zmiany poziomu powiększenia
5. Przeciągaj mapę, aby przesunąć widok

### ✅ Naprawiona Wilgotność

Komponent karty pogody został ulepszony, aby prawidłowo wyświetlać wilgotność oraz inne parametry pogodowe. Teraz obsługuje różne formaty nazw pól z API i pokazuje "N/A" jeśli dane nie są dostępne.

## Technologia

Mapa jest budowana przy użyciu:
- **Leaflet** - Biblioteka map Open Source
- **React Leaflet** - React wrapper dla Leafletu
- **OpenStreetMap** - Darmowe dane mapy

## Instalacja Zależności

Jeśli biblioteki map nie zostały zainstalowane automatycznie, uruchom:

```bash
npm install leaflet react-leaflet
```

## Struktura Komponenty Mapy

```javascript
// WeatherMap.jsx
- Wyświetla mapę Polski (center: 52.0, 19.0)
- Tworzy markery dla każdej stacji z danymi współrzędnych
- Używa niestandardowych ikon pokazujących temperaturę
- Wyświetla popupy z informacjami pogodowymi
```

## Wymagane Pola Danych

Aby mapa działała poprawnie, stacje pogodowe muszą zawierać:
- `d_lat` - Szerokość geograficzna
- `d_lon` - Długość geograficzna
- `temperatura` lub `temp` - Temperatura
- `wilgotnosc` lub `humidity` - Wilgotność
- `predkosc_wiatru` lub `wind_speed` - Prędkość wiatru
- `stacja` lub `name` - Nazwa stacji

## Dostęp Offline

Mapa używa OpenStreetMap, która wymaga połączenia internetowego. Jednak aplikacja i dane pogodowe będą działać nawet bez mapy.

## Osoby doradcy

Aby dowiedzieć się więcej na temat Leaflet, odwiedź:
- https://leafletjs.com/
- https://react-leaflet.js.org/

---

**Ciesz się eksplorując pogodę na mapie Polski!** 🌤️🗺️
