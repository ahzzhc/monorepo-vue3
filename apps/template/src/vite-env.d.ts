/// <reference types="vite/client" />

// this code tell typescript, all end with .vue files can import
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
