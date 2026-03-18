

const Persistence = (() => {

  const HISTORY_KEY = 'weathercore_history';

  return {
    /**
     * Guarda el historial completo en localStorage.
     * @param {Array} historyArray  Array de objetos WeatherData<
     */
    saveHistory(historyArray) {
      try {
        const serialized = JSON.stringify(historyArray);
        localStorage.setItem(HISTORY_KEY, serialized);
      } catch (err) {
        console.warn('[Persistence] No se pudo guardar en localStorage:', err);
      }
    },

    /**
     * Recupera el historial guardado desde localStorage.
     * @returns {Array} Historial deserializado, o arreglo vacío si no existe/error.
     */
    loadHistory() {
      try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        // Validación mínima: debe ser un array
        return Array.isArray(parsed) ? parsed : [];
      } catch (err) {
        console.warn('[Persistence] Error al leer localStorage:', err);
        return [];
      }
    },

    /**
     * Elimina el historial guardado en localStorage.
     */
    clearHistory() {
      try {
        localStorage.removeItem(HISTORY_KEY);
      } catch (err) {
        console.warn('[Persistence] No se pudo limpiar localStorage:', err);
      }
    },
  };

})();