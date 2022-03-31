export type TLocation = {
    "name": string,
    "region": string,
    "latitude": number,
    "longitude": number
  }
export type TLandpad =  {
    "id": string,
    "full_name": string,
    "status": string,
    "location": TLocation,
    "landing_type": string,
    "attempted_landings": number,
    "successful_landings": number,
    "wikipedia": string
    "details": string
  },