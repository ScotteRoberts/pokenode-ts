/* eslint-disable import/prefer-default-export */

import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Location, LocationArea, NamedAPIResourceList, PalParkArea, Region } from '../models';
import client from '../config/axios';
import { Endpoints } from '../constants';

export class LocationClient {
  private api: AxiosInstance = client;

  /**
   * Get a Location by it's name
   * @param name The Location name
   * @returns A Location
   */
  public getLocationByName(name: string): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}/${name}`)
        .then((response: AxiosResponse<Location>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Location by it's ID
   * @param id The Location ID
   * @returns A location
   */
  public getLocationById(id: number): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}/${id}`)
        .then((response: AxiosResponse<Location>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Location Area by it's name
   * @param name The Location Area name
   * @returns A Location Area
   */
  public getLocationAreaByName(name: string): Promise<LocationArea> {
    return new Promise<LocationArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}/${name}`)
        .then((response: AxiosResponse<LocationArea>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Location Area by it's ID
   * @param id The Location Area ID
   * @returns A Location Area
   */
  public getLocationAreaById(id: number): Promise<LocationArea> {
    return new Promise<LocationArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}/${id}`)
        .then((response: AxiosResponse<LocationArea>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Pal Park Area by it's name
   * @param name The Pal Park Area name
   * @returns A Pal Park Area
   */
  public getPalParkAreaByName(name: string): Promise<PalParkArea> {
    return new Promise<PalParkArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}/${name}`)
        .then((response: AxiosResponse<PalParkArea>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Pal Park Area by it's ID
   * @param id The Pal Park Area ID
   * @returns A Pal Park Area
   */
  public getPalParkAreaById(id: number): Promise<PalParkArea> {
    return new Promise<PalParkArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}/${id}`)
        .then((response: AxiosResponse<PalParkArea>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Region by it's name
   * @param name The Region name
   * @returns A Region
   */
  public getRegionByName(name: string): Promise<Region> {
    return new Promise<Region>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}/${name}`)
        .then((response: AxiosResponse<Region>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get a Region by it's ID
   * @param id The Region ID
   * @returns A Region
   */
  public getRegionById(id: number): Promise<Region> {
    return new Promise<Region>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}/${id}`)
        .then((response: AxiosResponse<Region>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * List Locations
   * @param offset The first item that you will get
   * @param limit How many Locations per page
   * @returns A list of Locations
   */
  public listLocations(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}?offset=${offset}&limit=${limit}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * List Location Areas
   * @param offset The first item that you will get
   * @param limit How many Locations per page
   * @returns A list of Location Areas
   */
  public listLocationAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}?offset=${offset}&limit=${limit}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * List Pal Park Areas
   * @param offset The first item that you will get
   * @param limit How many Pal Park Areas per page
   * @returns A list of Pal Park Areas
   */
  public listPalParkAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}?offset=${offset}&limit=${limit}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * List Regions
   * @param offset The first item that you will get
   * @param limit How many Regions per page
   * @returns A list of Regions
   */
  public listRegions(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}?offset=${offset}&limit=${limit}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }
}
