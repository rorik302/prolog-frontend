import { reactive, toRefs } from "vue"

interface RequestOptions {
  body?: Record<string, any>
  immediate?: boolean
  method?: "GET" | "POST" | "PUT" | "DELETE"
  onResponse?: () => void
  onResponseError?: () => void
}

const useRequest = (url: string, options: RequestOptions) => {
  const state = reactive({
    statusCode: undefined as number | undefined
  })

  const fetch = $fetch.create({
    baseURL: useRuntimeConfig().public.backendUrl,
    timeout: 5000,
    credentials: "include",
    onRequest: (context) => {},
    onResponse: (context) => {
      state.statusCode = context.response.status
    }
  })
  const execute = async () => {
    await fetch(url, options)
  }

  const immediate = options.immediate !== undefined ? options.immediate : true
  if (immediate) {
    execute()
  }

  return { ...toRefs(state), execute }
}

export default useRequest
