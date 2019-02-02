const base_url = 'http://api.openweathermap.org/data/2.5/weather'
const params = 'q=Medellín,co&units=metric'
const app_id = 'ad4a9817ea3e326ad266c86c1e5fd10b'
export const api_weather = `${base_url}?${params}&APPID=${app_id}`