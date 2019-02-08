import {base_url, app_id} from '../constants/weatherApi'

const constructGetEndpoint = city_name => {
  return `${base_url}?APPID=${app_id}&q=${city_name}&units=metric`
}

export default constructGetEndpoint;