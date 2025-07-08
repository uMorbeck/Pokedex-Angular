import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache = new Map<string, {response: HttpResponse<any>, expiry: number}> ();
  private readonly CACHE_DURATION_IN_MIN = 5;

  constructor() { }

  get(url: string): HttpResponse<any> | undefined {
    const cachedItem = this.cache.get(url);

    if (!cachedItem) {
      return undefined;
    }

    if (Date.now() > cachedItem.expiry) {
      this.cache.delete(url);
      return undefined;
    }

    return cachedItem.response;
  }

  put(url: string, response: HttpResponse<any>): void {
    const expiry = Date.now() + this.CACHE_DURATION_IN_MIN * 60 * 1000;
    this.cache.set(url, {response, expiry});
  }

  invalidate(url: string): void {
    this.cache.delete(url);
  }

  invalidateAll(): void {
    this.cache.clear();
  }
}
