import { ROUTING_PAGE } from '../actionTypes'

export function RoutingPage ({ title }) {
  return {
    type: ROUTING_PAGE,
    title
  }
}
