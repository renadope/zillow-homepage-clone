import { cn } from './lib/utils.ts'

type StatusType = 'Active' | 'InActive' | 'New'

interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusType
}

const statusVariants: Record<StatusType, string> = {
  Active: cn(
    'group-hover:animate-pulse',
    'group-hover:text-green-900',
    'group-hover:ring-1',
    'group-hover:ring-sky-300'
  ),
  InActive: cn(
    'group-hover:text-red-900',
    'group-hover:ring-1',
    'group-hover:ring-sky-300',
    'bg-red-100',
    'text-red-700'
  ),
  New: cn(
    'group-hover:animate-pulse',
    'text-sky-700',
    'bg-sky-100',
    'group-hover:text-sky-900',
    'group-hover:ring-2',
    'group-hover:ring-sky-300'
  ),
}

export function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  return (
    <span
      data-status={status}
      className={cn(
        // Base styles
        'rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-700',
        statusVariants[status],
        className
      )}
      {...props}
    >
      {status}
    </span>
  )
}
