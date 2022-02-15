import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(public utilsService: UtilsService) {}

  norm(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }

  lerp(norm: number, min: number, max: number): number {
    return (max - min) * norm + min;
  }

  map(
    value: number,
    sourceMin: number,
    sourceMax: number,
    destMin: number,
    destMax: number
  ): number {
    return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
  }

  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
  }

  degreesToRads(degrees: number): number {
    return (degrees / 180) * Math.PI;
  }

  radsToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  roundToPlaces(value: number, places: number): number {
    var mult = Math.pow(10, places);
    return Math.round(value * mult) / mult;
  }

  roundNearest(value: number, nearest: number): number {
    return Math.round(value / nearest) * nearest;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // max is exclusive and min is inclusive
  }

  // distance(p0: number, p1: number): number {
  //   var dx = p1.x - p0.x,
  //     dy = p1.y - p0.y;
  //   return Math.sqrt(dx * dx + dy * dy);
  // }

  // distanceXY(x0, y0, x1, y1): number {
  //   var dx = x1 - x0,
  //     dy = y1 - y0;
  //   return Math.sqrt(dx * dx + dy * dy);
  // }

  // inRange(value, min, max): boolean {
  //   return value >= Math.min(min, max) && value <= Math.max(min, max);
  // }

  // rangeIntersect(min0, max0, min1, max1): boolean {
  //   return (
  //     Math.max(min0, max0) >= Math.min(min1, max1) &&
  //     Math.min(min0, max0) <= Math.max(min1, max1)
  //   );
  // }

  // rectIntersect(r0, r1): boolean {
  //   return (
  //     utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
  //     utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height)
  //   );
  // }
}
