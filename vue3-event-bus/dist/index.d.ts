// Type definitions for vue3-event-bus-plugin
// Project: https://github.com/fyh-mengxiang/vue3-plugins
// Definitions by: fyh-mengxiang <fuyunhouazsj@aliyun.com>

import { App } from 'vue';

interface EventBusOptions {
  enableCache?: boolean;
  maxCacheSize?: number;
  clearCacheAfterSubscribe?: boolean;
}

interface EventBus {
  /**
   * Subscribe to an event
   * @param eventName Event name
   * @param callback Callback function
   * @param options Optional configuration
   * @returns Unsubscribe function
   */
  on(eventName: string, callback: (...args: any[]) => void, options?: { once?: boolean }): () => void;

  /**
   * Subscribe to an event once
   * @param eventName Event name
   * @param callback Callback function
   * @returns Unsubscribe function
   */
  once(eventName: string, callback: (...args: any[]) => void): () => void;

  /**
   * Unsubscribe from an event
   * @param eventName Event name
   * @param callback Optional callback function to unsubscribe
   */
  off(eventName: string, callback?: (...args: any[]) => void): void;

  /**
   * Emit an event
   * @param eventName Event name
   * @param args Arguments to pass to listeners
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Get the number of listeners for an event
   * @param eventName Event name
   * @returns Number of listeners
   */
  listenerCount(eventName: string): number;

  /**
   * Get all event names
   * @returns Array of event names
   */
  getEvents(): string[];

  /**
   * Clear all event listeners
   */
  clear(): void;
}

interface EventBusPluginOptions {
  debug?: boolean;
  eventBusOptions?: EventBusOptions;
}

interface EventBusPlugin {
  install: (app: App, options?: EventBusPluginOptions) => void;
}

declare const eventBus: EventBus;

declare class EventBusClass implements EventBus {
  constructor(options?: EventBusOptions);
  on(eventName: string, callback: (...args: any[]) => void, options?: { once?: boolean }): () => void;
  once(eventName: string, callback: (...args: any[]) => void): () => void;
  off(eventName: string, callback?: (...args: any[]) => void): void;
  emit(eventName: string, ...args: any[]): void;
  listenerCount(eventName: string): number;
  getEvents(): string[];
  clear(): void;
}

declare const _default: EventBusPlugin;

export default _default;
export { eventBus, EventBusClass as EventBus };
