import { Topic, TopicItem } from '@data'
import Link from 'next/link'
import { Icon } from './Icon'

type Props = {
  topic: Topic
  item: TopicItem
}

export function Card(props: Props) {
  return (
    <Link
      key={props.item.id}
      href={`/topics/${props.topic.id}/${props.item.id}`}
      className="relative flex cursor-pointer items-start space-x-3 rounded border border-gray-300 px-2 py-2 shadow-sm focus-within:ring-indigo-700 hover:border-gray-400"
    >
      <div className="mt-1 flex-shrink-0">
        <Icon className="h-10 w-10 rounded" {...props} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-md font-medium text-gray-900">
          {props.item.title}
        </h3>
        <p className="text-sm text-gray-500">{props.item.description}</p>
      </div>
    </Link>
  )
}
