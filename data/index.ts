import ManagedKubernetes from './managed-kubernetes.json'
import KubernetesDistributions from './kubernetes-distributions.json'

export const AllTopics: Topic[] = [ManagedKubernetes, KubernetesDistributions]

export type Topic = {
  id: string
  title: string
  description: string
}

export type TopicItem = {
  id: string
  title: string
}
