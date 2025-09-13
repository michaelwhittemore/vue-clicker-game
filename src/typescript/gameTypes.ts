// Might want to rename this file 

import type { Component } from "vue";
export type ValidResources = 'ore' | 'steel' | 'gold';
export type ValidSkills = 'mining' | 'robotics' | 'trading' | 'manufacturing';
export interface TabsInterface {
  [key: string]: Component,
}
export interface TabInformation {
    tabName: string,
    tabColorClass: string,
}