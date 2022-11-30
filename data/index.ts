import ManagedKubernetes from './managed-kubernetes.json'
import KubernetesDistributions from './kubernetes-distributions.json'
import IngressControllers from './ingress-controller.json'
import DesktopClients from './desktop-clients.json'

const formatTopic = (topic: Topic): Topic => {
  topic.items.sort((x, y) => (x.title > y.title ? 1 : -1))
  return topic
}

export const AllTopics: Topic[] = [
  formatTopic(ManagedKubernetes),
  formatTopic(KubernetesDistributions),
  formatTopic(IngressControllers),
  formatTopic(DesktopClients),
]

export type Topic = {
  id: string
  title: string
  description: string
  features?: Record<string, TopicFeature>
  items: TopicItem[]
}

export type TopicFeature = {
  title: string
  description: string
}

export type TopicItem = {
  id: string
  title: string
  description?: string
  url: string
  features?: Record<string, string>
}
