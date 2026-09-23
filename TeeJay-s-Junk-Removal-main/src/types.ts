/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'services' | 'testimonials' | 'gallery' | 'about' | 'contact' | 'book' | 'estimator' | 'work_video';

export const SERVICE_AREAS = [
  "Tucson",
  "Marana",
  "Oro Valley",
  "Sahuarita",
  "South Tucson",
  "Catalina Foothills",
  "Casas Adobes",
  "Vail",
  "Tanque Verde",
  "Green Valley",
  "Corona de Tucson",
  "Flowing Wells",
  "Drexel Heights",
  "Tortolita",
  "Tucson Estates",
  "Catalina"
];

export const SERVICES = [
  "Residential Junk Removal",
  "Commercial Junk Removal",
  "Estate Cleanouts",
  "Furniture Removal",
  "Appliance Removal",
  "Garage & Attic Cleanouts",
  "Eviction Cleanouts",
  "Property Cleanouts",
  "Brush & Yard Debris Removal",
  "Construction Debris Removal",
  "Storm Debris Cleanup",
  "Mattress Removal",
  "Light Demolition"
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}
