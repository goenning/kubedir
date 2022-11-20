import { Topic, TopicItem } from '../data'
import Image from 'next/image'

type Props = {
  topic: Topic
  item: TopicItem
}

export function Card(props: Props) {
  return (
    <a
      key={props.item.id}
      href={props.item.url}
      rel="nofollow"
      className="relative flex cursor-pointer items-center space-x-3 rounded border border-gray-300 bg-white px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div className="flex-shrink-0">
        <Image
          width={200}
          height={200}
          className="h-8 w-8 rounded"
          src={`/images/${props.topic.id}/${props.item.id}.png`}
          alt={`Logo for ${props.item.title}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">{props.item.title}</p>
      </div>
    </a>
  )
}
