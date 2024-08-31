import type { FormInstance, FormRules } from "element-plus"

const initialFormModel = {
  email: "",
  password: ""
}
const initialFormErrors = {
  email: "",
  password: ""
}

export const useLoginForm = defineStore("loginForm", () => {
  const state = reactive({
    model: { ...initialFormModel },
    errors: { ...initialFormErrors }
  })
  const rules = reactive<FormRules<typeof initialFormModel>>({
    email: [
      { required: true, message: "Введите электронную почту", trigger: "blur" },
      { type: "email", message: "Неправильный формат электронной почты", trigger: "blur" }
    ],
    password: [{ required: true, message: "Введите пароль", trigger: "blur" }]
  })

  const submitForm: (el: FormInstance) => Promise<void> = async (el: FormInstance) => {
    state.errors = { ...initialFormErrors }
    const valid = await el.validate()
    if (valid) {
      const { statusCode } = useRequest("/api/v1/auth/login", {
        method: "POST",
        body: state.model,
        onResponse: () => {
          useRouter().push({ name: "index" })
        },
        onResponseError: () => {
          if (statusCode.value === 401) {
            state.errors.email = " "
            state.errors.password = " "
            ElMessage.error({
              message: "Пользователь не зарегистрирован или неверный пароль",
              duration: 10000,
              grouping: true
            })
          }
        }
      })
    }
  }
  return { ...toRefs(state), rules, submitForm }
})
