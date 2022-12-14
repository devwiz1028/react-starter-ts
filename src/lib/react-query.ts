import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const queryConfig: DefaultOptions = {
  queries: {},
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })
